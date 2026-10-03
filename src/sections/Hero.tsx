import { useEffect, useRef } from 'react'
import HeadCanvas from '../components/HeadCanvas'

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null)
  const progress = useRef(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const el = trackRef.current
      if (!el) return
      const total = el.offsetHeight - window.innerHeight
      const p = total > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total)) : 0
      progress.current = p
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div ref={trackRef} className="relative h-[160vh] md:h-[175vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 content-center items-center gap-0 px-6 pt-16 md:grid-cols-12 md:gap-6 lg:px-10">
          {/* Text side */}
          <div className="relative z-10 md:col-span-7">
            <p className="label-caps text-copper">Materials Engineer · Web Developer</p>
            <h1 className="font-serif-display mt-4 text-[13.5vw] leading-[0.92] font-light tracking-tight text-ink sm:text-7xl md:mt-5 md:text-[5.4rem] lg:text-[6.4rem]">
              Iman
              <br />
              <em className="font-normal">Barekatain</em>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft md:mt-7 md:text-base">
              Double-degree master's in materials engineering from KU&nbsp;Leuven and the University of
              Milan-Bicocca — with years of hands-on web development and UI design alongside it.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-9">
              <a
                href="/assets/Iman_Barekatain_CV.pdf"
                download
                className="inline-flex min-h-[44px] items-center gap-2 bg-[hsl(var(--copper))] px-6 text-sm font-medium text-white transition-colors hover:bg-[hsl(var(--copper-deep))]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV (PDF)
              </a>
              <a
                href="mailto:iman.barekatain@gmail.com"
                className="link-underline inline-flex min-h-[44px] items-center text-sm font-medium text-ink"
              >
                iman.barekatain@gmail.com
              </a>
            </div>
          </div>

          {/* 3D head */}
          <div className="relative order-first h-[30vh] w-full sm:h-[34vh] md:order-none md:col-span-5 md:h-[72vh]">
            <div className="absolute inset-0">
              <HeadCanvas progress={progress} />
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="relative z-10 border-t border-line">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4 text-xs text-ink-soft lg:px-10">
            <span>Bergamo, Italy</span>
            <span className="hidden sm:inline">+39 345 837 8961 · +32 495 76 87 93</span>
            <span className="hidden md:inline">iman.barekatain@student.kuleuven.be</span>
            <span className="ml-auto inline-flex items-center gap-2 text-[hsl(var(--copper))]">
              scroll — the head turns with you
              <svg width="12" height="14" viewBox="0 0 12 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M6 1v13M2 10l4 4 4-4" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
