import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScreenMovies } from '../components/Movies/ScreenMovies';
import { MenuMovies } from '../components/Navbar/MenuMovies';
import { MenuSeries } from '../components/Navbar/MenuSeries';
import { Navbar } from '../components/Navbar/Navbar';
import { ScreenFilms } from '../components/Pages/ScreenFilms';
import { ScreenSearch } from '../components/Pages/ScreenSearch';
import { ScreenSeries } from '../components/Pages/ScreenSeries';
import { Sidebar } from '../components/Sidabars/Sidebar';
import { SidebarRight } from '../components/Sidabars/SidebarRight';
import { GenresRouter } from './GenresRouter';
import { PopularsRouter } from './PopularsRouter';
import { TopRatedRouter } from './TopRatedRouter';

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
                <Route path='film/:id' element={<ScreenFilms />}/>
                <Route path='serie/:id' element={<ScreenSeries />}/>
                <Route path='search' element={<ScreenSearch />}/>
                <Route path='popular/*' element={<PopularsRouter />}/>
                <Route path='rated/*' element={<TopRatedRouter />}/>
                <Route path='genres/*' element={<GenresRouter />}/>
            </Routes>
            <SidebarRight />
        </div>
    </>
  )
}
