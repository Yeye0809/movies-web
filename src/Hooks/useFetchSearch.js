import { useEffect, useState } from "react";
import { getSearch } from "../Helpers/getSearch";



export const useFetchSearch = (search) => {
    const [resultsSearch, setResultsSearch] = useState({});
    
    const onSearch = ()=>{
        getSearch(search)
        .then(data => setResultsSearch(data))
        .catch(err => console.log(err))
    }


  return  {
    resultsSearch,
    onSearch
};
}
