import React from 'react'

function login() {
  return (
    <div>
      <main>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-4 offset-sd-3 offset-lg-4">
                <h1 class="mb-3 text-center">Todo log in</h1>
                <form class="mb-3">
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="example@email.com"
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
                  <button type="submit" class="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
                <div class="text-center">
                  <p>or..</p>
                  <a href="create.html" class="btn btn-success">
                    Create account
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
        <div class="form"></div>
      </main>
    </div>
  );
}

export default login
