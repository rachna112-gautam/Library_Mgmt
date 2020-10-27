import React, { Component } from "react";
// import axios from "axios";
// import ReactPaginate from "react-paginate";

class RequestedBook extends Component {
  renderTableData() {
    return this.state.tableData.map((user, index) => {
      const { id, name, username, email, address, phone } = user; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>{address.city}</td>
          <td>{phone}</td>
          <td>{id}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid bg-1">
        <div
          class="modal fade"
          id="reminderModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Request status
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      Recipient:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      placeholder="Enter recipient mailing address"
                    />
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Message:
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="table-heading display-4  ">Requested Books</h2>
            </div>
            <div className="col-sm-12">
              <div className="table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Book Name</th>
                      <th scope="col">Book Desc</th>
                      <th scope="col">Requested By</th>
                      <th scope="col">Requested On</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>The Fault in our stars</td>
                      <td>
                        Despite the tumor-shrinking medical miracle that has
                        bought her a few years, Hazel has never been anything
                        but terminal, her final chapter inscribed upon
                        diagnosis. But when a gorgeous plot twist named Augustus
                        Waters suddenly appears at Cancer Kid Support Group,
                        Hazel’s story is about to be completely rewritten.
                      </td>
                      <td>2001</td>
                      <td>21-10-20</td>

                      <td>
                        <button
                          type="button"
                          class="btn action-btn"
                          data-toggle="modal"
                          data-target="#reminderModal"
                        >
                          <i class="fa fa-reply" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              ></ReactPaginate> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RequestedBook;
