import Section from '../components/Section'
import { money, estadoResultados, balance } from '../data/plan'

export default function Estados() {
  const bruto = estadoResultados.ingresos - estadoResultados.proveedores
  const gastos = estadoResultados.gastos.reduce((s, [, v]) => s + v, 0)
  const operativa = bruto - gastos
  const flujoOperacion = operativa - estadoResultados.iva - estadoResultados.inversion
  const activos = balance.activos.reduce((s, [, v]) => s + v, 0)
  const patrimonio = activos - balance.pasivo + balance.subvenciones
  const pct = (v, base) => `${((v / base) * 100).toFixed(1).replace('.', ',')} %`
  const num = (n) => Math.round(n).toLocaleString('es-CO')
  return (
    <Section id="estados" title="Estado de resultados y balance" lead="El anexo entrega ingresos y egresos; el análisis los ordena en un estado de resultados y un balance simplificados, con la estructura del e-book de la unidad.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="font-display text-xl font-bold">Estado de resultados</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-3"><dt>Ventas e ingresos extraordinarios</dt><dd>{money(estadoResultados.ingresos)}</dd></div>
            <div className="flex justify-between gap-3"><dt>Proveedores</dt><dd>{money(-estadoResultados.proveedores)}</dd></div>
            <div className="flex justify-between gap-3 border-t border-plum/10 pt-2 font-semibold"><dt>Utilidad bruta</dt><dd>{money(bruto)} <span className="font-normal opacity-60">{pct(bruto, estadoResultados.ingresos)}</span></dd></div>
            {estadoResultados.gastos.map(([n, v]) => (
              <div key={n} className="flex justify-between gap-3"><dt>{n}</dt><dd>{money(-v)}</dd></div>
            ))}
            <div className="flex justify-between gap-3 border-t border-plum/10 pt-2 font-semibold"><dt>Utilidad operativa</dt><dd>{money(operativa)} <span className="font-normal opacity-60">{pct(operativa, estadoResultados.ingresos)}</span></dd></div>
          </dl>
          <p className="mt-4 text-sm opacity-70">El IVA se presenta por separado porque es un impuesto trasladable; la inversión es un flujo de capital y no un gasto operativo.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="font-display text-xl font-bold">Balance simplificado</p>
          <dl className="mt-4 space-y-2 text-sm">
            {balance.activos.map(([n, v]) => (
              <div key={n} className="flex justify-between gap-3"><dt>{n}</dt><dd>{money(v)}</dd></div>
            ))}
            <div className="flex justify-between gap-3 border-t border-plum/10 pt-2 font-semibold"><dt>Total activos</dt><dd>{money(activos)}</dd></div>
            <div className="flex justify-between gap-3"><dt>Pasivo: préstamo del plan</dt><dd>{money(-balance.pasivo)}</dd></div>
            <div className="flex justify-between gap-3"><dt>Subvenciones e incentivos</dt><dd>{money(balance.subvenciones)}</dd></div>
            <div className="flex justify-between gap-3 border-t border-plum/10 pt-2 font-semibold"><dt>Patrimonio</dt><dd className={patrimonio < 0 ? 'text-berry' : 'text-pistacho'}>{money(patrimonio)}</dd></div>
          </dl>
          <p className="mt-4 text-sm opacity-70">Con el préstamo del plan el pasivo supera los activos y el patrimonio queda en {money(activos - balance.pasivo)} antes de las subvenciones. Con el crédito propuesto de $600.000 el patrimonio sería positivo. El capital de trabajo se estima en dos meses de egresos, {money(746245)}, porque el anexo no desagrega activos y pasivos corrientes.</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-white p-6 shadow-sm">
        <p className="font-display text-xl font-bold">Operación contable</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-plum/10 text-xs uppercase tracking-wide opacity-60">
                <th className="py-2">Concepto</th>
                <th className="py-2">Operación</th>
                <th className="py-2 text-right">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-plum/5">
                <td className="py-2">Utilidad bruta</td>
                <td className="py-2">{num(estadoResultados.ingresos)} − {num(estadoResultados.proveedores)}</td>
                <td className="py-2 text-right font-semibold">{money(bruto)}</td>
              </tr>
              <tr className="border-b border-plum/5">
                <td className="py-2">Utilidad operativa</td>
                <td className="py-2">{num(bruto)} − {num(gastos)}</td>
                <td className="py-2 text-right font-semibold">{money(operativa)}</td>
              </tr>
              <tr className="border-b border-plum/5">
                <td className="py-2">Flujo de operación</td>
                <td className="py-2">{num(operativa)} − {num(estadoResultados.iva)} − {num(estadoResultados.inversion)}</td>
                <td className="py-2 text-right font-semibold">{money(flujoOperacion)}</td>
              </tr>
              <tr>
                <td className="py-2">Patrimonio</td>
                <td className="py-2">{num(activos)} − {num(balance.pasivo)} + {num(balance.subvenciones)}</td>
                <td className="py-2 text-right font-semibold">{money(patrimonio)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm opacity-70">Las operaciones parten del estado de resultados y del balance; el flujo de operación coincide con el del anexo.</p>
      </div>
    </Section>
  )
}
