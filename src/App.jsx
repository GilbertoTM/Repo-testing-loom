function App() {
  return (
    <div className="app-container flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold text-loom-green-500 drop-shadow-[0_0_10px_rgba(0,255,148,0.5)]">
        Testing Loom
      </h1>
      <p className="text-loom-gray-400 text-lg">
        Structure initialized with <span className="text-loom-green-400 font-semibold">Tailwind CSS</span>.
      </p>
      <div className="flex gap-4 mt-8">
        <div className="w-16 h-16 bg-loom-black-900 rounded-lg border border-loom-gray-800 flex items-center justify-center text-xs text-loom-gray-500">900</div>
        <div className="w-16 h-16 bg-loom-black-800 rounded-lg border border-loom-gray-800 flex items-center justify-center text-xs text-loom-gray-500">800</div>
        <div className="w-16 h-16 bg-loom-black-700 rounded-lg border border-loom-gray-800 flex items-center justify-center text-xs text-loom-gray-500">700</div>
      </div>
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-loom-green-900 rounded-lg border border-loom-green-700 flex items-center justify-center text-xs text-loom-green-500">900</div>
        <div className="w-16 h-16 bg-loom-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,148,0.4)] flex items-center justify-center text-xs text-loom-black-900 font-bold">500</div>
        <div className="w-16 h-16 bg-loom-green-300 rounded-lg flex items-center justify-center text-xs text-loom-black-900 font-bold">300</div>
      </div>
    </div>
  )
}

export default App
