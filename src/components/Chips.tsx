export default function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  )
}
