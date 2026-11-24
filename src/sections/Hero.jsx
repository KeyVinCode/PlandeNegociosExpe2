import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCakeCandles } from 'react-icons/fa6'
import Counter from '../components/Counter'
const hallazgos = [
  ['La operación genera caja', 'Solo con ventas deja +$2.627.128 y es positiva en los tres cuatrimestres.'],
  ['El 2.º cuatrimestre es el punto débil', 'Las ventas caen 43,5 % y la operación deja apenas +$20.136.'],
  ['46,2 % de los ingresos no son ventas', 'Vienen de préstamos ($3.500.000) e incentivos ($2.600.000).'],
  ['Egresos mal sumados', 'El anexo dice $4.244.672; los renglones suman $4.477.472.'],
  ['Falta inversión y falta deuda', 'La tesorería recoge $406.000 de $2.924.360 y el préstamo no tiene cuotas.'],
]
export default function Hero() {
  const [open, setOpen] = useState(0)
  return (
    <section id="inicio" className="bg-plum pt-28 text-meringue">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 md:grid-cols-2">
        <div>
          <FaCakeCandles className="text-5xl text-butter" />
          <h1 className="mt-6 font-display text-6xl font-extrabold leading-none md:text-7xl">Dulce Placer</h1>
          <p className="mt-6 text-xl opacity-90">Plan financiero 2023: una repostería en su tercer año que quiere duplicar ventas sin endeudarse de más.</p>
          <p className="mt-10 font-display text-5xl font-bold text-butter"><Counter to={2627128} /></p>
          <p className="opacity-80">de caja anual que genera la operación por sí sola</p>
        </div>
        <div>
          <p className="mb-4 font-semibold">Cinco hallazgos. Toca uno para abrirlo.</p>
          {hallazgos.map(([t, d], i) => (
            <button key={t} onClick={() => setOpen(i)} className={`mb-3 block w-full rounded-xl border p-4 text-left transition ${open === i ? 'border-butter bg-white/10' : 'border-white/20 hover:bg-white/5'}`}>
              <span className="font-display text-lg font-bold">{t}</span>
              <AnimatePresence initial={false}>
                {open === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-2 opacity-85">{d}</motion.p>}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
