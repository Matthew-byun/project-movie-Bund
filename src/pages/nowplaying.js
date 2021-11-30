
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function NowPlayingList() {
  useEffect(() => {
    fetchItems();
    // document.documentElement.scrollTop = 150;

  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(`
        https://api.themoviedb.org/3/movie/now_playing?api_key=23bab7b92b53fc1a9085f082ab067e31&language=en-US&page=1`);
    const items = await data.json();
    console.log(items);
    
    // localStorage.setItem('state', items.total_pages);

    setItems(items.results);
  };

  return (
        <div className='container'>
        <div className='row'>
        {items.map((item) => (
          <div className="col s3" style={{width:'30vh', height: "65vh" }}>
            <div
              className="card-panel hoverable"
              style={{ height: "58vh" }}
            >
              <div className="card-image center">
                <Link className='center' to={`/nowplaying/${item.id}`}>
                  <img
                    className="responsive-img"
                    style={{width: '30vh', height: '40vh'}}
                    key={item.id}
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt=""
                  />
                </Link>
              </div>
              <div className="card-content">
                <span className="card-title truncate h1 pt-4 center">{item.original_title}</span>
                <p className="truncate">{item.overview}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
  );
}

export default NowPlayingList;
