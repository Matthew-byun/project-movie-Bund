import React from "react";

const ImageUrl = (props) => {
  console.log(props);
  
  return (
    <div className="parallax-container valign-wrapper" style={{ height: props.except ? '0' : '70vh' }}>
      <div className="card-image parallax">

        <img
          src={props.urlKey}
          style={{ width: "1650px", height: "500" }}
          alt=""
          className={props.title ? `opacity-75` : ''}
        />
      </div>
      <div className='col'><h1 className={`center-align ${props.color} display-1 strong pb-4`} style={{fontSize:'10rem',fontWeight:'500'}}>{props.title}</h1></div>

    </div>
    
  );
};

export default ImageUrl;
