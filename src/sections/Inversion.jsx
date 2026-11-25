import { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import Section from '../components/Section'
import { inversion, money } from '../data/plan'
const cols = ['#b0245a', '#f4c15d', '#6f9f6a', '#2b1230', '#d98aa9', '#9c8aa5']
export default function Inversion() {
  const [i, setI] = useState(0)
  const total = inversion.reduce((s, x) => s + x.value, 0)
  return (
    <Section id="inversion" title="Dos de cada tres pesos van a un inmueble" lead="Comprarlo para dejar de pagar $144.000 de alquiler recupera solo 7,2 % al año: unos 14 años. Y la tesorería solo recoge $406.000 de esta inversión.">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={inversion} dataKey="value" innerRadius={70} outerRadius={120} onMouseEnter={(_, k) => setI(k)} onClick={(_, k) => setI(k)}>
                {inversion.map((_, k) => <Cell key={k} fill={cols[k]} stroke={k === i ? '#2b1230' : 'none'} strokeWidth={3} />)}
              </Pie>
              <Tooltip formatter={(v) => money(v)} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <p className="font-display text-3xl font-bold">{inversion[i].name}</p>
          <p className="mt-2 text-4xl font-extrabold text-berry">{money(inversion[i].value)}</p>
          <p className="mt-1">{((inversion[i].value / total) * 100).toFixed(1).replace('.', ',')} % de {money(total)}</p>
          <p className="mt-6 rounded-xl bg-butter/30 p-4 text-sm">Faltan hasta $2.518.360 de egresos en la tesorería.</p>
          <p className="mt-3 text-xs opacity-70">El IVA del anexo corresponde a la tarifa de 16 % de la plantilla de Tiendanube, México. Bajo la tarifa colombiana de 19 %, la inversión ascendería a $2.999.990.</p>
        </div>
      </div>
    </Section>
  )
}
