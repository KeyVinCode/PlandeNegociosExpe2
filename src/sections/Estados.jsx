import Section from '../components/Section'
import { money, estadoResultados, balance, balancePropuesto } from '../data/plan'

export default function Estados() {
  const bruto = estadoResultados.ingresos - estadoResultados.proveedores
  const gastos = estadoResultados.gastos.reduce((s, [, v]) => s + v, 0)
  const operativa = bruto - gastos
  const inversionTotal = balance.activos.reduce((s, [, v]) => s + v, 0)
  const totalActivos = inversionTotal + balance.efectivo
  const patrimonio = balance.patrimonio
  const pct = (v, base) => `${((v / base) * 100).toFixed(1).replace('.', ',')} %`
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
