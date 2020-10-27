import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import SearchedBook from "../User/SearchedBook";
import axios from "axios";
import "./Profile.css";
class Proifle extends Component {
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
  render() {
    return (
      <section className="profile-db">
        <div className="side-nav">
          <div className="sidebar-header">
            <h2>User Panel</h2>
          </div>

          <div class="sidebar-user">
            <div class="sidebar-user-img">
              <img src="images/images.png" alt="profile" />
            </div>
            <h3>Rachna</h3>
          </div>
          <div class="sidebar-list-1 ">
            <ul>
              <li>
                <a href="#read">
                  <i class="fa fa-user"></i> Dashboard
                </a>
              </li>
              <li>
                <a href="#due">
                  <i class="fa fa-book"></i> View Issued Books
                </a>
              </li>{" "}
              <li>
                <a href="#liked">
                  <i class="fa fa-heart"></i> Request Book
                </a>
              </li>
              <li>
                <a href="#book">
                  <i class="fa fa-list-alt"></i> Change Password
                </a>
              </li>
              <li>
                <a href="#update">
                  <i class="fa fa-pencil" aria-hidden="true"></i>Update Profile
                </a>
              </li>
              <li>
                <a href="#logout">
                  <i class="fa fa-sign-out" aria-hidden="true"></i>Logout
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="profile-content">
          <div className="search-box">
            <div class="md-form mt-0">
              <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="books-list">
            <div className="books">
              {this.state.tableData.map((res, i) => {
                return <SearchedBook key={i} res={res} />;
              })}
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
      </section>
    );
  }
}

export default Proifle;
