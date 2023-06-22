import React from "react";
import "../App.css";

let check = sessionStorage.getItem("loginToken");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sites: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3005/sites")
      .then((data) => data.json())
      .then((data) => this.setState({ sites: data }));
  }

  render() {
    if (check !== "1") {
      window.location.href = "./";
    } else {
      return (
        <div>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          ></link>

          <table className="table-striped table">
            <thead>
              <tr>
                <th>Site Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.sites.map((item, t) => {
                return (
                  <div>
                    <tr key={t}>
                      <td>
                        <input type="text" defaultValue={item.site_name} />
                      </td>
                    </tr>
                    <tr key={t}>
                      <input type="button" />
                    </tr>
                  </div>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
export default Home;
