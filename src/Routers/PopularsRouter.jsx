
import { Route, Routes } from 'react-router-dom'
import { ScreenPopularFilms } from '../components/Films/ScreenPopularFilms'
import { ScreenPopularSeries } from '../components/Series/ScreenPopularSeries'

export const PopularsRouter = () => {
  return (
    <div className='col-8'>
        <Routes>
            <Route path='films' element={<ScreenPopularFilms />}/>
            <Route path='series' element={<ScreenPopularSeries />}/>
        </Routes>
    </div>
  )
}
