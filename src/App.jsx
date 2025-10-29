import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'profile':
        return <UserProfile />;
      case 'users':
        return <Users />;
      case 'counter':
        return <Counter />;
      default:
        return (
          <>
            <Greeting name="Samuel" />
            <Counter />
            <Users />
          </>
        );
    }
  };

  return (
    <>
      <div>
        <BrowserRouter >
          <nav >
             <Link to="/">Home</Link>
             <Link to="/profile">Profile</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Greeting name="Samuel" />} />
            <Route path='/profile' element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
        {/* <nav className="app-navigation">
          <button 
            className={currentView === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('home')}
          >
            Home
          </button>
          <button 
            className={currentView === 'profile' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('profile')}
          >
            Profile
          </button>
          <button 
            className={currentView === 'users' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('users')}
          >
            Users
          </button>
          <button 
            className={currentView === 'counter' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('counter')}
          >
            Counter
          </button>
        </nav>
        
        <main className="app-content">
          {renderCurrentView()}
        </main> */}
      </div>
    </>
  )
}

export default App
