import React from "react";
import "./App.css";
import Register from "./component/Register/Register";
import { BrowserRouter, Route } from "react-router-dom";
import UserLogin from "./component/Login/UserLogin";
import LandingPage from "./component/LandingPage/LandingPage";
import AdminLogin from "./component/Login/AdminLogin";
import Librarian from "./component/Librarian/Librarian";
import Profile from "./component/UserProfile/Profile";
import AddBook from "./component/Librarian/AddBook";
import IssueBook from "./component/Librarian/IssueBook";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/user-login" component={UserLogin}></Route>
      <Route exact path="/admin-login" component={AdminLogin} />
      <Route exact path="/librarian" component={Librarian} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/librarian/add-book" component={AddBook} />
      <Route exact path="/librarian/issue-book" component={IssueBook} />
    </BrowserRouter>
  );
}

export default App;
