import React, { Component } from "react";
import "./Landpage.css";
class LandingPage extends Component {
  render() {
    return (
      <div className="container-fluid bg">
        <div class="container pt-1 ">
          <div class="row ">
            <div class="col-lg-12 text-center">
              <h3 class="bg-pink">Explore the world of books</h3>
            </div>

            <div class="col-lg-12 text-center mb-3">
              <div className="container">
                <div class="card-group">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src="images/library-bg.png"
                      alt="admin"
                      width="400"
                      style={{ backgroundColor: "#fa7f72" }}
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
                      src="images/library-bg.png"
                      alt="registereduser"
                      width="400"
                      style={{ backgroundColor: "#389393" }}
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
                      src="images/library-bg.png"
                      alt="newuser"
                      width="400"
                      style={{ backgroundColor: " #f5a25d" }}
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
