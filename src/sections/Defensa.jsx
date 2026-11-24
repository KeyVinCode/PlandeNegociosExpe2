import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaCircleCheck } from 'react-icons/fa6'
import Section from '../components/Section'
import { preguntas, conclusiones } from '../data/plan'
export default function Defensa() {
  const [open, setOpen] = useState(0)
  return (
    <Section id="defensa" title="Preguntas del panel y conclusiones" lead="Ensaya la defensa: lee la pregunta, responde en voz alta y luego abre la respuesta.">
      {preguntas.map(([q, a], i) => (
        <div key={q} className="mb-3 rounded-xl bg-white shadow-sm">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-4 text-left font-display text-lg font-bold">
            {q}<FaChevronDown className={`shrink-0 transition ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && <motion.p initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden px-4 pb-4">{a}</motion.p>}
          </AnimatePresence>
        </div>
      ))}
      <ul className="mt-12 space-y-3">
        {conclusiones.map((c) => <li key={c} className="flex gap-3"><FaCircleCheck className="mt-1 shrink-0 text-pistacho" />{c}</li>)}
      </ul>
    </Section>
  )
}
