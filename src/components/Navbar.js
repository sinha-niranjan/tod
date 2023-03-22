import React from "react";

function navbar(props) {
  return (
    <div>
      <nav
        class={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Todo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Task Manager
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <button type="button " class="btn btn-danger nav-item mx-2">
              Login
            </button>
            <button type="button " class="btn btn-danger nav-item mx-2">
              Signup
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
