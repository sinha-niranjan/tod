import React from "react";

function footer() {
  return (
    <div>
      <footer
        class="py-5 px-5 text-light"
        style={{
          backgroundImage: "linear-gradient(#22e3e7, #08042e)",
          color: "white",
          marginTop: "10vh",
        }}
      >
        <div class="container text-center">
          <div class="row ">
            <div class="col">
              <h5>Links</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="index.html" class="nav-link p-0 text-light ">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="contact.html" class="nav-link p-0 text-light">
                    Contact
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="term.html" class="nav-link p-0 text-light">
                    Term
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="about.html" class="nav-link p-0 text-light">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div class="col">
              <form>
                <h5>
                  <strong>Subscribe,</strong> for for manage your personal
                  works,professional works,shoppings,vacation,e.t.c
                </h5>

                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <a href="index.html">
                    <button class="btn btn-outline-primary" type="button">
                      Subscribe
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2023 Todo, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex my-2">
            <p></p>
            <a
              class="footer-link"
              href="https://www.facebook.com/profile.php?id=100022766837498"
              style={{ margin: "0 10px" }}
            >
              <i class="fa fa-brands fa-facebook"></i>
            </a>
            <a
              class="footer-link"
              href=" https://twitter.com/sinha_niranjan_"
              style={{ margin: "0 10px" }}
            >
              <i class="fa fa-brands fa-twitter"></i>
            </a>
            <a
              class="footer-link"
              href=" https://www.instagram.com/sinha_niranjankumar/"
              style={{ margin: "0 10px" }}
            >
              {" "}
              <i class="fa fa-brands fa-instagram"></i>
            </a>
            <a
              class="footer-link"
              href="https://www.linkedin.com/in/niranjan-kumar-015675238/"
              style={{ margin: "0 10px" }}
            >
              <i class="fa fa-brands fa-linkedin"></i>
            </a>
            <a
              class="footer-link "
              href=" https://mail.google.com/mail/u/0/#inbox"
              style={{ margin: "0 10px" }}
            >
              {" "}
              <i class="fa-solid fa-envelope"></i>
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default footer;
