import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const M = window.M;
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".tap-target");
  M.TapTarget.init(elems, {});
});
function MovieDetails(props) {
  // get id from URL
  console.log(props)
  const getId = useParams();
  useEffect(() => {
    fetchItem();
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

    //     <div>
    //     {item.videos.results.map(video => (
    //           <iframe key={video.id} width="420" height="345" src={`https://www.youtube.com/embed/${video.key}`}>
    //           </iframe>
    //       ))}
    // </div>}}
  };

  return (
    <div>
      <div className="card">
        <div className="card-image center">
          <img
          style={{height:''}}
            className="responsive-img parallax"
            alt="backdrop"
            
            src={item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : 'https://wallpaperaccess.com/full/2903163.jpg'
            
        }
          />
          <span className="card-title">
            <h1 className="truncate">{item.title}</h1>
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
              <h5>Release Date: {item.release_date}</h5>
            </div>
            {item.homepage ? (
              <div className="collection-header">
                <h5>Homepage: {item.homepage}</h5>
              </div>
            ) : (
              <div className="collection-header">
                <h5>Homepage: ...</h5>
              </div>
            )}
            {item.tagline ? (
              <div className="collection-header">
                <h5>Tagline: {item.tagline}</h5>
              </div>
            ) : (
              <div className="collection-header">
                <h5>Tagline: ...</h5>
              </div>
            )}

            <div className="collection-header">
              <h5>Overview: {item.overview}</h5>
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
                      allowfullscreen
                      src={`https://www.youtube.com/embed/${video.key}`}
                    ></iframe>
                  </div>
                ))
              ) : (
                <p>Trailer is not available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
