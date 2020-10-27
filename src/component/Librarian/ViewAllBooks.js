import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

class ViewAllBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
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
      const { id, name, username, email } = user; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>2</td>
          <td>1</td>
          <td>
            <div
              class="btn-group-vertical btn-group-sm"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                class="btn btn-secondary"
                data-toggle="modal"
                data-target=".editbook"
              >
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                class="btn btn-secondary action-btn"
                data-toggle="modal"
                data-target=".delete-book"
              >
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid bg-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="table-heading display-4  "> All Books</h2>
            </div>
            <div className="col-sm-12">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search book"
                />
                <div class="input-group-append">
                  <button class="btn btn-secondary" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="table-responsive">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">ISBN</th>
                      <th scope="col">Book Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Borrowed</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableData()}</tbody>
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

        {/* EditBook */}

        <div
          class="modal fade editbook"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Book
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
              <div class="modal-body"></div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DeleteBook */}
        <div
          class="modal fade delete-book"
          tabindex="-1"
          role="dialog"
          aria-labelledby="DeleteBook"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-body">
                Are you sure you want to delete this book?
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="btn btn-primary">
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewAllBooks;
