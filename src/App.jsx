<<<<<<< HEAD
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Store from '../components/Store'
import Normativa from '../components/Normativa'
import Testimonios from '../components/Testimonios'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-blue-600 text-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <h1 className="text-4xl font-bold text-center mb-6">Bienvenido a MandangaRP Store</h1>
        <p className="text-center mb-12">Aquí encontrarás coches, casas, peds, mafias y más.</p>
        <Store />
        <Normativa />
        <Testimonios />
      </main>
      <Footer />
    </div>
  )
}
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 02f2c71441170e00a2250a19e599c26d53af32d4
