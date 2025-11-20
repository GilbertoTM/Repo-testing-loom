import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-loom-black-900 text-loom-gray-100 font-sans selection:bg-loom-green-500 selection:text-loom-black-900">
        <Navbar />

        <main className="pt-20 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 py-20">
            <div className="text-center space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-loom-gray-100 to-loom-gray-400">
                Build with <span className="text-loom-green-500 drop-shadow-[0_0_15px_rgba(0,255,148,0.3)]">Confidence</span>
              </h1>
              <p className="text-loom-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                The ultimate testing infrastructure for modern web applications.
                Fast, reliable, and designed for <span className="text-loom-green-400 font-medium">scale</span>.
              </p>
            </div>

            {/* Color Palette Showcase (Temporary) */}
            <div className="p-8 rounded-2xl bg-loom-black-800 border border-loom-gray-800/50 backdrop-blur-sm">
              <p className="text-sm text-loom-gray-500 mb-4 uppercase tracking-wider font-semibold">Design System Preview</p>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-loom-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,148,0.4)] flex items-center justify-center text-xs text-loom-black-900 font-bold">Primary</div>
                <div className="w-16 h-16 bg-loom-black-700 rounded-lg border border-loom-gray-800 flex items-center justify-center text-xs text-loom-gray-500">Surface</div>
                <div className="w-16 h-16 bg-loom-gray-100 rounded-lg flex items-center justify-center text-xs text-loom-black-900 font-bold">Text</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
