
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center">
      <span className="px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
        ✨ Welcome to our website
      </span>

      <h1 className="text-6xl font-black mb-6">
        Build Something <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Amazing.
        </span>
      </h1>

      <p className="text-slate-400 max-w-xl text-lg mb-8">
        Discover our modern website built with React Router and Tailwind CSS.
        Explore our pages and enjoy the experience.
      </p>

      <div className="flex gap-4">
        <Link to="/about" className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition">
          Explore More →
        </Link>

        <Link to="/setings" className="border border-white/20 hover:bg-white/10 px-7 py-3 rounded-xl transition">
          Settings
        </Link>
      </div>
    </div>
  )
}

export default Home
