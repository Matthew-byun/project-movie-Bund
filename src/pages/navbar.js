import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper teal lighten-2">
            <div className="container">
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>

              <a href="/" className="brand-logo">
                <i className="material-icons pt-1" style={{fontSize:'3rem'}}>hd</i>
                <span className='h1'>Project</span>

              </a>
              
              <a
                href="#"
                className="sidenav-trigger"
                data-target="navbarmobile-links"
              ></a>
              <ul className="right hide-on-med-and-down">
                
                <li>
                  <Link to="/trending">
                    <span className='h5'>Trending</span>
                    </Link>
                </li>
                <li> 
                  <Link to="/popular"><span className='h5'>Popular</span></Link>
                </li>
                <li>
                  <Link to="/toprated"><span className='h5'>Top Rated</span></Link>
                </li>
                <li>
                  <Link to="/upcoming"><span className='h5'>Up Coming</span></Link>
                </li>
                <li>
                  <Link to="/nowplaying"><span className='h5'>Now Playing</span></Link>
                </li>
                {/* <li>
                <Link to="/signin">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
        <ul id="slide-out" className="sidenav">
          <li>
            <a className="subheader">Menu</a>
          </li>
          <li>
                  <a href="/">Home</a>
                </li>
          <li className="waves-effect" style={{display:"block"}}>
            <Link to="/trending">Trending</Link>
          </li>
          <li className="waves-effect" style={{display:"block"}}>
          <Link to="/popular">Popular</Link>
          </li>
          <li className="waves-effect" style={{display:"block"}}>
          <Link to="/toprated">Top Rated</Link>
              
          </li>
          <li className="waves-effect" style={{display:"block"}}>
          <Link to="/upcoming">Up Coming</Link>
              
          </li>
          <li className="waves-effect" style={{display:"block"}}>
          <Link to="/nowplaying">Now Playing</Link>
              
          </li>
         
          
        </ul>
      
      </div>
    );
  }
}
export default Navbar;
