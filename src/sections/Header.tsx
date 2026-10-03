import { useEffect, useState } from 'react'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-[hsl(var(--paper))]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="font-serif-display text-lg tracking-tight text-ink">
          Iman <em>Barekatain</em>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-[13px] font-medium text-ink-soft hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/assets/Iman_Barekatain_CV.pdf"
          download
          className="inline-flex min-h-[44px] items-center gap-2 border border-[hsl(var(--ink))] px-4 text-[13px] font-medium text-ink transition-colors hover:bg-[hsl(var(--ink))] hover:text-[hsl(var(--paper))]"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          CV
        </a>
      </div>
    </header>
  )
}
