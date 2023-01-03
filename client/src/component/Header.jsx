import React from "react";
import vistaView from "./assets/vistaView.png";
import vistaHome from "./assets/vistaHome.png";


const Header = () => {
  return (
    <nav className="navbar-nav navbar-light bg-primary mb-4 p-0" >
      <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <img src={vistaHome} alt="familyPic" className="img" width="100" height="100"/>
            <h3>Mountain House Project App</h3>
            <img src={vistaView} alt="familyPic" className="img" width="100" height="100"/>
          </div>
      </div>
    </nav>
  );
};

export default Header;
