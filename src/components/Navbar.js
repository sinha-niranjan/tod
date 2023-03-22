import React from "react";

function navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Todo
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Task Manager
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <button type="button " className="btn btn-danger nav-item mx-2">
              Login
            </button>
            <button type="button " className="btn btn-danger nav-item mx-2">
              Signup
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
