import React from "react";
import graphlogo from "./assets/graphlogo.png"


const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={graphlogo} alt="logo" className="mr-2"/>
            <div>Project Management App</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
