import Section from '../components/Section'
import { money, estadoResultados, balance } from '../data/plan'

export default function Estados() {
  const bruto = estadoResultados.ingresos - estadoResultados.proveedores
  const operativa = bruto - estadoResultados.gastos.reduce((s, [, v]) => s + v, 0)
  const activos = balance.activos.reduce((s, [, v]) => s + v, 0)
  const patrimonio = activos - balance.pasivo + balance.subvenciones
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
          <p className="mt-4 text-sm opacity-70">El IVA y la inversión no se restan: el IVA es un impuesto trasladable y la inversión es un flujo de capital, no un gasto operativo.</p>
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
          <p className="mt-4 text-sm opacity-70">Con el préstamo del plan el pasivo supera los activos y el patrimonio queda en {money(activos - balance.pasivo)} antes de las subvenciones. Con el crédito propuesto de $600.000 el patrimonio sería positivo. El anexo no desagrega activos y pasivos corrientes, por lo que el capital de trabajo se estima como dos meses de egresos: {money(746245)}.</p>
        </div>
      </div>
    </Section>
  )
}
