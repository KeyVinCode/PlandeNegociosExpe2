import { FaCircleCheck } from 'react-icons/fa6'
import Section from '../components/Section'
import { conclusiones } from '../data/plan'
const etiquetas = ['Viabilidad', 'Riesgo', 'Presupuesto', 'Financiación', 'Colchón de caja']
export default function Conclusiones() {
  return (
    <Section id="conclusiones" title="Conclusiones" lead="Cinco ideas para cerrar la lectura del plan financiero de Dulce Placer.">
      <ol className="grid gap-4 md:grid-cols-2">
        {conclusiones.map((c, i) => (
          <li key={c} className={`flex gap-4 rounded-xl bg-white p-5 shadow-sm ${i === 0 ? 'border-l-4 border-pistacho md:col-span-2' : ''}`}>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-berry font-display text-lg font-bold text-meringue">{i + 1}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-berry">{etiquetas[i]}</p>
              <p className="mt-1 text-lg leading-snug">{c}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex items-start gap-3 rounded-2xl bg-white p-6 shadow-sm">
        <FaCircleCheck className="mt-1 shrink-0 text-pistacho" />
        <div>
          <p className="font-display text-lg font-bold">Nota metodológica</p>
          <p className="mt-1 text-sm">Las cifras provienen de la plantilla de Tiendanube de 2024. El análisis adopta una tasa de 12 % anual a 36 meses; los montos de financiación son decisiones del análisis y se validan con una entidad financiera antes de la presentación.</p>
        </div>
      </div>
    </Section>
  )
}

