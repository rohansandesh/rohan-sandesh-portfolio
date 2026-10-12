export default function SectionHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div className="sh">
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  )
}
