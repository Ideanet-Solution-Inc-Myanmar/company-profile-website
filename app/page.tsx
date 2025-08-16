import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Services } from "./components/services"
import { Portfolio } from "./components/portfolio"
import { Contact } from "./components/contact"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
