import { motion } from 'framer-motion'
import Section from '../components/Section'
import { money } from '../data/plan'
const rows = [['Ventas', 1000000, 2000000], ['Ganancias de ventas', 852200, 1851680]]
export default function Partida() {
  return (
    <Section id="partida" title="De dónde parte y a dónde quiere llegar" lead="La meta es doblar las ventas y subir la ganancia sobre ventas de 85,2 % a 92,6 %. Es ambicioso y exige explicar si se logra con precios, compras a mejor costo o un mejor surtido.">
      <div className="space-y-10">
        {rows.map(([n, a, b]) => (
          <div key={n}>
            <p className="mb-3 font-display text-xl font-bold">{n}</p>
            {[['Hoy', a, 'bg-pistacho'], ['Objetivo', b, 'bg-berry']].map(([l, v, c]) => (
              <div key={l} className="mb-2 flex items-center gap-3">
                <span className="w-20 text-sm">{l}</span>
                <motion.div className={`h-9 rounded-r-full ${c}`} initial={{ width: 0 }} whileInView={{ width: `${(v / 2000000) * 80}%` }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <span className="font-semibold">{money(v)}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-10 rounded-xl bg-butter/30 p-4 text-sm">Las ganancias más las pérdidas suman $962.000, no $1.000.000. Las cifras provienen de la plantilla de Tiendanube de 2024.</p>
      <p className="mt-3 rounded-xl border border-berry/20 p-4 text-sm">El anexo presenta la meta de ventas de $2.000.000 y los ingresos del plan de $7.102.300 en la misma tabla; la proyección anual equivale a 3,55 veces la meta, por lo que conviene precisar el periodo de cada cifra.</p>
    </Section>
  )
}
