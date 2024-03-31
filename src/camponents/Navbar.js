import React from "react";
/* react font wesome 
import {FontAwesomeIcon} from "@fontawesome/react-fontawesome";
import {faBars} from "@fontawesome/react-fibtawesome";*/

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">How Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Fish Trade</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
