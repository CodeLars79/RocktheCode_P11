import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <nav className='header-nav'>
        <div className='logo-wrapper'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active logo' : 'logo')}
            onClick={() => setMenuOpen(false)}
          >
            <img src='./assets/logo.png' alt='Logo' className='logo-img' />
            FINDING GAUDI
          </NavLink>
        </div>

        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`links ${menuOpen ? 'show' : ''}`}>
          <NavLink
            to='/map'
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMenuOpen(false)}
          >
            Map
          </NavLink>
          <NavLink
            to='/buildings'
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMenuOpen(false)}
          >
            Buildings
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
