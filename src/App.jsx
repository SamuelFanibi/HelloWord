import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import HelloRouter from './components/Router'



function App() {
  return (
    <>
      <div>
         
        <BrowserRouter >
         <HelloRouter />
          
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
