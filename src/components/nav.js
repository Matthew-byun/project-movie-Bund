import React, { useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const navStyle = {
    color: "black",
    textDecoration: "none",
  };
  
  useEffect(()=>{
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {});
    });
  })


  return (
    <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper teal lighten-2">
            <div className="container">
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>

              <a href="#" className="brand-logo">
                Project
              </a>
              <a
                href="#"
                className="sidenav-trigger"
                data-target="navbarmobile-links"
              ></a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <Link to="/trending">Trending</Link>
                </li>
                <li> 
                  <Link to="/polupar">Popular</Link>
                </li>
                <li>
                  <Link to="/toprated">Top Rated</Link>
                </li>
                <li>
                  <Link to="/upcoming">Up Coming</Link>
                </li>
                <li>
                  <Link to="/nowplaying">Now Playing</Link>
                </li>
                <li>
                <Link to="/signin">Sign in</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul id="slide-out" className="sidenav">
          <li>
            <a className="subheader">Menu</a>
          </li>
          <li className="waves-effect" style={{display:"block"}}>
            <Link to="/trending">Trending</Link>
          </li>
          <li className="waves-effect" style={{display:"block"}}>
          <Link to="/polupar">Popular</Link>
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
          <li className="waves-effect" style={{display:"block"}}>
            <Link to="/signin">Sign in</Link>
          </li>
          <li className="waves-effect" style={{display:"block"}}>
            <Link to="/signup">Sign Up</Link>
          </li>
          
        </ul>
      
      </div>
    // <section className="top-bar">
    //   <div className="container">
    //     <div className="row justify-content-between">
    //       <nav className="navbar">
    //         <div className="col-auto">
    //           <div className="top-bar_logo">
    //             <Link
    //               to="/"
    //               style={navStyle}
    //               onClick={() => {
    //                 window.location.replace("http://localhost:3000/");
    //               }}
    //             >
    //               <h1
    //                 className="d-inline"
    //               >
    //                 Movie
    //               </h1>
    //               <p
    //                 className="d-inline"
    //                 style={{ fontSize: "60px", color: "orange" }}
    //               >
    //                 DB
    //               </p>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="col-auto">
    //           <nav className="nav">
    //             <ul className="nav__list top-bar_list">
             
    //               <li className="nav__listitem">
    //                 <p style={navStyle}>Live TV</p>
    //                 <ul className="nav__listitemdrop">
    //                   <li>Free Live TV</li>
    //                   <li>Premium Live TV</li>
    //                 </ul>
    //               </li>
    //               <li className="nav__listitem">
    //                 <p style={{ color: "black" }}>Your Media</p>
    //                 <ul className="nav__listitemdrop">
    //                   <li>Movies &amp; TV</li>
    //                   <li>Music</li>
    //                   <li>Photos and Videos</li>
    //                   <li>Games</li>
    //                   <li>Download</li>
    //                 </ul>
    //               </li>
    //               <li className="nav__listitem">
    //                 <p style={{ color: "black" }}>Movies</p>
    //                 <ul className="nav__listitemdrop">
    //                   <Link to='/popular' style={navStyle}>
    //                     <li onClick={props.getPopular}>Popular</li>
    //                   </Link>
    //                   <Link to='/toprated'style={navStyle}>
    //                     <li
    //                       onClick={props.getTopRated}>
    //                       Top Rated
    //                     </li>
    //                   </Link>
    //                   <Link to='/upcoming'style={navStyle}>
    //                     <li
    //                       onClick={props.getUpComing}>
    //                       Up Coming
    //                     </li>
    //                   </Link>
    //                   <Link to='/nowplaying' style={navStyle}>
    //                     <li onClick={props.getNowPlaying}>Now playing</li>
    //                   </Link>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //         <div className="col-auto">
    //           <ul className="top-bar_links">
    //             <Link to="/signin" style={navStyle}>
    //               <span className='p-3 h5'>Sign In</span>
    //             </Link>
    //             <Link to="/signup">
    //               <button type="button" className="btn btn-warning">
    //                 <span style={{ fontSize: "20px", fontWeight: "bold" }}>
    //                   Sign Up
    //                 </span>
    //               </button>
    //             </Link>
    //           </ul>
    //         </div>
    //       </nav>
    //     </div>
        
    //   </div>
    // </section>
  );
};

export default Nav;
