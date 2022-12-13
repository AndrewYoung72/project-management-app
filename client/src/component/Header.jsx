import React from "react";
// import graphlogo from "./assets/graphlogo.png"


const Header = () => {
  return (
    <nav className="navbar-brand bg-light mb-4 p-0">
      <div className="container">
          <div className="d-flex justify-content-center">
            {/* <img src={graphlogo} alt="logo" className="mr-2"/> */}
            <h3>Project Management App</h3>
          </div>
      </div>
    </nav>
  );
};

export default Header;
