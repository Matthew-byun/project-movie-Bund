import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";






function MovieDetails(props) {
  // get id from URL
  console.log(props)
  const getId = useParams();

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchItem();
    
    setTimeout(() =>{
      setIsLoading(false);
    },3000)

    setTimeout(() =>{
      document.documentElement.scrollTop = 180;
    },500)
  }, []);

  const [item, setItem] = useState({
    videos: "",
  });
  const fetchItem = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${getId.id}?api_key=23bab7b92b53fc1a9085f082ab067e31&append_to_response=videos,images`
    );

    const item = await data.json();

    setItem(item);
    console.log(item);

  };
  
  return (
    <div> 
      
      <div className="card" key={item.id}>
        <div className="card-image center">
    

        { !item.backdrop_path ? <div className='center'>
            
            {isLoading==true ? <Loader 
            type="TailSpin"
            color="#00BFFF"
            height={400}
            width={400}
            style={{padding:'20vh'}}
            /> : 
              <img className="responsive-img parallax" src="https://img3.goodfon.com/wallpaper/nbig/5/3e/minimalizm-smayl-smaylik-net.jpg"/>}
            </div>
            : 
          <img
          style={{height:''}}
            className="responsive-img parallax"
            alt="backdrop"
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          /> }
            
          <span className="card-title">
            <h1 className="truncate center">{item.title}</h1>
          </span>
        </div>
      </div>

      <div className="container">
        
        <div>
          {item.genres === undefined ? (
            <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          ) : (
            item.genres.map((name) => (
              <a className="btn-flat disabled">{name.name}</a>
            ))
          )}
          <div className="collection with-header">
            <div className="collection-header">
              <p className='h5 d-inline'>Title: </p> <span>{item.title}</span>
            </div>
            <div className="collection-header">
              <p className='h5 d-inline'>Release Date: </p> <span>{item.release_date}</span>
            </div>
            {item.homepage ? (
              <div className="collection-header">
              <p className='h5 d-inline'>Homepage: </p> <span>{item.homepage}</span>
              </div>
            ) : (
              <div className="collection-header">
                <h5>Homepage: ...</h5>
              </div>
            )}
            {item.tagline ? (
              <div className="collection-header">
              <p className='h5 d-inline'>Tagline: </p> <span>{item.tagline}</span>
              </div>
            ) : (
              <div className="collection-header">
                <h5>Tagline: ...</h5>
              </div>
            )}

            <div className="collection-header">
              <p className='h5 d-inline'>Overview: </p> <span>{item.overview}</span>
            </div>
          </div>

          <h1 className="truncate">Trailer</h1>

          {item.videos.results === undefined ? (
            <div>Loading</div>
          ) : (
            <div>
              {item.videos.results.length > 0 ? (
                item.videos.results.map((video) => (
                  <div className="video-container mt-4 mb-4">
                    <h5>{video.name}</h5>
                    <iframe
                      title={video.name}
                      key={video.id}
                      width="853"
                      height="480"
                      allowFullScreen
                      src={`https://www.youtube.com/embed/${video.key}`}
                    ></iframe>
                  </div>
                ))
              ) : (
                <h5 className='pt-2 pb-4 mb-4 light'>Trailer is not available</h5>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
