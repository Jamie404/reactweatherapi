import React from "react";
import "../App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sites: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3005/users")
      .then((data) => data.json())
      .then((data) => this.setState({ users: data }));
  }

  handleEnter = (e) => {
    if (e.key === "Enter") {
      this.checklogin();
    }
  };

  checklogin = () => {
    const checkUser = document.getElementById("email").value;
    const checkPass = document.getElementById("password").value;

    const filteredUsers = this.state.users.filter(
      (user) => user.email === checkUser
    );

    if (filteredUsers[0].password === checkPass) {
      // alert("Login Successful..");
      sessionStorage.setItem("loginToken", "1");
      document.getElementById("password").value = "";
      window.location.href = "./admin";
    } else {
      // alert("Login Failed - Please try again..");
      sessionStorage.setItem("loginToken", "0");
      document.getElementById("password").value = "";
    }
  };

  render() {
    return (
      <form>
        <br />
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            id="email"
            type="email"
            className="form-control"
            // placeholder="Enter email"
            defaultValue={"flargle@gargle.com"}
            onKeyDown={this.handleEnter}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            onKeyDown={this.handleEnter}
          />
        </div>
        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
        <div className="d-grid">
          <button
            onClick={this.checklogin}
            type="button"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
    );
  }
}
export default Login;
