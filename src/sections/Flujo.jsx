import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Section from '../components/Section'
import { cuatris, money } from '../data/plan'
export default function Flujo() {
  const [conFin, setConFin] = useState(true)
  const [sel, setSel] = useState(1)
  const data = cuatris.map((c) => ({ ...c, ingresos: c.ventas + (conFin ? c.prestamos + c.incentivos : 0) + (c.n === '1.º' ? 2300 : 0) }))
  const c = data[sel]
  return (
    <Section id="flujo" title="El flujo de caja, cuatrimestre a cuatrimestre" lead="Quita los préstamos y los incentivos y mira qué pasa. El 2.º cuatrimestre es el cuello de botella." dark>
      <button onClick={() => setConFin(!conFin)} className="mb-6 rounded-full bg-butter px-5 py-2 font-semibold text-plum">
        {conFin ? 'Quitar financiación' : 'Poner financiación'}
      </button>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={data} onClick={(e) => e?.activeTooltipIndex != null && setSel(Number(e.activeTooltipIndex))}>
            <XAxis dataKey="n" stroke="#fff6fa" /><YAxis tickFormatter={(v) => `${v / 1e6}M`} stroke="#fff6fa" />
            <Tooltip formatter={(v) => money(v)} contentStyle={{ color: '#2b1230' }} /><Legend />
            <Bar dataKey="ingresos" fill="#f4c15d" radius={[6, 6, 0, 0]} /><Bar dataKey="egresos" fill="#b0245a" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-6 text-lg">Cuatrimestre {c.n}: flujo {conFin ? 'neto' : 'de operación'} de <b className="text-butter">{money(c.ingresos - c.egresos)}</b>. Toca una barra para cambiar.</p>
    </Section>
  )
}
