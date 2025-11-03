import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import { BrowserRouter, Link, Route, Routes, useSearchParams } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
         
        <BrowserRouter >
        <main className="app-content">
          <nav className="app-navigation">
             <Link className='nav-btn active' to="/">Home</Link>
             <Link className='nav-btn' to="/profile">Profile</Link>
             <Link className='nav-btn' to="/users">Users</Link>
             <Link className='nav-btn' to="/counter">Counter</Link>
          </nav>
          </main>
          <Routes>
            <Route path='/' element={<Greeting name="Samuel" />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/users' element={<Users/>} />
            <Route path='/counter' element={<Counter/>} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
