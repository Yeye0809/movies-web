import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = ({handleShowMenuMovies, handleShowMenuSeries}) => {
  return (
    
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-3'>

      <Link className='navbar-brand' to='/movies'>
        MoviesWeb
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>        
            <NavLink className='nav-item nav-link'
              onClick={handleShowMenuMovies}
            >
              Films
            </NavLink>

            <NavLink className='nav-item nav-link'
              onClick={handleShowMenuSeries}
            >
              Series
            </NavLink>

            {/* <button className='nav-item nav-link'>
              Generos
            </button> */}

            <NavLink className='nav-item nav-link' to='/search'>
              Search
            </NavLink>           
        </div>

        <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end '> 
          <ul className='navbar-nav ml-auto'>
            <span className='nav-item nav-link text-info'>
              name
            </span>
            <button className='nav-item nav-link btn'>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
