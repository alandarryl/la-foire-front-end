import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import component 
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <h1>La foire</h1>
        <Footer />
      </div>
    </>
  )
}

export default App
