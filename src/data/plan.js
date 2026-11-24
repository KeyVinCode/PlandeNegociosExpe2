export const money = (n) => `${n < 0 ? '−' : ''}$${Math.abs(Math.round(n)).toLocaleString('es-CO')}`
export const cuota = (p, r = 0.01, m = 36) => (p * r) / (1 - Math.pow(1 + r, -m))

export const cuatris = [
  { n: '1.º', ventas: 2302300, prestamos: 700000, incentivos: 1600000, egresos: 1382504, operacion: 922096 },
  { n: '2.º', ventas: 1300000, prestamos: 300000, incentivos: 1000000, egresos: 1279864, operacion: 20136 },
  { n: '3.º', ventas: 3500000, prestamos: 2500000, incentivos: 0, egresos: 1815104, operacion: 1684896 },
]

export const inversion = [
  { name: 'Inmueble', value: 2000000 }, { name: 'Mobiliario', value: 300000 },
  { name: 'IVA', value: 403360 }, { name: 'Equipos y herramientas', value: 71000 },
  { name: 'Transporte', value: 50000 }, { name: 'Personal y capacitación', value: 100000 },
]

export const fuentes = [
  { id: 'inc', name: 'Incentivos', value: 2600000, max: 3000000, color: '#6f9f6a', note: 'No se devuelven si se cumplen condiciones. Proceso lento: postular a varios.' },
  { id: 'cre', name: 'Crédito bancario', value: 600000, max: 3500000, color: '#b0245a', note: 'Con cuota. Pedir plazo de gracia y desembolso antes del 2.º cuatrimestre.' },
  { id: 'pro', name: 'Recursos propios', value: 300000, max: 1000000, color: '#f4c15d', note: 'Sale del excedente del 1.º cuatrimestre. Muestra compromiso.' },
  { id: 'cro', name: 'Crowdfunding', value: 200000, max: 1000000, color: '#2b1230', note: 'Preventas de temporada: efectivo antes de comprar insumos.' },
]

export const escenarios = [
  { k: 'A', name: 'Plan recalculado, con financiación', v: 8727128, t: 'Cómodo, pero no incluye toda la inversión.' },
  { k: 'B', name: 'Sin préstamos ni incentivos', v: 2627128, t: 'La operación se sostiene sola.' },
  { k: 'C', name: 'B + toda la inversión', v: 108768, t: 'Casi cero: aquí se justifica financiarse.' },
  { k: 'D', name: 'C + ventas 20 % más bajas', v: -1011692, t: 'Déficit: no se podría pagar la inversión.' },
  { k: 'E', name: 'D, con financiación y cuota', v: 3693308, t: 'Resiste con holgura.' },
]

export const riesgos = [
  ['Ventas concentradas', '49,3 % del año se vende en el 3.º cuatrimestre.', 'Preventas, productos para fechas del 2.º cuatrimestre, ventas a cafeterías y eventos.'],
  ['Caja casi en cero', 'El 2.º cuatrimestre deja solo $20.136 de operación.', 'Reserva de $750.000, desembolsos antes del 2.º cuatrimestre y publicidad sostenida.'],
  ['Dependencia de financiación', '46,2 % de los ingresos no son ventas.', 'Plan B y varias postulaciones en paralelo.'],
  ['Deuda sin cuotas', 'El flujo se ve mejor de lo real.', 'Incluir cuotas e intereses en egresos.'],
  ['Personal rígido', 'Sueldos: 36,6 % de los egresos y no bajan cuando bajan las ventas.', 'Contratar por tramos ligados a metas de ventas.'],
  ['Alza de insumos', 'Proveedores: 33,5 % de los egresos.', 'Compras en volumen y acuerdos de precio.'],
]

export const conclusiones = [
  'Dulce Placer es viable: la operación deja +$2.627.128 al año.',
  'El riesgo está en el 2.º cuatrimestre y en la concentración del 3.º, no en el año completo.',
  'El presupuesto debe corregirse: egresos mal sumados, inversión no reflejada y deuda sin cuotas.',
  'Financiar unos $3,7 millones: incentivos como base, crédito de $600.000, recursos propios y crowdfunding.',
  'Reserva de $750.000 y plan B hacen que el plan resista ventas 20 % más bajas.',
]

export const referencias = [
  {
    texto: 'Tiendanube. (2024). Plan financiero de una empresa: ejemplo para tu Pyme.',
    url: 'https://recursos.tiendanube.com/mx/plantillas/plan-financiero-ejemplo',
    uso: 'Fuente de las cifras del anexo (ventas, inversión y presupuesto de tesorería).',
  },
  {
    texto: 'Corporación Universitaria Minuto de Dios – UNIMINUTO. (s. f.). Estructura de un plan de negocios: anexo de actividad experiencial, Unidad 2. Plan financiero empresa Dulce Placer.',
    uso: 'Marco de la actividad y estructura del análisis.',
  },
]
