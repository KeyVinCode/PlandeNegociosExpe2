import { useState } from 'react'
import { FaShieldHalved } from 'react-icons/fa6'
import Section from '../components/Section'
import { riesgos, capitalTrabajo } from '../data/plan'
export default function Riesgos() {
  const [open, setOpen] = useState(null)
  return (
    <Section id="riesgos" title="Riesgos y qué hacer con cada uno" lead="Voltea la tarjeta para ver la respuesta." dark>
      <div className="grid gap-4 md:grid-cols-3">
        {riesgos.map(([t, why, fix], i) => (
          <button key={t} onClick={() => setOpen(open === i ? null : i)} className="min-h-40 rounded-xl border border-white/20 p-5 text-left transition hover:border-butter">
            <FaShieldHalved className={open === i ? 'text-pistacho' : 'text-butter'} />
            <p className="mt-2 font-display text-lg font-bold">{t}</p>
            <p className="mt-2 text-sm opacity-90">{open === i ? fix : why}</p>
          </button>
        ))}
      </div>
      <h3 className="mt-12 font-display text-2xl font-bold">Capital de trabajo: cinco acciones</h3>
      <p className="mt-2 max-w-2xl opacity-80">La reserva de $750.000 se forma con el excedente del 1.º cuatrimestre, antes de que empiece el 2.º.</p>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {capitalTrabajo.map(([t, d]) => (
          <li key={t} className="rounded-xl border border-white/20 p-4">
            <p className="font-display font-bold">{t}</p>
            <p className="mt-1 text-sm opacity-90">{d}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
