import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/Auth/Login/LoginScreen'
import { RegisterScreen } from '../components/Auth/Register/RegisterScreen'

import { DashboarRouter } from './DashboarRouter'

export const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Rutas publicas */}
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/register' element={<RegisterScreen />}/>
                
            {/* Rutas privadas */}
            <Route path='/*' element={<DashboarRouter />}/>
        </Routes>
    </BrowserRouter>
  )
}
