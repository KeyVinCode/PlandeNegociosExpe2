import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { fuentes, money, cuota, porQueMezcla, criteriosFinanciamiento } from '../data/plan'
export default function Financiamiento() {
  const [v, setV] = useState(Object.fromEntries(fuentes.map((f) => [f.id, f.value])))
  const [planB, setPlanB] = useState(false)
  const need = planB ? 1350000 : 3670000
  const vals = { ...v, inc: planB ? 0 : v.inc }
  const total = Object.values(vals).reduce((a, b) => a + b, 0) + (planB ? 250000 : 0)
  const ok = total >= need
  return (
    <Section id="financiamiento" title="Mezcla de financiación propuesta" lead="La propuesta asciende a unos $3,7 millones. Los controles permiten ajustar cada fuente y verificar si cubre la necesidad." dark>
      <label className="mb-8 flex items-center gap-3 font-semibold">
        <input type="checkbox" checked={planB} onChange={(e) => setPlanB(e.target.checked)} className="size-5 accent-butter" />
        Plan B: el incentivo no sale y se aplaza el inmueble
      </label>
      <div className="grid gap-6 md:grid-cols-2">
        {fuentes.map((f) => (
          <div key={f.id} className={`rounded-xl border border-white/20 p-4 ${planB && f.id === 'inc' ? 'opacity-40' : ''}`}>
            <div className="flex justify-between"><b>{f.name}</b><span>{money(vals[f.id])}</span></div>
            <input type="range" min="0" max={f.max} step="50000" value={vals[f.id]} disabled={planB && f.id === 'inc'} onChange={(e) => setV({ ...v, [f.id]: +e.target.value })} className="my-3 w-full" style={{ accentColor: f.color === '#2b1230' ? '#fff6fa' : f.color }} />
            <p className="text-sm opacity-80">{f.note}</p>
            {f.id === 'cre' && <p className="mt-2 text-sm text-butter">Cuota de {money(cuota(vals.cre))}/mes, calculada con una tasa de 12 % anual a 36 meses.</p>}
          </div>
        ))}
      </div>
      {planB && <p className="mt-4 text-sm opacity-80">Se aplaza el inmueble: la inversión baja a $604.360 y, con la reserva, la necesidad queda en $1,35 millones. Se cubre con el crédito, los recursos propios, el crowdfunding y unos $250.000 del excedente del 1.º cuatrimestre.</p>}
      <div className="mt-8">
        <div className="h-5 overflow-hidden rounded-full bg-white/15">
          <motion.div className={`h-full ${ok ? 'bg-pistacho' : 'bg-berry'}`} animate={{ width: `${Math.min(100, (total / need) * 100)}%` }} />
        </div>
        <p className="mt-3 text-lg">{money(total)} de {money(need)} necesarios: <b className="text-butter">{ok ? (total > need * 1.15 ? 'cubierto, con más deuda de la necesaria' : 'cubierto') : `faltan ${money(need - total)}`}</b></p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/20 p-5">
          <p className="font-display text-lg font-bold">Por qué esta mezcla</p>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            {porQueMezcla.map(([t, d]) => <li key={t}><b className="text-butter">{t}:</b> {d}</li>)}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/20 p-5">
          <p className="font-display text-lg font-bold">Cuánto cuesta la deuda</p>
          <p className="mt-1 text-sm opacity-80">El anexo no especifica tasa ni plazo; el análisis adopta 12 % anual a 36 meses.</p>
          <div className="mt-3 space-y-3 text-sm">
            <p><b>Crédito de $3.500.000:</b> cuota de {money(cuota(3500000))}/mes y {money(cuota(3500000) * 12)}/año (16 % del flujo neto).</p>
            <p><b>Crédito de $600.000:</b> cuota de {money(cuota(600000))}/mes y {money(cuota(600000) * 12)}/año.</p>
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-white/20 p-5">
        <p className="font-display text-lg font-bold">Criterios para seleccionar la mezcla</p>
        <ul className="mt-3 grid gap-2 text-sm opacity-90 md:grid-cols-2">
          {criteriosFinanciamiento.map(([t, d]) => <li key={t}><b className="text-butter">{t}:</b> {d}</li>)}
        </ul>
      </div>
    </Section>
  )
}
