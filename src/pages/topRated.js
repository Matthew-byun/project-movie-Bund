
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopRated() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(`
        https://api.themoviedb.org/3/movie/top_rated?api_key=23bab7b92b53fc1a9085f082ab067e31&language=en-US&page=1`);
    const items = await data.json();
    console.log(items);
    setItems(items.results);
  };

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col s3" style={{ height: "65vh" }}>
            <div
              className="card card-panel hoverable"
              style={{ height: "58vh" }}
            >
              <div className="card-image center-align">
                <Link to={`/toprated/${item.id}`}>
                  <img
                    key={item.id}
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt=""
                  />
                </Link>
              </div>
              <div className="card-content">
                <span className="card-title truncate">{item.original_title}</span>
                <p className="truncate">{item.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRated;
