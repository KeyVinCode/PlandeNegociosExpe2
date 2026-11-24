import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaCircleCheck, FaEye, FaEyeSlash } from 'react-icons/fa6'
import Section from '../components/Section'
import { preguntas, conclusiones } from '../data/plan'
export default function Defensa() {
  const [open, setOpen] = useState(0)
  const [show, setShow] = useState(true)
  function togglePreguntas() {
    // Al ocultarlas cerramos la respuesta abierta para poder practicar de nuevo.
    if (show) setOpen(-1)
    setShow(!show)
  }
  return (
    <Section id="defensa" title="Preguntas del panel y conclusiones" lead="Ensaya la defensa: lee la pregunta, responde en voz alta y luego abre la respuesta.">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-wide opacity-60">{preguntas.length} preguntas del panel</p>
        <button
          type="button"
          onClick={togglePreguntas}
          aria-expanded={show}
          aria-controls="preguntas-panel"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:text-berry"
        >
          {show ? <FaEyeSlash /> : <FaEye />}
          {show ? 'Ocultar preguntas' : 'Mostrar preguntas'}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {show && (
          <motion.div
            key="preguntas-panel"
            id="preguntas-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {preguntas.map(([q, a], i) => (
              <div key={q} className="mb-3 rounded-xl bg-white shadow-sm">
                <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={`respuesta-${i}`} className="flex w-full items-center justify-between gap-4 p-4 text-left font-display text-lg font-bold">
                  {q}<FaChevronDown className={`shrink-0 transition ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && <motion.p id={`respuesta-${i}`} initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden px-4 pb-4">{a}</motion.p>}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <ul className="mt-12 space-y-3">
        {conclusiones.map((c) => <li key={c} className="flex gap-3"><FaCircleCheck className="mt-1 shrink-0 text-pistacho" />{c}</li>)}
      </ul>
    </Section>
  )
}

