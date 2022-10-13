import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

export const MenuSeries = () => {
  return (
    <div className='menu-container-series'>
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