
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center relative">
      <div className="absolute w-72 h-72 bg-blue-600/20 blur-[100px] rounded-full"></div>

      <div className="relative">
        <h1 className="text-[130px] md:text-[190px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          404
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4 mb-8"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-slate-400 max-w-md mx-auto mb-9 leading-7">
          The page you are looking for doesn't exist or has been moved.
          Don't worry, let's get you back home!
        </p>

        <Link
          to="/home"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1"
        >
          <span>←</span>
          Back to Home
        </Link>

        <p className="text-slate-600 text-sm mt-10">
          ERROR CODE: 404 | PAGE NOT FOUND
        </p>
      </div>
    </div>
  )
}

export default NotFound
