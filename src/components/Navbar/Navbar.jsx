import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({handleShowMenuMovies, handleShowMenuSeries}) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>

      <Link className='navbar-brand'>
        MoviesWeb
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>        
            <button className='btn nav-item nav-link'
              onClick={handleShowMenuMovies}
            >
              Movies
            </button>

            <button className='btn nav-item nav-link'
              onClick={handleShowMenuSeries}
            >
              Series
            </button>

            {/* <button className='nav-item nav-link'>
              Generos
            </button> */}

            <button className='btn nav-item nav-link'>
              Search
            </button>           
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
