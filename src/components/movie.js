import React from "react";
import { Link } from "react-router-dom";


/// create MOVIE for the lists


const Movie = (props) => {
    return (
        <div className='col s3' style={{width:'30vh', height: "65vh" }}>
            <div className="card-panel hoverable center"
              style={{ height: "60vh" }}>
                <Link className='center' to={`/search/${props.movieId}`}> 
                    {
                        props.image == null ? <img src={`https://aina.vn/wp-content/uploads/2021/08/default-image-620x600-1.jpg`} alt="card image" style={{width: '26vh', height: '40vh'}} /> 
                        : <img  src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="card image" style={{width: '26vh', height: '40vh'}}/>
}
                </Link>
                <span className='card-title'>
                    <h1 className='truncate'>{props.name}</h1>
                    <h5 className='truncate'>{props.overview}</h5>
                    
                </span>
            </div>
        </div>
    )
}

export default Movie;