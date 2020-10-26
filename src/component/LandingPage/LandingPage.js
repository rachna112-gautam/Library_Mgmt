import React, { Component } from "react";
import "./Landpage.css";
class LandingPage extends Component {
  render() {
    return (
      <div className="container-fluid bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h3 class="bg-pink">Explore the world of books</h3>
            </div>

            <div class="col-lg-12 text-center mb-3">
              <div className="container">
                <div class="card-group">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src="https://dummyimage.com/400x200/f5a25d/ffffff&text= "
                      alt="admin"
                      width="400"
                    />
                    <div class="card-body">
                      <h4 class="card-title card-h4">Admin Login</h4>
                    </div>
                    <div class="card-footer text-center">
                      {" "}
                      <a
                        class="btn btn-primary lg"
                        href="/admin-login"
                        role="button"
                        style={{ fontWeight: "bold" }}
                      >
                        Go To Admin Panel
                      </a>
                    </div>
                  </div>

                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src="https://dummyimage.com/400x200/fa7f72/ffffff&text="
                      alt="registereduser"
                      width="400"
                    />
                    <div class="card-body">
                      <h4 class="card-title card-h4">Registered User Login</h4>
                    </div>
                    <div class="card-footer text-center">
                      {" "}
                      <a
                        class="btn btn-primary lg"
                        href="/user-login"
                        role="button"
                        style={{ fontWeight: "bold" }}
                      >
                        Login
                      </a>
                    </div>
                  </div>

                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src="https://dummyimage.com/400x200/389393/ffffff&text="
                      alt="newuser"
                      width="400"
                    />
                    <div class="card-body">
                      <h4 class="card-title card-h4">New User</h4>
                    </div>
                    <div class="card-footer text-center">
                      <a
                        class="btn btn-primary lg"
                        href="/register"
                        role="button"
                        style={{ fontWeight: "bold" }}
                      >
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12 text-center">
              <h3 class="bg-pink">Let the book talk</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
