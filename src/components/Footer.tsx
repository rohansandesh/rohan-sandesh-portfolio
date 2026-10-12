import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <p>{profile.fullName}</p>
      <p>{profile.tagline.join(' | ')}</p>
    </footer>
  )
}
