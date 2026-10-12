import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { viewerProfiles, type ProfileId, type Project, type SectionId } from './data/portfolio';
import { SmoothScrollProvider } from './hooks/smoothScroll';

// Cinematic overlays
import OpeningSequence from './components/OpeningSequence';
import PlayIntro from './components/PlayIntro';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';

// Layout
import Navbar from './components/Navbar';

// Sections
import Hero from './components/Hero';
import Scene from './components/Scene';
import About from './components/About';
import ContinueWatching from './components/ContinueWatching';
import Seasons from './components/Seasons';
import Originals from './components/Originals';
import Services from './components/Services';
import Skills from './components/Skills';
import ResumeViewer from './components/ResumeViewer';
import FinalCTA from './components/FinalCTA';

type Phase = 'opening' | 'selecting' | 'watching';

export default function App() {
  const [phase, setPhase] = useState<Phase>('opening');
  const [profileId, setProfileId] = useState<ProfileId>('rohan');
  const [showIntro, setShowIntro] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const profile = viewerProfiles.find((p: { id: ProfileId }) => p.id === profileId)!;

  const handleOpeningDone = useCallback(() => setPhase('watching'), []);
  const handleProfilePick = useCallback((id: ProfileId) => {
    setProfileId(id);
    setPhase('watching');
  }, []);
  const handlePlay = useCallback(() => setShowIntro(true), []);
  const handleReplay = useCallback(() => {
    setPhase('opening');
  }, []);
  const handleSwitch = useCallback((id: ProfileId) => setProfileId(id), []);

  return (
    <SmoothScrollProvider>
      <CustomCursor />

      {/* Film grain overlay */}
      <div aria-hidden className="grain" />

      {/* ── Cinematic overlays ── */}
      <AnimatePresence>
        {phase === 'opening' && (
          <OpeningSequence key="opening" onDone={handleOpeningDone} />
        )}
      </AnimatePresence>



      <AnimatePresence>
        {showIntro && (
          <PlayIntro key="intro" onClose={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResume && (
          <ResumeModal key="resume" onClose={() => setShowResume(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            key="project-modal"
            project={activeProject}
            onClose={() => setActiveProject(null)}
            onSwitch={(p) => setActiveProject(p)}
          />
        )}
      </AnimatePresence>

      {/* ── Main portfolio (always mounted so state & scroll persist) ── */}
      <div aria-hidden={phase !== 'watching'}>
        <Navbar order={profile.order} />

        <main>
          <Hero onPlay={handlePlay} />

          {/* "Continue Exploring" progress rail */}
          <ContinueWatching order={profile.order} />

          {/* Dynamically ordered sections per viewer profile */}
          {profile.order.map((id: SectionId) => (
            <Scene key={id} id={id}>
              {id === 'about' && <About />}
              {id === 'journey' && <Seasons />}
              {id === 'originals' && <Originals onOpen={(p) => setActiveProject(p)} />}
              {id === 'services' && <Services onOpenProject={(p) => setActiveProject(p)} />}
              {id === 'skills' && <Skills />}
              {id === 'story' && <ResumeViewer onView={() => setShowResume(true)} />}
            </Scene>
          ))}

          <FinalCTA onReplay={handleReplay} />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
