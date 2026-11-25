import { motion, useScroll } from 'framer-motion'
export const links = [['inicio', 'Inicio'], ['partida', 'Punto de partida'], ['flujo', 'Flujo de caja'], ['inversion', 'Inversión'], ['estados', 'Estados financieros'], ['financiamiento', 'Financiamiento'], ['escenarios', 'Escenarios'], ['riesgos', 'Riesgos'], ['conclusiones', 'Conclusiones'], ['referencias', 'Referencias']]
export default function Nav() {
  const { scrollYProgress } = useScroll()
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-meringue/90 backdrop-blur">
      <motion.div style={{ scaleX: scrollYProgress }} className="h-1 origin-left bg-berry" />
      <nav className="mx-auto hidden max-w-6xl gap-5 px-6 py-3 text-sm font-medium md:flex">
        {links.map(([id, l]) => <a key={id} href={`#${id}`} className="hover:text-berry">{l}</a>)}
      </nav>
    </header>
  )
}
