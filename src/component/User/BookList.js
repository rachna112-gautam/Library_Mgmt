import React from "react";
import "./User.css";
const BookList = (props) => {
  return (
    <div className="list">
      <div className="imgBx">
        <img src="images/back2.jpeg" alt="" />
      </div>
      <div className="list-content">
        <h4>{props.bookName}</h4>
        <span>{props.author}</span>
      </div>
    </div>
  );
};

export default BookList;
