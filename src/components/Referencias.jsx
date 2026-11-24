import { FaBookOpen } from 'react-icons/fa6'
import { referencias } from '../data/plan'
export default function Referencias() {
  return (
    <footer id="referencias" className="bg-plum text-meringue">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="flex items-center gap-3 font-display text-3xl font-extrabold"><FaBookOpen className="text-butter" />Referencias</h2>
        <ul className="mt-8 space-y-5">
          {referencias.map((r) => (
            <li key={r.texto} className="max-w-3xl pl-8 -indent-8">
              {r.texto}{' '}
              {r.url && <a href={r.url} target="_blank" rel="noreferrer" className="break-all text-butter underline">{r.url}</a>}
              <span className="mt-1 block pl-8 text-sm opacity-70">{r.uso}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm opacity-70">Las tasas, los plazos y los montos de financiación propuestos son supuestos del equipo, no datos de las fuentes.</p>
      </div>
    </footer>
  )
}
