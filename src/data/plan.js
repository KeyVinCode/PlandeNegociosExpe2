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

// Equipo de trabajo: completar con los nombres reales antes de la entrega.
// Ejemplo: { nombre: 'Ana Pérez', rol: 'Análisis financiero' }
export const equipo = []

// Punto de equilibrio operativo: fijos / (1 - proveedores/ventas)
export const equilibrio = { fijos: 1986000, proveedores: 1500000, ventas: 7102300 }

// Inversión del plan que no aparece en la tesorería
export const inversionFaltante = 2518360

// Gestión del capital de trabajo
export const capitalTrabajo = [
  ['Reserva de caja', 'Formar unos $750.000 (dos meses de egresos) con el excedente del 1.º cuatrimestre, antes de que empiece el 2.º.'],
  ['Venta de contado', 'Mantener las ventas de contado; si se abre a empresas, pedir anticipo en pedidos grandes y plazos de cobro cortos.'],
  ['Plazo con proveedores', 'Negociar plazo para el 3.º cuatrimestre, cuando las compras suben 75 % (de $400.000 a $700.000).'],
  ['Contratación por tramos', 'Ligar cada nueva contratación a metas de ventas.'],
  ['Seguimiento mensual', 'Comparar presupuesto contra real cada mes, con alerta si la caja baja de la reserva.'],
]

// Justificación de la mezcla de financiación
export const porQueMezcla = [
  ['Incentivos como base', 'No se devuelven si se cumplen las condiciones y el plan ya los contempla.'],
  ['Crédito de $600.000 y no de $3.500.000', 'La operación ya genera caja: no hay necesidad de pagar intereses por dinero que sobra.'],
  ['Crowdfunding de recompensas', 'Cajas de temporada, tortas por encargo o suscripciones traen efectivo antes de comprar insumos y prueban la demanda.'],
  ['Socios con capital', 'Solo si se mantiene la compra del inmueble en el primer año; implica ceder participación.'],
]

// Lectura del flujo por actividades: operación, inversión, financiamiento e IVA
export const flujoActividades = [
  ['Operación', 3618600, 'Ventas e ingresos extraordinarios menos proveedores, sueldos, alquiler, servicios y publicidad.'],
  ['Inversión', -406000, 'Inversión registrada en la tesorería; faltan $2.518.360 del plan.'],
  ['Financiamiento', 6100000, 'Préstamos por $3.500.000 e incentivos por $2.600.000.'],
  ['IVA', -585472, 'Salida separada: corresponde al IVA trasladado y no se resta en la utilidad operativa.'],
]

// Estado de resultados simplificado
export const estadoResultados = {
  ingresos: 7104600,
  proveedores: 1500000,
  gastos: [
    ['Sueldos y salarios', 1640000],
    ['Alquileres', 144000],
    ['Servicios', 12000],
    ['Publicidad', 190000],
  ],
  iva: 585472,
  inversion: 406000,
}

// Balance simplificado
export const balance = {
  activos: [
    ['Inmueble', 2000000],
    ['Mobiliario', 300000],
    ['IVA de la inversión', 403360],
    ['Equipos y herramientas', 71000],
    ['Transporte', 50000],
    ['Personal y capacitación', 100000],
  ],
  efectivo: 3175640,
  pasivo: 3500000,
  patrimonio: 2600000,
}

export const balancePropuesto = { activos: 3700000, pasivo: 600000, patrimonio: 3100000, efectivo: 775640 }

// Criterios para seleccionar la mezcla de financiación
export const criteriosFinanciamiento = [
  ['Necesidad', 'La inversión de $2.924.360 más una reserva de $746.245 exige unos $3.670.000.'],
  ['Costo', 'La deuda del plan cuesta $1.395.000 al año; el crédito de $600.000 cuesta $239.143. Los incentivos no se devuelven y el crowdfunding no paga intereses.'],
  ['Control', 'La deuda y el crowdfunding de recompensas no diluyen la propiedad; los socios con capital sí lo hacen.'],
  ['Alineación', 'La mezcla mantiene la compra del inmueble en el primer año; el plan B la aplaza si el incentivo no llega.'],
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
  {
    texto: 'UNIMINUTO. (s. f.). Estructura de un plan de negocios 02 [E-book interactivo, Unidad 2]. Corporación Universitaria Minuto de Dios.',
    uso: 'Marco conceptual: estados financieros, flujo de efectivo por actividades, estrategias de financiamiento y capital de trabajo.',
  },
]
