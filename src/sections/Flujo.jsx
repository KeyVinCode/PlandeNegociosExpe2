import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Section from '../components/Section'
import { cuatris, money, equilibrio, inversionFaltante, flujoActividades } from '../data/plan'
export default function Flujo() {
  const [conFin, setConFin] = useState(true)
  const [conInversion, setConInversion] = useState(false)
  const [sel, setSel] = useState(1)
  const data = cuatris.map((c) => ({ ...c, ingresos: c.ventas + (conFin ? c.prestamos + c.incentivos : 0) + (c.n === '1.º' ? 2300 : 0) }))
  const c = data[sel]
  let acumulado = 0
  const acumulados = data.map((d, i) => {
    acumulado += d.ingresos - d.egresos - (conInversion && i === 0 ? inversionFaltante : 0)
    return acumulado
  })
  const variablePct = equilibrio.proveedores / equilibrio.ventas
  const ventasEquilibrio = equilibrio.fijos / (1 - variablePct)
  const pctEquilibrio = (ventasEquilibrio / equilibrio.ventas) * 100
  const valleSinFinanciacion = cuatris[0].operacion - inversionFaltante
  const pct = (n) => `${n.toFixed(1).replace('.', ',')} %`
  return (
    <Section id="flujo" title="El flujo de caja, cuatrimestre a cuatrimestre" lead="Al retirar los préstamos y los incentivos se observa el flujo que genera la operación. El 2.º cuatrimestre es el cuello de botella." dark>
      <button onClick={() => setConFin(!conFin)} className="mb-6 rounded-full bg-butter px-5 py-2 font-semibold text-plum">
        {conFin ? 'Ver sin financiación' : 'Ver con financiación'}
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
      <p className="mt-6 text-lg">Cuatrimestre {c.n}: flujo {conFin ? 'neto' : 'de operación'} de <b className="text-butter">{money(c.ingresos - c.egresos)}</b>. Al seleccionar una barra se cambia el cuatrimestre.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 text-plum shadow-sm">
          <p className="font-display text-xl font-bold">Flujo acumulado</p>
          <p className="mt-1 text-sm opacity-70">El acumulado parte de cero porque el anexo no informa un saldo inicial de caja.</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {acumulados.map((v, i) => (
              <div key={cuatris[i].n} className="rounded-lg bg-meringue p-3 text-center">
                <p className="text-xs opacity-60">{cuatris[i].n} cuatr.</p>
                <p className={`font-display font-bold ${v < 0 ? 'text-berry' : 'text-pistacho'}`}>{money(v)}</p>
              </div>
            ))}
          </div>
          <label className="mt-4 flex items-start gap-2 text-sm">
            <input type="checkbox" checked={conInversion} onChange={(e) => setConInversion(e.target.checked)} className="mt-1 size-4 accent-berry" />
            <span>Inversión faltante incluida en el 1.º cuatrimestre ({money(inversionFaltante)})</span>
          </label>
          <p className="mt-3 text-sm">
            Sin financiación y con toda la inversión, el 1.º cuatrimestre cierra en <b className="text-berry">{money(valleSinFinanciacion)}</b>; el crédito se desembolsa antes del 2.º cuatrimestre para cubrir ese déficit.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 text-plum shadow-sm">
          <p className="font-display text-xl font-bold">Punto de equilibrio</p>
          <p className="mt-1 text-sm opacity-70">Sueldos, alquiler, servicios y publicidad como costos fijos; proveedores como costo variable.</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-3"><dt>Costos fijos</dt><dd className="font-semibold">{money(equilibrio.fijos)}</dd></div>
            <div className="flex justify-between gap-3"><dt>Proveedores sobre ventas</dt><dd className="font-semibold">{pct(variablePct * 100)}</dd></div>
            <div className="flex justify-between gap-3"><dt>Ventas de equilibrio</dt><dd className="font-semibold">{money(ventasEquilibrio)}</dd></div>
            <div className="flex justify-between gap-3"><dt>Frente al plan</dt><dd className="font-semibold text-pistacho">{pct(pctEquilibrio)}</dd></div>
          </dl>
          <p className="mt-3 text-sm opacity-70">El cálculo excluye inversión e IVA.</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-white p-6 text-plum shadow-sm">
        <p className="font-display text-xl font-bold">Composición del flujo por actividades</p>
        <p className="mt-1 text-sm opacity-70">Clasificación del estado de flujo de efectivo: operación, inversión y financiamiento.</p>
        <div className="mt-4 space-y-2 text-sm">
          {flujoActividades.map(([n, v, d]) => (
            <div key={n} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-plum/10 pb-2">
              <div><span className="font-semibold">{n}</span><span className="ml-2 opacity-70">{d}</span></div>
              <span className={`font-display font-bold ${v < 0 ? 'text-berry' : 'text-pistacho'}`}>{money(v)}</span>
            </div>
          ))}
          <div className="flex justify-between gap-3 pt-2 font-semibold"><span>Total</span><span>{money(flujoActividades.reduce((s, [, v]) => s + v, 0))}</span></div>
        </div>
      </div>
    </Section>
  )
}
