import { useState } from "react"
import { getRated } from "../Helpers/getRated"


export const useFetchRated = () => {
    const [rated, setRated] = useState([])

    const onRated = ({counter})=>{
        getRated({counter})
            .then(data => setRated(data.results))
            .catch(err => console.log(err))
    }

    return {
        onRated,
        rated
    }
    
}
