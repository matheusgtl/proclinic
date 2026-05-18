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

// Main App component - renders the entire ProClinic landing page
export default function App() {
  return (
    // Main container with full height and relative positioning for child elements
    <div className="relative min-h-screen">
      {/* Background layer with animated shapes */}
      <Background />
      {/* Navigation bar at the top */}
      <Navbar />
      {/* Main content area */}
      <main>
        {/* Hero section with headline and call-to-action */}
        <Hero />
        {/* Statistics highlighting key metrics */}
        <Stats />
        {/* Features section showing ProClinic benefits */}
        <Features />
        {/* How it works explanation */}
        <HowItWorks />
        {/* Testimonials from satisfied clients */}
        <Testimonials />
        {/* Pricing plans */}
        <Pricing />
        {/* Contact form */}
        <Contact />
      </main>
      {/* Footer with links and information */}
      <Footer />
      {/* Floating WhatsApp button for quick contact */}
      <WhatsAppFloat />
    </div>
  )
}
