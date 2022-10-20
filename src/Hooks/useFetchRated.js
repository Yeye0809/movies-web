import { useState } from "react"
import { getRated } from "../Helpers/getRated"
import { getRatedSeries } from "../Helpers/getRatedSeries"


export const useFetchRated = () => {
    const [ratedFilms, setRatedFilms] = useState([]);
    const [ratedSeries, setRatedSeries] = useState([]);

    const onRated = ({counter})=>{
        getRated({counter})
            .then(data => setRatedFilms(data.results))
            .catch(err => console.log(err))
    }

    const onRatedSeries = ({counter})=>{
        getRatedSeries({counter})
            .then(data => setRatedSeries(data.results))
            .catch(err => console.log(err))
    }

    return {
        onRated,
        onRatedSeries,
        ratedFilms,
        ratedSeries

    }
    
}
