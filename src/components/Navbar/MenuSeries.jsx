import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

export const MenuSeries = ({handleShowMenuSeries}) => {
  return (
    <div className='menu-container-series' onClick={handleShowMenuSeries}>
        <div className='container-list navbar navbar-light bg-light rounded-3' >
            <ul>
                <li>
                    <Link to='popular/series' className='navbar-brand'>Popular</Link>             
                </li>
                <li>
                    <Link to='rated/series' className='navbar-brand'>Top rated</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
