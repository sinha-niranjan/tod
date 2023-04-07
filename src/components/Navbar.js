import React from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";

function navbar(props) {
  return (
    
      <div>
        <nav
          className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}
        >
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Todo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/taskManager" className="nav-link">
                    Task Manager
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
              </ul>
              <Link to={props.login} className="nav-link">
                <button type="button " className="btn btn-danger nav-item m-2">
                  Login
                </button>
              </Link>
              <Link to="/signup" className="nav-link">
                <button type="button " className="btn btn-danger nav-item m-2">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    
  );
}

export default navbar;
