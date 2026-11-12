
import React from 'react'

function Setting() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-black mb-3">Settings ⚙️</h1>
      <p className="text-slate-400 mb-10">Manage your website preferences.</p>

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-7 space-y-7">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg">Account</h2>
            <p className="text-slate-400 text-sm">Manage your account information.</p>
          </div>
          <span className="text-blue-400">👤</span>
        </div>

        <div className="border-t border-white/10 pt-6 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg">Notifications</h2>
            <p className="text-slate-400 text-sm">Manage notifications.</p>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-500" />
        </div>

        <div className="border-t border-white/10 pt-6 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg">Dark Mode</h2>
            <p className="text-slate-400 text-sm">Enjoy the dark interface.</p>
          </div>
          <span className="text-2xl">🌙</span>
        </div>
      </div>
    </div>
  )
}

export default Setting
