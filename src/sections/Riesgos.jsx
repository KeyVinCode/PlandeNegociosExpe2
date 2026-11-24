import { useState } from 'react'
import { FaShieldHalved } from 'react-icons/fa6'
import Section from '../components/Section'
import { riesgos } from '../data/plan'
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
    </Section>
  )
}
