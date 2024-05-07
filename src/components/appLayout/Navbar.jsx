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
      <nav className="navbar p-3">
        <div className="container">
          {/* logo */}
          <div className="logo">
            <a className="navbar-brand text-white" href="/">
              Recipe Rescue
            </a>
          </div>

          {/* navigation */}
          <ul className="navbar-nav d-flex flex-md-row text-center">
            <li className="nav-item mx-2">
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="search" className="nav-link text-white">
                Advance Search
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="suggestion" className="nav-link text-white">
                Our Suggestion
              </NavLink>
            </li>
          </ul>

          {/* toggle theme btn */}
          <button className="btn-toggle text-white d-flex justify-content-center d-none d-sm-block" onClick={toggleTheme}>
            {isDarkTheme ? (
              <BsFillSunFill/>
            ) : (
              <BsFillMoonFill />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar