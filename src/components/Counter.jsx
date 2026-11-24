import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { money } from '../data/plan'
export default function Counter({ to, prefix = true }) {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!seen) return
    const c = animate(0, to, { duration: 1.4, ease: 'easeOut', onUpdate: setV })
    return () => c.stop()
  }, [seen, to])
  return <span ref={ref}>{prefix ? money(v) : Math.round(v)}</span>
}
