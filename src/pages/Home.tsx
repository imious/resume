import Header from '../sections/Header'
import Hero from '../sections/Hero'
import { Experience, Education, Research, Skills, Beyond, Contact, Footer } from '../sections/Content'

export default function Home() {
  return (
    <div id="top" className="bg-paper">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Research />
        <Skills />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
