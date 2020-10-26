import React, { Component } from "react";
import "./User.css";
import BookList from "./BookList";
import SearchedBook from "./SearchedBook";
import axios from "axios";
import ReactPaginate from "react-paginate";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
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
    const Books = [
      {
        bookName: "abc",
        author: "sfg",
      },
      {
        bookName: "xyz",
        author: "sfg",
      },
      {
        bookName: "pqr",
        author: "sfg",
      },
      {
        bookName: "fgfh",
        author: "sfg",
      },
    ];

    return (
      <section>
        {/* book-content */}
        <div className="books-list">
          <div className="books">
            {this.state.tableData.map((res) => {
              return <SearchedBook res={res} />;
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
      </section>
    );
  }
}
export default User;
{
  /* books read by byself */
}
{
  /* <div className="book-byself">
            <h2>Books Read by me</h2>
            <div className="lists">
              {Books.map((book) => {
                return (
                  <BookList bookName={book.bookName} author={book.author} />
                );
              })}
            </div>
          </div> */
}
