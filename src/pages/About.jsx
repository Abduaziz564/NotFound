
import React from 'react'

function About() {
  return (
    <div className="py-16">
      <div className="text-center mb-14">
        <span className="text-blue-400 font-semibold">ABOUT US</span>
        <h1 className="text-5xl font-black mt-4 mb-5">
          Who We Are
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          We create modern digital experiences using powerful technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          ['🚀', 'Fast Performance', 'Our website is designed to be fast and smooth.'],
          ['🎨', 'Modern Design', 'Beautiful layouts and clean user interfaces.'],
          ['💻', 'Smart Technology', 'Built with React and Tailwind CSS.'],
        ].map((item, index) => (
          <div key={index} className="bg-slate-900 border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 hover:-translate-y-2 transition duration-300">
            <div className="text-4xl mb-5">{item[0]}</div>
            <h2 className="text-xl font-bold mb-3">{item[1]}</h2>
            <p className="text-slate-400">{item[2]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
