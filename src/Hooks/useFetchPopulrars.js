
import { useState } from 'react';
import { getPopularMovies } from '../Helpers/getPopularsFilms';
import { getPopularSeries } from '../Helpers/getPopularsSeries';

export const useFetchPopulrars = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);

    const onGetPopularFilms = ({counter})=>{
        getPopularMovies({counter})
        .then(data => setPopularMovies(data.results))
    }

    const onGetPopularSeries = ({counter})=>{
        getPopularSeries({counter})
            .then(data => setPopularSeries(data.results))
    }

    return{
        onGetPopularFilms,
        onGetPopularSeries,
        popularMovies,
        popularSeries

    }
}
