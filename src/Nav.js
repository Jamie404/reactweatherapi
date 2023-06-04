import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        ></link>

        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sites">
                Sites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/map">
                Map
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
