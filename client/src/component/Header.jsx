import React from "react";
// import vistaHome from "./assets/vistaHome.png";
import vistaHome from "./assets/vistaHome.png";


const Header = () => {
  return (
    <nav className="navbar-nav navbar-light bg-primary mb-4 p-0" >
      <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <img src={vistaHome} alt="familyPic" className="mr-2" width="100" height="100"/>
            <h3>Mountain House Management App</h3>
          </div>
      </div>
    </nav>
  );
};

export default Header;
