import Reveal, { SectionHeading } from '../components/Reveal'

/* ---------------------------------- data ---------------------------------- */

const experience = [
  {
    years: '2025',
    role: 'Materials Development Intern',
    org: 'Toyota Motor Europe',
    place: 'Zaventem, Belgium',
    logo: '/assets/toyota.svg',
    logoAlt: 'Toyota logo',
    featured: true,
    text: "Three months in Toyota's main European R&D hub, developing a new 3D-printed material. The role covered research, experiment planning and execution, design, and testing. Details are subject to NDA.",
  },
  {
    years: '2018 — 2022',
    role: 'Web Developer & UI Designer',
    org: 'Libratech IT Solutions',
    place: 'Isfahan, Iran',
    logo: '/assets/libratech.png',
    logoAlt: 'Libratech logo',
    featured: false,
    text: 'Part-time, alongside studies. Built websites and web-based applications with HTML, CSS, JavaScript and Vue.js, as well as WordPress; designed user interfaces in Adobe XD.',
  },
  {
    years: '2022',
    role: 'R&D Intern',
    org: 'Tamkar Industrial Group',
    place: 'Isfahan, Iran',
    logo: '/assets/tamkar.png',
    logoAlt: 'Tamkar Industrial Group logo',
    featured: false,
    text: 'Research and supervision in the R&D section, plus translation and communication with foreign partners.',
  },
]

const education = [
  {
    years: '2023 — present',
    title: 'SUMA Double Degree — Sustainable Materials',
    logo: null,
    entries: [
      {
        school: 'KU Leuven',
        degree: 'M.Sc. Materials Engineering',
        note: '#1 university in Belgium',
        logo: '/assets/KU_Leuven_logo.svg',
        logoAlt: 'KU Leuven logo',
      },
      {
        school: 'University of Milan-Bicocca',
        degree: 'M.Sc. Materials Science and Nanotechnology',
        note: '#10 university in Italy',
        logo: '/assets/Milano-Bicocca_University_logo_2_on_transparent_background.svg',
        logoAlt: 'University of Milan-Bicocca logo',
      },
    ],
    status: 'Final semester',
  },
  {
    years: '2018 — 2023',
    title: 'Isfahan University of Technology',
    logo: '/assets/iut.png',
    logoAlt: 'Isfahan University of Technology logo',
    entries: [
      {
        school: '',
        degree: 'B.Sc. Metallurgy and Materials Engineering',
        note: '#4 university in Iran — #338 globally for materials science',
        logo: null,
        logoAlt: '',
      },
    ],
    status: null,
  },
]

const research = [
  {
    kind: "Master's thesis — KU Leuven",
    title: 'Effect of laser beam shaping on Mn, N-stabilized stainless steels manufactured using L-PBF',
    text: 'How laser distribution profiles — particularly Gaussian versus ring — affect the microstructure and vaporization behavior of austenitic stainless steels stabilized with manganese and nitrogen, studied through a joint simulation-and-experiment approach.',
    meta: 'Promoter: Prof. Kim Vanmeensel',
  },
  {
    kind: "Bachelor's thesis — IUT",
    title: 'Artificial intelligence in materials science and engineering',
    text: 'A report on recent advances and applications of machine learning in solid-state materials science.',
    meta: 'Advisor: Prof. Mahmood Meratian',
  },
]

const skillGroups = [
  {
    title: 'Materials & Research',
    blurb: 'The academic side.',
    groups: [
      { label: 'Characterization', items: ['XRD', 'SEM', 'Optical Microscopy', 'EPMA', 'EBSD'] },
      { label: 'Mechanical testing', items: ['Hardness', 'Toughness', 'Wear', 'Tensile'] },
      { label: 'Simulation & tools', items: ['COMSOL Multiphysics', 'Thermo-Calc', 'ImageJ', 'Key to Steel'] },
    ],
  },
  {
    title: 'Software & Design',
    blurb: 'The computer side.',
    groups: [
      { label: 'Development', items: ['JavaScript', 'Vue.js', 'HTML', 'CSS', 'Python (basic)', 'WordPress'] },
      { label: 'Design', items: ['Adobe XD', 'Photoshop', 'Illustrator'] },
      { label: 'Workflow', items: ['AI-assisted development', 'Microsoft Office'] },
    ],
  },
]

const languages = [
  { lang: 'English', level: 'Advanced — IELTS 8.0', detail: 'Reading 9 · Listening 8.5 · Speaking 7 · Writing 7' },
  { lang: 'Persian', level: 'Native', detail: null },
  { lang: 'Italian', level: 'Beginner', detail: 'Learning' },
]

const references = [
  {
    name: 'Prof. Kim Vanmeensel',
    role: 'Associate Professor, Faculty of Engineering Science, KU Leuven',
    email: 'kim.vanmeensel@kuleuven.be',
    phone: '+32 16 32 13 14',
  },
  {
    name: 'Prof. Mahmood Meratian',
    role: 'Associate Professor, Materials Science and Engineering, Isfahan University of Technology',
    email: 'meratian@cc.iut.ac.ir',
    phone: '+98 313 391 5722',
  },
  {
    name: 'Aurelie Serre',
    role: 'Manager, Organic & Chemical Management — Material Engineering Division, Toyota Motor Europe',
    email: 'aurelie.serre@toyota-europe.com',
    phone: null,
  },
]

/* -------------------------------- sections -------------------------------- */

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28 lg:px-10">
        <SectionHeading index="01" title="Experience" />
        <div>
          {experience.map((job, i) => (
            <Reveal
              key={job.org}
              delay={i * 80}
              className={`grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-[120px_1fr_140px] md:gap-8 md:py-10 ${
                i === experience.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="label-caps pt-1 text-ink-soft">{job.years}</div>
              <div>
                <h3 className={`font-serif-display tracking-tight text-ink ${job.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-copper">
                  {job.org} <span className="font-normal text-ink-soft">— {job.place}</span>
                </p>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">{job.text}</p>
              </div>
              <div className="flex items-start md:justify-end">
                <img
                  src={job.logo}
                  alt={job.logoAlt}
                  loading="lazy"
                  className={`w-auto object-contain opacity-85 ${job.featured ? 'h-10 md:h-12' : 'h-8 md:h-10'}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28 lg:px-10">
        <SectionHeading index="02" title="Education" />
        <div className="grid grid-cols-1 gap-px border border-line bg-[hsl(var(--line))] md:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal key={ed.title} delay={i * 100} className="bg-paper p-7 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <span className="label-caps text-ink-soft">{ed.years}</span>
                {ed.status && (
                  <span className="border border-[hsl(var(--copper))] px-2 py-0.5 text-[11px] font-medium tracking-wide text-copper">
                    {ed.status}
                  </span>
                )}
              </div>
              <h3 className="font-serif-display mt-4 text-xl leading-snug tracking-tight text-ink md:text-2xl">
                {ed.title}
              </h3>
              <div className="mt-6 space-y-6">
                {ed.entries.map((e) => (
                  <div key={e.degree} className="flex items-center gap-4 border-t border-line pt-5">
                    {e.logo && <img src={e.logo} alt={e.logoAlt} loading="lazy" className="h-9 w-auto shrink-0 object-contain opacity-90" />}
                    {ed.logo && !e.logo && (
                      <img src={ed.logo} alt={ed.logoAlt ?? ''} loading="lazy" className="h-9 w-auto shrink-0 object-contain opacity-90" />
                    )}
                    <div>
                      {e.school && <p className="text-sm font-semibold text-ink">{e.school}</p>}
                      <p className="text-sm text-ink">{e.degree}</p>
                      <p className="mt-0.5 text-xs text-ink-soft">{e.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-t border-line bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28 lg:px-10">
        <SectionHeading index="03" title="Research" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          {research.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <p className="label-caps text-copper">{r.kind}</p>
              <h3 className="font-serif-display mt-4 text-xl leading-snug tracking-tight text-ink md:text-[1.55rem]">
                {r.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{r.text}</p>
              <p className="mt-4 border-t border-line pt-3 text-xs font-medium tracking-wide text-ink-soft">{r.meta}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28 lg:px-10">
        <SectionHeading index="04" title="Skills" />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          {skillGroups.map((sg, i) => (
            <Reveal key={sg.title} delay={i * 100}>
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-[hsl(var(--ink))] pb-3">
                <h3 className="font-serif-display text-2xl tracking-tight text-ink">{sg.title}</h3>
                <span className="text-xs italic text-ink-soft">{sg.blurb}</span>
              </div>
              <div className="mt-7 space-y-6">
                {sg.groups.map((g) => (
                  <div key={g.label}>
                    <p className="label-caps text-ink-soft">{g.label}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="border border-line bg-white px-3 py-1.5 text-[13px] text-ink transition-colors hover:border-[hsl(var(--copper))] hover:text-copper"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Languages */}
        <Reveal delay={150} className="mt-16 border-t border-line pt-10">
          <p className="label-caps text-copper">Languages</p>
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {languages.map((l) => (
              <div key={l.lang}>
                <p className="font-serif-display text-lg text-ink">{l.lang}</p>
                <p className="mt-1 text-sm text-ink-soft">{l.level}</p>
                {l.detail && <p className="mt-0.5 text-xs text-ink-soft/80">{l.detail}</p>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Beyond() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20 lg:px-10">
        <Reveal>
          <p className="label-caps text-copper">Beyond work</p>
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 text-[15px] leading-relaxed text-ink-soft md:grid-cols-3">
            <p>
              <span className="font-medium text-ink">Saleh NGO charity</span> (2018–2023) — providing facilities for
              orphaned children and holding celebrations for them.
            </p>
            <p>
              <span className="font-medium text-ink">Aria Cultural Center</span> (2018–2020) — helped organize the
              Yaldā Night celebration for 1000+ guests and built a mobile stage on a tractor-trailer for live music.
            </p>
            <p>
              <span className="font-medium text-ink">Theater Cultural Center</span> (2018–2020) — council member in
              2019; ticket sales, arrangement and conduction of student theater.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28 lg:px-10">
        <SectionHeading index="05" title="Contact & References" />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5">
            <h3 className="font-serif-display text-2xl leading-snug tracking-tight text-ink md:text-3xl">
              Open to positions in materials engineering, R&D, and web development.
            </h3>
            <div className="mt-8 space-y-3 text-[15px]">
              <p>
                <a href="mailto:iman.barekatain@gmail.com" className="link-underline font-medium text-ink">
                  iman.barekatain@gmail.com
                </a>
              </p>
              <p>
                <a href="mailto:iman.barekatain@student.kuleuven.be" className="link-underline text-ink-soft">
                  iman.barekatain@student.kuleuven.be
                </a>
              </p>
              <p className="text-ink-soft">+39 345 837 8961 · +32 495 76 87 93</p>
              <p className="text-ink-soft">Bergamo, Italy</p>
            </div>
            <a
              href="/assets/Iman_Barekatain_CV.pdf"
              download
              className="mt-9 inline-flex min-h-[44px] items-center gap-2 bg-[hsl(var(--ink))] px-6 text-sm font-medium text-[hsl(var(--paper))] transition-colors hover:bg-[hsl(var(--copper))] hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV (PDF)
            </a>
          </Reveal>

          <div className="md:col-span-7">
            <p className="label-caps text-ink-soft">References</p>
            <div className="mt-5">
              {references.map((r, i) => (
                <Reveal key={r.name} delay={i * 80} className="border-t border-line py-5 last:border-b">
                  <p className="font-serif-display text-lg tracking-tight text-ink">{r.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.role}</p>
                  <p className="mt-2 text-sm">
                    <a href={`mailto:${r.email}`} className="link-underline text-copper">
                      {r.email}
                    </a>
                    {r.phone && <span className="text-ink-soft"> · {r.phone}</span>}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-line bg-[hsl(var(--ink))] text-[hsl(var(--paper))]">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs lg:px-10">
        <span className="font-serif-display text-sm">
          Iman <em>Barekatain</em>
        </span>
        <span className="opacity-60">Materials Engineering · Web Development</span>
        <span className="opacity-60">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export { Experience, Education, Research, Skills, Beyond, Contact, Footer }
