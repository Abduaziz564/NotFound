
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/home', icon: '⌂' },
    { name: 'About', path: '/about', icon: '◈' },
    { name: 'Settings', path: '/setings', icon: '⚙' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-slate-900/80">
        <Link to="/home" className="text-2xl font-black tracking-wide">
          <span className="text-blue-500">My</span>Website.
        </Link>

        <div className="flex items-center gap-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="mr-2">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold">
          A
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}

export default App
