import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      success: false,
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }
  componentDidMount() {
    this.firstName.focus();
  }

  validateInput() {
    const fname = this.firstName.value;
    const lname = this.lastName.value;
    const email = this.email.value;
    const add1 = this.add1.value;
    const add2 = this.add2.value;
    const phone = this.phone.value;
    const dob = this.dob.value;
    const password = this.password.value;
    const verifyPass = this.verifyPass.value;
    const userId = this.userid.value;
    if (fname === "") {
      this.setState({
        msg: "First Name field can't be empty",
      });
    } else if (lname === "") {
      this.setState({
        msg: "Last Name field can't be empty",
      });
    } else if (email === "") {
      this.setState({
        msg: "Email field can't be empty",
      });
    } else if (add1 === "" || add2 === "") {
      this.setState({
        msg: "Address field can't be empty",
      });
    } else if (phone === "") {
      this.setState({
        msg: "Phone field can't be empty",
      });
    } else if (dob === "") {
      this.setState({
        msg: "Date Of Birth field can't be empty",
      });
    } else if (phone === "") {
      this.setState({
        msg: "Phone field can't be empty",
      });
    } else if (userId === "") {
      this.setState({
        msg: "userId field can't be empty",
      });
    } else if (password !== verifyPass) {
      this.setState({
        msg: "confirm password doesnot match with the password",
      });
    } else {
      this.setState({
        success: true,
      });
    }
  }

  onKeyDown(target, e) {
    if (e.keyCode === 13) {
      switch (target) {
        case "firstName":
          this.middleName.focus();
          break;
        case "middleName":
          this.lastName.focus();
          break;
        case "lastName":
          this.email.focus();
          break;
        case "email":
          this.dob.focus();
          break;
        case "dob":
          this.add1.focus();
          break;
        case "add1":
          this.add2.focus();
          break;
        case "add2":
          this.phone.focus();
          break;
        case "phone":
          this.userid.focus();
          break;
        case "userid":
          this.password.focus();
          break;
        case "password":
          this.verifyPass.focus();
          break;
        case "verifyPass":
          this.submit.focus();
          break;
        case "submit":
          this.setState({ msg: "", success: false });
          this.validateInput();
          break;
        default:
          this.userid.focus();
      }
    }
  }

  render() {
    return (
      <div className="register">
        <div className="container ">
          {this.state.msg ? (
            <div class="alert alert-danger alert-dismissible">
              <button type="button" class="close" data-dismiss="alert">
                &times;
              </button>
              <strong>Error!</strong> {this.state.msg}.
            </div>
          ) : null}
          {this.state.success ? (
            <div class="alert alert-success alert-dismissible">
              <button type="button" class="close" data-dismiss="alert">
                &times;
              </button>
              <strong>Success!</strong> Registered Successfully :).
            </div>
          ) : null}

          <form>
            <div className="row jumbotron reg">
              <div
                class="col-lg-12 login-title"
                style={{ paddingBottom: "1.5rem", fontSize: "3rem" }}
              >
                REGISTRATION FORM
              </div>
              <div className="col-sm-4 form-group">
                <label htmlFor="name-f">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  id="name-f"
                  placeholder="Enter your first name."
                  ref={(input) => {
                    this.firstName = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "firstName")}
                />
              </div>
              <div className="col-sm-4 form-group">
                <label htmlFor="name-l">Middle name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  id="name-l"
                  placeholder="Enter your middle name."
                  ref={(input) => {
                    this.middleName = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "middleName")}
                />
              </div>
              <div className="col-sm-4 form-group">
                <label htmlFor="name-l">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  id="name-l"
                  placeholder="Enter your last name."
                  ref={(input) => {
                    this.lastName = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "lastName")}
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter your email."
                  ref={(input) => {
                    this.email = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "email")}
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="Date">Date Of Birth</label>
                <input
                  type="Date"
                  name="dob"
                  className="form-control"
                  id="Date"
                  placeholder=""
                  ref={(input) => {
                    this.dob = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "dob")}
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="address-1">Address Line-1</label>
                <input
                  type="address"
                  className="form-control"
                  name="Locality"
                  id="address-1"
                  placeholder="Locality/House/Street no."
                  ref={(input) => {
                    this.add1 = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "add1")}
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="address-2">Address Line-2</label>
                <input
                  type="address"
                  className="form-control"
                  name="address"
                  id="address-2"
                  placeholder="Village/City Name."
                  ref={(input) => {
                    this.add2 = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "add2")}
                />
              </div>

              <div className="col-sm-6 form-group">
                <label htmlFor="tel">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="tel"
                  placeholder="Enter Your Contact Number."
                  ref={(input) => {
                    this.phone = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "phone")}
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="user-id">User ID</label>
                <input
                  type="text"
                  name="userid"
                  className="form-control"
                  id="user-id"
                  placeholder="Enter a user ID."
                  ref={(input) => {
                    this.userid = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "userid")}
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="pass">Password</label>
                <input
                  type="Password"
                  name="password"
                  className="form-control"
                  id="pass"
                  placeholder="Enter your password."
                  ref={(input) => {
                    this.password = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "password")}
                />
                <small className="form-text text-muted" id="passwordHelpBlock">
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </small>
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="pass2">Confirm Password</label>
                <input
                  type="Password"
                  name="cnf-password"
                  className="form-control"
                  id="pass2"
                  placeholder="Re-enter your password."
                  ref={(input) => {
                    this.verifyPass = input;
                  }}
                  onKeyDown={this.onKeyDown.bind(this, "verifyPass")}
                />
              </div>
              {/* <div className="col-sm-12">
                <input
                  type="checkbox"
                  className="form-check d-inline"
                  id="chb"
                />
                <label htmlFor="chb" className="form-check-label">
                  &nbsp;I accept all terms and conditions.
                </label>
              </div> */}

              <div className="col-sm-12 form-group mb-0 text-center">
                <a
                  className="btn btn-success btn-lg  mt-3"
                  type="submit"
                  ref={(input) => {
                    this.submit = input;
                  }}
                  href="#submit"
                  onKeyDown={this.onKeyDown.bind(this, "submit")}
                >
                  Register
                </a>
              </div>
              <div className="col-sm-12 form-group mb-0 mt-2 text-center">
                <p>
                  Already have an account? <a href="/user-login">Login</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
