import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Users from './components/Users'

function App() {
  

  return (
    <>
      <div>
         <Greeting name="Samuel" />
         <Counter />

         <Users />
      </div>
    </>
  )
}

export default App
