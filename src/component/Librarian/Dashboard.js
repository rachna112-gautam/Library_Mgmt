import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Lib.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
      loading: false,
      books: [
        { id: 1001, name: "Morris", avb: true },
        { id: 1002, name: "DSA", age: 19, avb: true },
        { id: 1003, name: "Physics", age: 16, avb: true },
        { id: 1004, name: "Maths", age: 25, avb: false },
        { id: 11201, name: "Morris", avb: true },
        { id: 1102, name: "DSA", age: 19, avb: false },
        { id: 1033, name: "Physics", age: 16, avb: true },
        { id: 1204, name: "Maths", age: 25, avb: false },
      ],
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getData();
  }

  getData() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
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
    return this.state.books.map((book, index) => {
      const { id, name, avb } = book; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>
            {avb ? (
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Available
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-secondary"
                data-toggle="modal"
                data-target=".bd-example-modal-sm"
              >
                Unavailable
              </button>
            )}
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="container main ">
        <h1>
          Dashboard <small>Admin panel</small>
        </h1>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="BookDetails"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Book ID: {this.state.books[0].id}
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
                <ul class="list-group">
                  <li class="list-group-item list-group-item-primary">
                    Book Name: Morris
                  </li>
                  <li class="list-group-item ">Author: Abc</li>
                  <li class="list-group-item">
                    Description: Quis ullamco nisi amet qui aute irure eu. Magna
                    labore dolor quis ex labore id nostrud deserunt dolor
                    eiusmod eu pariatur culpa mollit in irure.
                  </li>

                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Ratings
                    <span class="badge badge-primary badge-pill">14</span>
                  </li>
                </ul>
              </div>
              <div class="modal-footer">
                <a
                  type="button"
                  class="btn btn-primary"
                  href="/librarian/issue-book"
                >
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade bd-example-modal-sm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content  smlBx">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Book ID: {this.state.books[0].id}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span style={{ color: "white" }} aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
              <div class="modal-body">
                Sorry:( This Book is currently not available.
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="row mb-auto info-container">
                <div className="col-lg-6 col-md-4 col-xs-6">
                  {" "}
                  <div class="small-box bg-2">
                    <div class="inner">
                      <h3 class="ng-binding">0</h3>
                      <p>Issue Book</p>
                    </div>
                    <div class="icon">
                      <Link className="color-3" to="/librarian/issue-book">
                        {" "}
                        <i class="fa fa-book"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-xs-6">
                  {" "}
                  <div class="small-box bg-1">
                    <div class="inner">
                      <h3 class="ng-binding">0</h3>
                      <p>Requested Books</p>
                    </div>
                    <div class="icon">
                      <Link className="color-2 ">
                        <i class="fa fa-bookmark" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-xs-6">
                  {" "}
                  <div class="small-box bg-3">
                    <div class="inner">
                      <h3 class="ng-binding">0</h3>
                      <p>View All issued books</p>
                    </div>
                    <div class="icon">
                      <Link
                        to="/librarian/view-all-issued-books"
                        className="color-1"
                      >
                        <i class="fa fa-eye" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-xs-6">
                  <div class="small-box bg-2">
                    <div class="inner">
                      <h3 class="ng-binding">0</h3>
                      <p>View Books</p>
                    </div>
                    <div class="icon">
                      <Link className="color-3">
                        <i class="fa fa-book"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-xs-6">
                  <div class="small-box bg-2">
                    <div class="inner">
                      <h3 class="ng-binding">0</h3>
                      <p>Add Book</p>
                    </div>
                    <div class="icon">
                      <Link className="color-3" to="/librarian/add-book">
                        <i class="fa fa-book"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-xs-6">
                  <div class="small-box bg-3">
                    <div class="inner">
                      <h3 class="ng-binding">0</h3>
                      <p>View Users</p>
                    </div>
                    <div class="icon">
                      <Link to="/librarian/view-users" className="color-1">
                        <i class="fa fa-users" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-xs-6">
                  <div class="small-box bg-1">
                    <div class="inner">
                      <h3 class="ng-binding">0</h3>
                      <p>Add User</p>
                    </div>
                    <div class="icon">
                      <Link to="/librarian/add-user" className="color-2">
                        {" "}
                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-xs-6">
                  <div class="small-box bg-2">
                    <div class="inner">
                      <h3 class="ng-binding">0</h3>
                      <p>My Profile</p>
                    </div>
                    <div class="icon">
                      <Link className="color-3">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div class="input-group">
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

              <table
                id="dtBasicExample"
                class="table table-striped table-hover mt-3"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th class="th-sm">Book ID</th>
                    <th class="th-sm">Book Name</th>
                    <th class="th-sm">Availablity</th>
                  </tr>
                </thead>
                <tbody>{this.renderTableData()}</tbody>
              </table>
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

export default Dashboard;
