import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";
export default class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            {" 到底吃啥啊 - WTF We Eat"}
          </Navbar.Brand>

              <Link to="/">
              <li>Home</li>
              </Link>

              <Link to="/add">
              <li>添加</li>
              </Link>

        </Navbar>
      </div>
    );
  }
}
