import React, { useState } from "react";
let UseState = useState;
function login() {
  const [email, setEmail] = UseState("");
  const [pass, setPass] = UseState("");
  const [conPass, setConPass] = UseState("");
  function getFormData(e) {
    console.log(email, pass, conPass);

    e.preventDefault();
    if (pass === conPass) {
      setEmail("");
      setPass("");
      setConPass("");
    }
    else{
      alert("Please renter correct password !")
    }
  }
  return (
    <div>
      <main>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-4 offset-sd-3 offset-lg-4">
                <h1 className="mb-3 text-center">Todo log in</h1>
                <form className="mb-3" onSubmit={getFormData}>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@email.com"
                      id="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Enter Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => {
                        setPass(e.target.value);
                      }}
                      value={pass}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Renter Password :</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm_password"
                      onChange={(e) => {
                        setConPass(e.target.value);
                      }}
                      value={conPass}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
                <div className="text-center">
                  <p>or..</p>
                  <a href="create.html" className="btn btn-success">
                    Create account
                  </a>
                  <p className="small">
                    <a href="create.html">
                      Have you forgotten your account details?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form"></div>
      </main>
    </div>
  );
}

export default login;
