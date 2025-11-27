import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Roadmap from './components/Roadmap';
import UnsupportedFeatures from './components/UnsupportedFeatures';
import FamousClients from './components/FamousClients';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FreeTier from './components/FreeTier';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Landing Page Layout */}
        <Route path="/" element={
          <div className="min-h-screen bg-loom-black-900 text-loom-gray-100 font-sans selection:bg-loom-green-500 selection:text-loom-black-900 flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <AboutUs />
              <TrustedCompanies />
              <Features />
              <DemoSection />
              <Roadmap />
              <UnsupportedFeatures />
              <FamousClients />
              <Testimonials />
              <Pricing />
              <FreeTier />
              <FAQ />
              <Blog />
            </main>
            <Footer />
          </div>
        } />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
