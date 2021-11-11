import React from "react";
import { useParams } from "react-router";

const MainPage = (props) => {
  const fontStyle = {
    fontFamily: 'Bebas Neue',
    fontSize: '5rem'
  }
  return (
    <div>
      
      <div className='container pt-4 pb-4'>
        <div className="row">
          <div className="col s12 m6">
            <div className="icon-block">
              <h2 className="center brown-text">
                {/* <i className="material-icons">group</i> */}
              </h2>
              <h1 className="center" style={fontStyle}>Search</h1>

              <p className="light center text-uppercase">
                Search any thing you want, we will finds movies for you to watch!
              </p>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="icon-block">
              <h2 className="center brown-text">
                {/* <i className="material-icons">group</i> */}
              </h2>
              <h1 className="center" style={fontStyle}>Get Information</h1>

              <p className="light center text-uppercase">
                Get all information of the movies that you wanna know
              </p>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="icon-block">
              <h2 className="center brown-text">
                {/* <i className="material-icons">group</i> */}
              </h2>
              <h1 className="center" style={fontStyle}>Watch Trailer</h1>

              <p className="light center text-uppercase">
                You can watch all the trailer of the movies
              </p>
            </div>
          </div>
        </div>
      </div>
     
      <div
        className="parallax-container valign-wrapper"
        style={{ height: "70vh" }}
      >
        <div className="card-image parallax">
          <img src={props.urlKey[0]} alt="" />
        </div>
      </div>

<div className={props.isHide ? `hide` : `container`}>
        <div className="container center-align d-flex flex-flow align-items-center "   style={{height:'50vh'}}>
          <div className="row">
            <div className="col s12 ">
             <h1 className='text-uppercase' style={fontStyle}>"Today is hard, tomorrow will be worse but the day after tomorrow will be sunshine."
                </h1> 
          <p className="h1 ">– Jack Ma</p>

            </div>
          </div>


        </div>
      </div>
      <div
        className="parallax-container valign-wrapper"
        style={{ height: "70vh" }}
      >
        <div className="card-image parallax">
          <img src={props.urlKey[7]} alt="" />
        </div>
      </div>

      
    </div>
  );
};

export default MainPage;
