import React from "react";
import '../index.css'

const SearchArea = (props) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s6">
          <form action="#" onSubmit={props.handleSubmit}>
            <div className="top-bar_searchbtn">
              <input className='form-control form-control-lg inputField' placeholder="Typing Something" type="Text" style={{borderRadius: '0.8rem'}} onChange={props.handleChange}/>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchArea;
