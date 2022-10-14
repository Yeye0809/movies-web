import React from 'react';

export const CardMoovie = ({title, vote, posterPath}) => {
  return (
    <div className="col">
      <div className='card m-3'>
        <div className="row no-gutters">
          <div className="col-4">
            <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt="" className='card-img-top'/>
          </div>

          <div className="col-8">
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-text text-muted">{vote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
