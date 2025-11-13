import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import component 
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <h1>La foire</h1>
        <Footer />
      </div>
    </>
  )
}

export default App
