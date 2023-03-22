import React from "react";

function Signup() {
  return (
    <div>
      <main>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-4 offset-sd-3 offset-lg-4">
                <h1 class="mb-3 text-center">Todo Signup </h1>
                <form class="mb-3">
                  <div class="form-group">
                    <label for="UserName">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your user name"
                      id="Name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="PhoneNumber">Phone number :</label>
                    <input
                      type="PhoneNumber tel"
                      class="form-control"
                      placeholder="+91"
                      id="phoneNumber"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="example@gmail.com"
                      id="email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Enter Password:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Renter Password :</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-primary btn-block my-2">
                    Signup
                  </button>
                </form>
                <div class="text-center">
                  <p>or..</p>
                  <a href="/Login" class="btn btn-success">
                    Login
                  </a>
                  <p class="small">
                    <a href="create.html">
                      Have you forgotten your account details?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
