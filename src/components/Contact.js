import React from "react";

function Contact() {
  return (
    <div>
      <main>
        <div class="container-fluid">
          <h1 class="mb-sm-4 text-center">Contact</h1>
          <hr />
          <div class="col-12 col-lg">
            <h4>Address:</h4>
            <address>
              <strong>Bihar, bhagalpur</strong>
              <br />
              bhagalpur college Hostel
              <br />
              bhagalpur, Bihar
              <br />
              <abbr title="Telephone">Telphone: </abbr>
              <a href="tel:+919721304421">+91-6202421430</a>
              <br />
              <abbr title="Mail">Mobile: </abbr>
              <a href="mailto:info@domain.com">info@domain.com</a>
            </address>

            <div class="col-12 col-lg-6 mb-3">
              <h4>Send us a message</h4>
              <form action="#">
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        class="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label for="name">Email</label>
                      <input
                        type="email"
                        id="email"
                        class="form-control"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label for="telephone">Telephone</label>
                      <input
                        type="tel"
                        id="telephone"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label for="select">Grade:</label>
                      <select
                        id="select"
                        class="form-control"
                        aira-describedby="select-helpBlock"
                        required
                      >
                        <option value="">- select here -</option>
                        <option value="Good">Good</option>
                        <option value="better">Better</option>
                        <option value="best">Best</option>
                      </select>
                      <small id="select-helpBlock" class="form-text">
                        Please select the Grade you want to give us.
                      </small>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="textarea">Message:</label>
                  <textarea
                    id="textarea"
                    class="form-control"
                    rows="5"
                    placeholder="Write your message here.."
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
                <button type="reset" class="btn btn-secondary">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
