import React from "react";
import "./User.css";

const SearchedBook = (props) => {
  return (
    <div className="book">
      {/* <div class="book-img">
        <img src="images/open-book.png" alt="" />
      </div> */}
      <div className="book-details">
        <div className="book-title ">
          <h4>{props.res.name}</h4>
          <i className="fa fa-pencil" aria-hidden="true">
            {" "}
            <span>{props.res.email}</span>
          </i>
        </div>
        <p className="book-text">{props.res.body}</p>

        <div className="icons">
          <i className="fa fa-heart" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true">
            <span>{props.res.id}</span>
          </i>
          <div className="avb a-1">Available</div>
          <button className="bk">Book</button>
        </div>
      </div>
    </div>
  );
};

export default SearchedBook;
