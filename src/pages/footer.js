import React from "react";

const Footer = () => {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
 
  return (
    <div>
      <footer className="page-footer teal">
        <div className="container">
          <div className="row d-flex flex-grow-1">
            <div className="col">
              <h5 className="white-text">MovieDB Project</h5>
              <p className="grey-text text-lighten-4">
                You can search information of any movie that you want!
              </p>
            </div>
            <div className="col d-flex flex-row justify-content-end">
              <div className=''>
                <h5 className="white-text">Contact Me</h5>
                <ul>
                  <li className='valign-wrapper'>
                    <i className="material-icons">assignment_ind</i>
                    <a className="grey-text text-lighten-3 p-2" href="https://www.facebook.com/getturban/">
                      Phan Nguyen Hoai Trung
                    </a>
                  </li>
                  <li className='valign-wrapper'>
                    <i className="material-icons">mail</i>
                    <a className="grey-text text-lighten-3 p-2" href="#!">
                      castlebeex@gmail.com
                    </a>
                  </li>
                  <li className='valign-wrapper'>
                    <i className="material-icons">call</i>
                    <a className="grey-text text-lighten-3 center-align p-2" href="#!">
                      076.3456.667
                    </a>
                  </li>
                  
                  
                  
                </ul>
              </div>
              <div className='right-align mx-auto'>
              <a href='/'>
                <h5 className="white-text">Home</h5>
              </a>
              </div>
              <div className='right-align'>
              
                <i className="material-icons" onClick={topFunction}>arrow_upward</i>
              
              </div>
              
      
            </div>
            
           
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2021 Copyright
            <a className="grey-text text-lighten-4 right" href="https://www.facebook.com/getturban/">
              Trung Phan (BunDev)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
