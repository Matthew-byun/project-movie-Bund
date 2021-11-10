import React from "react";
import Movie from "./movie";

/// render ra ket qua
const MovieList = (props) => {
    console.log(props)
    return (
        <div className='container'>
            <div className="row">
                <div className='d-flex align-content-between flex-wrap'>
                    {
                        props.movies.map((movie , id) => {
                            return (
                                <Movie key={id} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} name={movie.original_title} overview={movie.overview}/>
                            )
                        })
                    }
                </div> 

            </div>
        </div>
    )
}

export default MovieList;