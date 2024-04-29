import { NavLink } from "react-router-dom"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { useState } from "react"

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme(() => !isDarkTheme)
    document.body.classList.toggle('dark-theme')
  }

  return (
    <header>
      <nav className="navbar bg-body-tertiary p-3">
        {/* logo */}
        <div className="logo">
          <a className="navbar-brand" href="/">
            Recipe Rescue App
          </a>
        </div>

        {/* navigation */}
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item mx-2">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink to="search" className="nav-link">
              Advance Search
            </NavLink>
          </li>
        </ul>

        {/* toggle theme btn */}
        <button className="btn-toggle" onClick={toggleTheme}>
          {isDarkTheme ? (
            <BsFillSunFill />
          ) : (
            <BsFillMoonFill />
          )}
        </button>
      </nav>
    </header>
  )
}

export default Navbar