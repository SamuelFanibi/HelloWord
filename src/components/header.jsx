import { Link  } from 'react-router-dom'
const Header =() => {

    return (
        <>
          <main className="app-content">
          <nav className="app-navigation">
             <Link className='nav-btn active' to="/">Home</Link>
             <Link className='nav-btn' to="/profile">Profile</Link>
             <Link className='nav-btn' to="/users">Users</Link>
             <Link className='nav-btn' to="/counter">Counter</Link>
          </nav>
          </main>
        </>
    )
}

export default Header;