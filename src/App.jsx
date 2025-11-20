import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-loom-black-900 text-loom-gray-100 font-sans selection:bg-loom-green-500 selection:text-loom-black-900">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            {/* Add more routes here later */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
