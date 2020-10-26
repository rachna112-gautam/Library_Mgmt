import React, { Component } from "react";
import "./Lib.css";
import $ from "jquery";
// import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";

class Librarian extends Component {
  render() {
    function toggleBar() {
      $(".btnn").toggleClass("click");
      $(".sidebar").toggleClass("show");
    }

    function MngBookHndle() {
      $("nav ul .mg-show-1").toggleClass("show ");
      $("nav ul .first").toggleClass("rotate");
    }

    function MngUserHndle() {
      $("nav ul .mg-show-2").toggleClass("show ");
      $("nav ul .second").toggleClass("rotate");
    }
    return (
      <div className="container-fluid main">
        <div className="btnn" onClick={toggleBar}>
          <span className="fa fa-bars"> </span>
        </div>
        <nav className="sidebar">
          <div className="text">Admin Panel</div>
          <ul>
            <li>
              <a href="#dash">Dashboard</a>
            </li>
            <li>
              <a href="#profile">My Profile</a>
            </li>
            <li>
              <a href="#mngbook" className="mg-book" onClick={MngBookHndle}>
                Manage Books
                <span className="fa fa-caret-down first"></span>
              </a>
              <ul className="mg-show-1">
                <li>
                  <a href="#addbook">add Books</a>
                </li>
                <li>
                  <a href="#viewbook">view Books</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#mnguser" className="mg-user" onClick={MngUserHndle}>
                Manage User <span className="fa fa-caret-down second"></span>
              </a>
              <ul className="mg-show-2">
                <li>
                  <a href="#adduser">add User</a>
                </li>
                <li>
                  <a href="#viewuser">view Users</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#fine">Manage Fine</a>
            </li>
            <li>
              <a href="#book">Issue Book</a>
            </li>
            <li>
              <a href="#logout">Logout</a>
            </li>
          </ul>
        </nav>

        <Dashboard />
      </div>
    );
  }
}

export default Librarian;
