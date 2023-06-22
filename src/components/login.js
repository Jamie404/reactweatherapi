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

  checklogin = () => {
    const checkUser = document.getElementById("email").value;
    const checkPass = document.getElementById("pass").value;

    const loginDetails = this.state.login;

    if (
      loginDetails[0].email === checkUser &&
      loginDetails[0].password === checkPass
    ) {
      // alert("Login Successful..");
      localStorage.setItem("loginToken", "1");
      document.getElementById("pass").value = "";
      window.location.href = "./admin";
    } else {
      // alert("Login Failed - Please try again..");
      localStorage.setItem("loginToken", "0");
      document.getElementById("pass").value = "";
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
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
          id="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
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
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
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
