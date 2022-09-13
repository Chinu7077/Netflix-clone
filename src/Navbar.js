import React, { useEffect, useState } from 'react';
import './Navbar.css';


function Navbar() {

    const [show, handleShow] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () =>{
          if(window.scrollY > 100){
              handleShow(true);
          }else handleShow(false);
      });
      return () => {
          window.removeEventListener("scroll");
      }
    
  }, [])

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            
            <img
            className="nav__logo"
             src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="NETFLIX" />
            <img
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt="AVATAR"
            />
            
        </div>
    )
}

export default Navbar;