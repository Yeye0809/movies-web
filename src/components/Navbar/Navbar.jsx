import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>

      <Link className='navbar-brand'>
        MoviesWeb
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>        
            <NavLink className='nav-item nav-link'>
              Peliculas
            </NavLink>

            <NavLink className='nav-item nav-link'>
              Series
            </NavLink>

            {/* <NavLink className='nav-item nav-link'>
              Generos
            </NavLink> */}

            <NavLink className='nav-item nav-link'>
              Buscar
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
