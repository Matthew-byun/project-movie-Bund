import React from "react";
import { useParams } from "react-router";

const MainPage = (props) => {
    
  return (
    <div>
      <div className={props.isHide ? `hide` : `container`}>
        <div className="row">
          <div className="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text">
                <i class="material-icons">group</i>
              </h2>
              <h5 class="center">User Experience Focused</h5>

              <p class="light">
                By utilizing elements and principles of Material Design, we were
                able to create a framework that incorporates components and
                animations that provide more feedback to users. Additionally, a
                single underlying responsive system across all platforms allow
                for a more unified user experience.
              </p>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text">
                <i class="material-icons">group</i>
              </h2>
              <h5 class="center">User Experience Focused</h5>

              <p class="light">
                By utilizing elements and principles of Material Design, we were
                able to create a framework that incorporates components and
                animations that provide more feedback to users. Additionally, a
                single underlying responsive system across all platforms allow
                for a more unified user experience.
              </p>
            </div>
          </div>
          <div className="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text">
                <i class="material-icons">group</i>
              </h2>
              <h5 class="center">User Experience Focused</h5>

              <p class="light">
                By utilizing elements and principles of Material Design, we were
                able to create a framework that incorporates components and
                animations that provide more feedback to users. Additionally, a
                single underlying responsive system across all platforms allow
                for a more unified user experience.
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
          <img src={props.urlKey} alt="" />
        </div>
      </div>

      <div class={props.isHide ? `hide` : `container`}>
        <div class="section">
          <div class="row">
            <div class="col s12 center">
              <h3>
                <i class="mdi-content-send brown-text"></i>
              </h3>
              <h4>About Me</h4>
              <p class="center-align light">Phan Nguyen Hoai Trung</p>
              <p class="center-align light">076.3456.667</p>
              <p class="center-align light">castlebeex@gmail.com</p>
              <p class="center-align light">
                Overview about
                meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
