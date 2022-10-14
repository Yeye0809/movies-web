import React, { useEffect, useState } from 'react';
import { getSearch } from '../../Helpers/getSearch';
import { useFetchSearch } from '../../Hooks/useFetchSearch';
import { CardMoovie } from '../Movies/CardMoovie';


export const ScreenSearch = () => {
  const [search, setSearch] = useState('');
  const {resultsSearch, onSearch} = useFetchSearch(search);
  const {results} = resultsSearch;

  const handleInputChange = (e)=>{   
      setSearch(e.target.value); 
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    onSearch()
    console.log(results)
  
  }

  return (
    <div className='col-8'>
      <div className='container'> 
      <h1>Search</h1> 
      <hr />
        <div className='row'>
          <div className="col-5"> 
            <h3>Searching</h3>
            <hr />
            <form onSubmit={handleSubmit}>
              <input 
                className="form-control" 
                type="text" 
                value={search}
                onChange={ handleInputChange }
                />
              <button 
                type='submit'
                className="btn btn-outline-primary mt-2"
                >
                  Search
              </button> 
            </form>
          </div>

          <div className="col-7">
            <h3>Results</h3>
            <hr />

           {
            results?.map(result =>(

              <CardMoovie key={result.id} 
                title={(!result.title && result.name)} 
                posterPath={result.poster_path} 
                vote={result.vote_average}
                {...result} />
            ))
           }

          </div>
        </div>
      </div>
    </div>
  )
}
