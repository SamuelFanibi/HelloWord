import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import { BrowserRouter, Link, Route, Routes, useSearchParams } from 'react-router-dom'
import ErrorPage from './components/404'

function App() {
  return (
    <>
      <div>
         
        <BrowserRouter >
        
          <Routes>
            <Route path='/' element={<Greeting name="Samuel" />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/users' element={<Users/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
