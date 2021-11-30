import React, { Component } from "react";
import SearchArea from "../components/search";

class Homepage extends Component {



  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      M.Parallax.init(elems, {});
    });
  }
  
  

  
  render() {
    const fontStyle = {
      fontFamily: 'Bebas Neue',
      fontSize: '3rem'
    }
    return (
      <div>
        <div className="section white s12">
          <div className="container s12">
            <h2 className="header center" style={fontStyle}>Welcome</h2>
            <div className='nav-wrapper center'>
            <div className="col">
            <ul className="top-bar_nav">
              <li>
                <p style={{ color: "dimgray" }}>
                  Millions of movies, TV shows and people to discover.
                </p>
                
                
                      <button type="button" class="btn btn-warning" 
                      onClick={this.props.toggleShow}
                      >Explore now.</button>
                {this.props.isShow ? <SearchArea currentSearch={this.props.currentSearch} handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} /> : null }
                
                
                  
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
