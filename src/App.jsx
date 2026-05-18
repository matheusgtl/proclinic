import './App.css'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
