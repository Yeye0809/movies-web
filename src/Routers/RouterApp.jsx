import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboarRouter } from './DashboarRouter'

export const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Rutas publicas */}
                
            {/* Rutas privadas */}
            <Route path='/*' element={<DashboarRouter />}/>
        </Routes>
    </BrowserRouter>
  )
}
