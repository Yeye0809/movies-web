import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScreenMovies } from '../components/Movies/ScreenMovies';
import { MenuMovies } from '../components/Navbar/MenuMovies';
import { MenuSeries } from '../components/Navbar/MenuSeries';
import { Navbar } from '../components/Navbar/Navbar';
import { ScreenFilms } from '../components/Pages/ScreenFilms';
import { ScreenSearch } from '../components/Pages/ScreenSearch';
import { ScreenSeries } from '../components/Pages/ScreenSeries';
import { Sidebar } from '../components/Sidabar/Sidebar';

export const DashboarRouter = () => {
  const [showMenuMovies, setShowMenuMovies] = useState(false);
  const [showMenuSeries, setShowMenuSeries] = useState(false);

  const handleShowMenuMovies = ()=>{
    setShowMenuMovies(!showMenuMovies);
    console.log('show')
  }
  const handleShowMenuSeries = ()=>{
    setShowMenuSeries(!showMenuSeries);
    console.log('show')
  }
  return (
    <>
        <Navbar handleShowMenuMovies={handleShowMenuMovies} handleShowMenuSeries={handleShowMenuSeries}/>
        {
          showMenuMovies && <MenuMovies handleShowMenuMovies={handleShowMenuMovies}/>
        }
        {
          showMenuSeries && <MenuSeries handleShowMenuSeries={handleShowMenuSeries}/> 
        }
        
        <div className='row'>
            <Sidebar />
            <Routes>
                <Route path='movies' element={<ScreenMovies />}/>
                <Route path='films' element={<ScreenFilms />}/>
                <Route path='series' element={<ScreenSeries />}/>
                <Route path='search' element={<ScreenSearch />}/>
            </Routes>
        </div>
    </>
  )
}
