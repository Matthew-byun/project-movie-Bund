import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      M.Parallax.init(elems, {});
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        
        <div className="section white s12">
          <div className="container s12">
            <h2 className="header center">Welcome</h2>
            <div className='nav-wrapper center'>
            <div className="col">
            <ul className="top-bar_nav">
              <li>
                <p style={{ color: "dimgray" }}>
                  Millions of movies, TV shows and people to discover.
                </p>
                <Link to='search'>
                      <button type="button" class="btn btn-warning">Explore now.</button>
                </Link>
                
              </li>
              
            </ul>
          </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Homepage;
