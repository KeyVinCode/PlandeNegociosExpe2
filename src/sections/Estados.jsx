import { useState } from 'react'
import Section from '../components/Section'
import { money, estadoResultados, estadoResultadosCuatris, balance, balancePropuesto } from '../data/plan'

const filas = (c) => {
  const bruto = c.ingresos - c.proveedores
  const gastos = c.sueldos + c.alquileres + c.servicios + c.publicidad
  const operativa = bruto - gastos
  return [
    { label: 'Ventas e ingresos extraordinarios', value: c.ingresos },
    { label: 'Proveedores', value: -c.proveedores },
    { label: 'Utilidad bruta', value: bruto, bold: true },
    { label: 'Sueldos y salarios', value: -c.sueldos },
    { label: 'Alquileres', value: -c.alquileres },
    { label: 'Servicios', value: -c.servicios },
    { label: 'Publicidad', value: -c.publicidad },
    { label: 'Utilidad operativa', value: operativa, bold: true },
    { label: 'IVA', value: -c.iva },
    { label: 'Inversión', value: -c.inversion },
    { label: 'Flujo de operación', value: operativa - c.iva - c.inversion, bold: true },
  ]
}

export default function Estados() {
  const [vista, setVista] = useState('cuatris')
  const bruto = estadoResultados.ingresos - estadoResultados.proveedores
  const gastos = estadoResultados.sueldos + estadoResultados.alquileres + estadoResultados.servicios + estadoResultados.publicidad
  const operativa = bruto - gastos
  const flujoOperacion = operativa - estadoResultados.iva - estadoResultados.inversion
  const inversionTotal = balance.activos.reduce((s, [, v]) => s + v, 0)
  const totalActivos = inversionTotal + balance.efectivo
  const patrimonio = balance.patrimonio
  const pct = (v, base) => `${((v / base) * 100).toFixed(1).replace('.', ',')} %`
  const filasCuatris = estadoResultadosCuatris.map(filas)
  return (
    <Section id="estados" title="Estado de resultados y balance" lead="El anexo entrega ingresos y egresos; el análisis los ordena en un estado de resultados y un balance simplificados, con la estructura del e-book de la unidad.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-display text-xl font-bold">Estado de resultados</p>
            <div className="flex gap-1 rounded-full bg-meringue p-1">
              <button type="button" onClick={() => setVista('cuatris')} className={`rounded-full px-3 py-1 text-sm font-semibold transition ${vista === 'cuatris' ? 'bg-plum text-meringue' : 'text-plum'}`}>Por cuatrimestre</button>
              <button type="button" onClick={() => setVista('acumulado')} className={`rounded-full px-3 py-1 text-sm font-semibold transition ${vista === 'acumulado' ? 'bg-plum text-meringue' : 'text-plum'}`}>Acumulado</button>
            </div>
          </div>
          {vista === 'cuatris' ? (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-plum/10 text-xs uppercase tracking-wide opacity-60">
                    <th className="py-2">Concepto</th>
                    {estadoResultadosCuatris.map((c) => <th key={c.n} className="py-2 text-right">{c.n} cuatr.</th>)}
                    <th className="py-2 text-right">Acumulado</th>
                  </tr>
                </thead>
                <tbody>
                  {filasCuatris[0].map((fila, i) => {
                    const valores = filasCuatris.map((f) => f[i].value)
                    const total = valores.reduce((s, v) => s + v, 0)
                    return (
                      <tr key={fila.label} className={`border-b border-plum/5 ${fila.bold ? 'font-semibold' : ''}`}>
                        <td className="py-2">{fila.label}</td>
                        {valores.map((v, j) => <td key={j} className={`py-2 text-right ${v < 0 ? 'text-berry' : ''}`}>{money(v)}</td>)}
                        <td className={`py-2 text-right ${total < 0 ? 'text-berry' : ''}`}>{money(total)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-3"><dt>Ventas e ingresos extraordinarios</dt><dd>{money(estadoResultados.ingresos)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Proveedores</dt><dd>{money(-estadoResultados.proveedores)}</dd></div>
              <div className="flex justify-between gap-3 border-t border-plum/10 pt-2 font-semibold"><dt>Utilidad bruta</dt><dd>{money(bruto)} <span className="font-normal opacity-60">{pct(bruto, estadoResultados.ingresos)}</span></dd></div>
              <div className="flex justify-between gap-3"><dt>Sueldos y salarios</dt><dd>{money(-estadoResultados.sueldos)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Alquileres</dt><dd>{money(-estadoResultados.alquileres)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Servicios</dt><dd>{money(-estadoResultados.servicios)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Publicidad</dt><dd>{money(-estadoResultados.publicidad)}</dd></div>
              <div className="flex justify-between gap-3 border-t border-plum/10 pt-2 font-semibold"><dt>Utilidad operativa</dt><dd>{money(operativa)} <span className="font-normal opacity-60">{pct(operativa, estadoResultados.ingresos)}</span></dd></div>
              <div className="flex justify-between gap-3"><dt>IVA</dt><dd>{money(-estadoResultados.iva)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Inversión</dt><dd>{money(-estadoResultados.inversion)}</dd></div>
              <div className="flex justify-between gap-3 border-t border-plum/10 pt-2 font-semibold"><dt>Flujo de operación</dt><dd>{money(flujoOperacion)}</dd></div>
            </dl>
          )}
          <p className="mt-4 text-sm opacity-70">El IVA se presenta por separado porque es un impuesto trasladable; la inversión es un flujo de capital y no un gasto operativo.</p>
          {vista === 'cuatris' && <p className="mt-2 text-sm opacity-70">El acumulado coincide con el estado de resultados anual y con el flujo de operación de {money(flujoOperacion)}.</p>}
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="font-display text-xl font-bold">Balance simplificado</p>
          <dl className="mt-4 space-y-2 text-sm">
            {balance.activos.map(([n, v]) => (
              <div key={n} className="flex justify-between gap-3"><dt>{n}</dt><dd>{money(v)}</dd></div>
            ))}
            <div className="flex justify-between gap-3"><dt>Efectivo disponible</dt><dd>{money(balance.efectivo)}</dd></div>
            <div className="flex justify-between gap-3 border-t border-plum/10 pt-2 font-semibold"><dt>Total activos</dt><dd>{money(totalActivos)}</dd></div>
            <div className="flex justify-between gap-3"><dt>Pasivo: préstamo del plan</dt><dd>{money(balance.pasivo)}</dd></div>
            <div className="flex justify-between gap-3"><dt>Patrimonio: subvenciones e incentivos</dt><dd>{money(patrimonio)}</dd></div>
            <div className="flex justify-between gap-3 border-t border-plum/10 pt-2 font-semibold"><dt>Total pasivo + patrimonio</dt><dd>{money(balance.pasivo + patrimonio)}</dd></div>
          </dl>
          <p className="mt-4 text-sm opacity-70">La ecuación contable se cumple: activos = pasivo + patrimonio. El efectivo disponible resulta de la financiación total menos la inversión. El capital de trabajo se estima en dos meses de egresos, {money(746245)}, porque el anexo no desagrega activos y pasivos corrientes.</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-white p-6 shadow-sm">
        <p className="font-display text-xl font-bold">Ecuación contable</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-meringue p-4">
            <p className="text-xs uppercase tracking-wide opacity-60">Plan original</p>
            <p className="mt-1 font-display text-lg font-bold">Activos = Pasivo + Patrimonio</p>
            <p className="mt-2 text-lg">{money(totalActivos)} = {money(balance.pasivo)} + {money(patrimonio)}</p>
            <p className="mt-1 text-sm opacity-70">Efectivo disponible: {money(balance.efectivo)}</p>
          </div>
          <div className="rounded-xl bg-meringue p-4">
            <p className="text-xs uppercase tracking-wide opacity-60">Mezcla propuesta</p>
            <p className="mt-1 font-display text-lg font-bold">Activos = Pasivo + Patrimonio</p>
            <p className="mt-2 text-lg">{money(balancePropuesto.activos)} = {money(balancePropuesto.pasivo)} + {money(balancePropuesto.patrimonio)}</p>
            <p className="mt-1 text-sm opacity-70">Efectivo disponible: {money(balancePropuesto.efectivo)}</p>
          </div>
        </div>
        <p className="mt-4 text-sm opacity-70">En ambos casos la igualdad se cumple y el efectivo completa los activos.</p>
      </div>
    </Section>
  )
}

