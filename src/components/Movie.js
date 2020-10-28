import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
import {Link} from 'react-router-dom'

Movie.propTypes = {   
    title : PropTypes.string.isRequired,
    summary : PropTypes.string,
    poster : PropTypes.string,
    year : PropTypes.number,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
   
}

export default function Movie({title,year, summary, poster, genres}) {
    
    return (
        <div className='movie'>

            <Link to={{ pathname : '/detail', state : {title,year, summary, poster, genres} }}>

            <img src={poster} alt={title}></img>
            <div className='movie_data'>
                <h3 className='movie_title'>{title}</h3>               
                <ul className='movie_genres'>
                    {genres.map((ele, index) => ( <li className='genres_item' key={index}>{ele}</li> ))} 
                </ul>
                <h5 className='movie_year'>{year}</h5>
                <p className='movie_summary'>{ summary.slice(0,180) }</p>
            </div>

            </Link>

        </div>
    )
}