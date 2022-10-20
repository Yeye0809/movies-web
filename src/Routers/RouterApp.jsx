import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/Login/LoginScreen'
import { DashboarRouter } from './DashboarRouter'

export const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Rutas publicas */}
            <Route path='/login' element={<LoginScreen />}/>
                
            {/* Rutas privadas */}
            <Route path='/*' element={<DashboarRouter />}/>
        </Routes>
    </BrowserRouter>
  )
}
