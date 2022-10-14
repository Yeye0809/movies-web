import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './menu.css';

export const MenuMovies = ({handleShowMenuMovies}) => {

    const location = useLocation();

    
  return (
    <div className='menu-container' onClick={handleShowMenuMovies}>
        <div className='container-list navbar navbar-light bg-light rounded-3' >
            <ul>
                <li>
                    <Link className='navbar-brand'>Popular</Link>             
                </li>
                <li>
                    <Link className='navbar-brand'>Top rated</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
