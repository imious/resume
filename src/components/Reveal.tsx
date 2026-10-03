import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'span'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} style={style} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-4">
        <span className="label-caps text-copper">{index}</span>
        <h2 className="font-serif-display text-3xl md:text-[2.6rem] leading-none font-light tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <div className="rule-tick mt-5" />
    </Reveal>
  )
}
