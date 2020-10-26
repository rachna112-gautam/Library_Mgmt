import React, { Component } from "react";

class AddUser extends Component {
  render() {
    return (
      <div className="container-fluid bg-1">
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <div className="row jumbotron reg pt-0">
                  <div
                    class="col-lg-12 login-title mb-3"
                    style={{
                      paddingBottom: "1rem",
                      fontSize: "3rem",
                      borderBottom: ".2rem solid gray",
                    }}
                  >
                    Add User
                  </div>
                  <div className="col-sm-6 form-group ">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      id="fname"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      id="lname"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="userid">User ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="userid"
                      id="userid"
                      placeholder="Enter User ID"
                    />
                  </div>

                  <div className="col-sm-6 form-group">
                    <label htmlFor="dob">Date Of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      className="form-control"
                      id="dob"
                      placeholder="Enter Date Of Birth"
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
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="address"
                      className="form-control"
                      name="Locality"
                      id="address"
                      placeholder="Locality/House/Street no."
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="address"
                      className="form-control"
                      name="Locality"
                      id="city"
                      placeholder="City"
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="address"
                      className="form-control"
                      name="Locality"
                      id="state"
                      placeholder="State"
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="role">Role</label>
                    <select class="custom-select mr-sm-2" id="role">
                      <option selected>Choose Role</option>
                      <option value="1">Admin</option>
                      <option value="2">User</option>
                    </select>
                  </div>
                  <div className="col-sm-12 form-group mb-0 ">
                    <a
                      className="btn btn-primary btn-lg float-right mt-3"
                      type="submit"
                      href="#adduser"
                    >
                      Add user
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddUser;
