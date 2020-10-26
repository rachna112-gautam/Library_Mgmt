import React, { Component } from "react";

class IssueBook extends Component {
  render() {
    return (
      <div className="container-fluid bg-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <img
                class="card-img-top img-fluid"
                src="https://dummyimage.com/400x200/389393/ffffff&text="
                alt="Add book cover"
                width="400"
              />
              <div class="input-group mt-2">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div className="col">
              <form>
                <div className="row jumbotron reg pt-0">
                  <div
                    class="col-lg-12 login-title"
                    style={{
                      paddingBottom: "1rem",
                      fontSize: "3rem",
                      borderBottom: ".2rem solid gray",
                    }}
                  >
                    Issue Book
                  </div>
                  <div className="col-sm-12 form-group">
                    <label htmlFor="bookno">Book No.</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bookno"
                      id="bookno"
                      placeholder="Enter Book No."
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label htmlFor="tbook">Book Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="tbook"
                      id="tbook"
                      placeholder="Enter tbook name."
                    />
                  </div>
                  <div className="col-sm-12 form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder="Enter Username"
                    />
                  </div>
                  <div className="col-sm-12 form-group">
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
                    <label htmlFor="issued">Date Issued</label>
                    <input
                      type="date"
                      name="issued"
                      className="form-control"
                      id="issued"
                      placeholder="Enter Date issued"
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor="dueDate">Due Date</label>
                    <input
                      type="date"
                      name="dueDate"
                      className="form-control"
                      id="dueDate"
                      placeholder="Enter Date By When To Return"
                    />
                  </div>

                  <div className="col-sm-12 form-group mb-0 float-left">
                    <a
                      className="btn btn-primary btn-lg  mt-3"
                      type="submit"
                      href="#issuebook"
                    >
                      Issue Book
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
export default IssueBook;
