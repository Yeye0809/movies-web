import { useState } from "react";
import { getFilmById } from "../Helpers/getFilmById";
import { getSerieById } from "../Helpers/getSerieById";


export const useFetchById = () => {
    const [filmById, setFilmById] = useState([]);
    const [serieById, setSerieById] = useState([]);

    const onMovieById = ({id})=>{
        getFilmById({id})
            .then(data => setFilmById(data));
    }

    const onSerieById = ({id})=>{
        getSerieById({id})
            .then(data => setSerieById(data) )
    }

    return {
        onMovieById,
        onSerieById,
        filmById,
        serieById
    }
}
