export default function Section({ id, title, lead, children, dark }) {
  return (
    <section id={id} className={dark ? 'bg-plum text-meringue' : ''}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-4xl font-extrabold md:text-5xl">{title}</h2>
        {lead && <p className="mt-4 max-w-2xl text-lg opacity-80">{lead}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
