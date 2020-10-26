import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  componentDidMount() {
    this.userid.focus();
  }
  onKeyDown(target, e) {
    if (e.keyCode === 13) {
      switch (target) {
        case "userid":
          this.password.focus();
          break;
        case "password":
          this.submit.focus();
          break;
        case "submit":
          alert("Successfully Logged in!!");
          break;
        default:
          this.userid.focus();
      }
    }
  }
  render() {
    return (
      <div className="login">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">USER LOGIN</div>

              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    <label for="user-id">User ID</label>
                    <input
                      type="text"
                      name="userid"
                      class="form-control"
                      id="user-id"
                      placeholder="Enter a user ID"
                      ref={(input) => {
                        this.userid = input;
                      }}
                      required
                      onKeyDown={this.onKeyDown.bind(this, "userid")}
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
                      ref={(input) => {
                        this.password = input;
                      }}
                      onKeyDown={this.onKeyDown.bind(this, "password")}
                    />
                  </div>

                  <div class="col-sm-12 form-group mb-0 text-center">
                    <a
                      class="btn btn-primary btn-lg  mt-3 mb-3"
                      type="submit"
                      href="/profile"
                      ref={(input) => {
                        this.submit = input;
                      }}
                      onKeyDown={this.onKeyDown.bind(this, "submit")}
                    >
                      Login
                    </a>
                  </div>
                  <div className="col-sm-12 form-group mb-0 mt-2 text-center">
                    <p>
                      New User? <a href="/register">Register</a>
                    </p>
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
