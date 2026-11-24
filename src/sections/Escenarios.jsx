import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { escenarios, money } from '../data/plan'
export default function Escenarios() {
  const [k, setK] = useState('C')
  const [f, setF] = useState(0.8)
  const [fin, setFin] = useState(false)
  const flujo = 108768 + (f - 1) * 5602300 + (fin ? 4705000 : 0)
  const sel = escenarios.find((e) => e.k === k)
  return (
    <Section id="escenarios" title="¿Y si las ventas fallan?" lead="Elige un escenario o prueba tu propio estrés: toda la inversión del plan, con y sin financiación.">
      <div className="grid gap-3 md:grid-cols-5">
        {escenarios.map((e) => (
          <button key={e.k} onClick={() => setK(e.k)} className={`rounded-xl p-4 text-left ${k === e.k ? 'bg-plum text-meringue' : 'bg-white shadow-sm'}`}>
            <b className="font-display text-2xl">{e.k}</b>
            <p className={`mt-1 font-bold ${e.v < 0 ? 'text-berry' : ''}`}>{money(e.v)}</p>
          </button>
        ))}
      </div>
      <p className="mt-4 text-lg"><b>{sel.name}.</b> {sel.t}</p>
      <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm">
        <p className="font-display text-xl font-bold">Prueba de estrés: ventas al {Math.round(f * 100)} % del plan</p>
        <input type="range" min="0.6" max="1.2" step="0.05" value={f} onChange={(e) => setF(+e.target.value)} className="my-4 w-full accent-berry" />
        <label className="flex items-center gap-2"><input type="checkbox" checked={fin} onChange={(e) => setFin(e.target.checked)} className="size-5 accent-berry" /> Con financiación y cuota de deuda</label>
        <motion.p key={Math.round(flujo)} initial={{ scale: 0.95 }} animate={{ scale: 1 }} className={`mt-4 font-display text-4xl font-extrabold ${flujo < 0 ? 'text-berry' : 'text-pistacho'}`}>{money(flujo)}</motion.p>
      </div>
    </Section>
  )
}
