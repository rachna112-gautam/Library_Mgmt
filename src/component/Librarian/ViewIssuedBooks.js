import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

class ViewIssuedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0,
      loading: false,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        orgtableData: res.data,
        tableData: slice,
      });
    });
  }

  loadMoreData() {
    const data = this.state.orgtableData;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage + this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

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
      <div className="container-fluid bg-3">
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
                  Send Email
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
              <h2 className="table-heading display-4  ">Issued Books</h2>
            </div>
            <div className="col-sm-12">
              <div className="table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Book No.</th>
                      <th scope="col">Book Title</th>
                      <th scope="col">User ID</th>
                      <th scope="col">Username</th>
                      <th scope="col">Issued Date</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>4303893</td>
                      <td>Data structure and analysis</td>
                      <td>2001</td>
                      <td>Rachna</td>
                      <td>21-10-20</td>
                      <td>2-10-20</td>
                      <td>
                        <button
                          type="button"
                          class="btn action-btn"
                          data-toggle="modal"
                          data-target="#reminderModal"
                        >
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>4309323</td>
                      <td>Data structure and analysis</td>
                      <td>2006</td>
                      <td>Rachna</td>
                      <td>21-10-20</td>
                      <td>2-10-20</td>
                      <td>
                        <button
                          type="button"
                          class="btn action-btn"
                          data-toggle="modal"
                          data-target="#reminderModal"
                        >
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4323493</td>
                      <td>Data structure and analysis</td>
                      <td>2902</td>
                      <td>Rachna</td>
                      <td>21-10-20</td>
                      <td>2-10-20</td>
                      <td>
                        <button
                          type="button"
                          class="btn action-btn"
                          data-toggle="modal"
                          data-target="#reminderModal"
                        >
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>4214433</td>
                      <td>Data structure and analysis</td>
                      <td>2090</td>
                      <td>Rachna</td>
                      <td>21-10-20</td>
                      <td>2-10-20</td>
                      <td>
                        <button
                          type="button"
                          class="btn action-btn"
                          data-toggle="modal"
                          data-target="#reminderModal"
                        >
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ReactPaginate
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
              ></ReactPaginate>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewIssuedBooks;
