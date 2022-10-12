import React from 'react';

export const CardMoovie = ({title, date, posterPath}) => {
  return (
    <div className='card col-3 m-3'>
        <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt="" className='card-img-top'/>
        <div className="card-body">
            <h5 className="card-title">
                {title}
            </h5>
            <p className="card-text text-muted">{date}</p>
        </div>
    </div>
  )
}
