import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">ADMIN LOGIN</div>

              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    <label for="user-id">User ID</label>
                    <input
                      type="text"
                      name="userid"
                      class="form-control"
                      id="user-id"
                      placeholder="Enter your user ID"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="pass">Password</label>
                    <input
                      type="Password"
                      name="password"
                      class="form-control"
                      id="pass"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div class="col-sm-12 form-group mb-0 text-center">
                    <a
                      class="btn btn-primary btn-lg  mt-3 mb-3"
                      type="submit"
                      href="/librarian"
                    >
                      Login
                    </a>
                  </div>
                </form>
              </div>
              <div class="col-lg-3 col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
