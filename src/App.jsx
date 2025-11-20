import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-loom-black-900 text-loom-gray-100 font-sans selection:bg-loom-green-500 selection:text-loom-black-900 flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
              </>
            } />
            {/* Add more routes here later */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
