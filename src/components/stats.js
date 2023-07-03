import React from "react";
import "../App.css";

class Stats extends React.Component {
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
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        ></link>
        <h1>Statistics</h1>
        <hr />
        <h2>National Statistics</h2>
        <table className="table-striped table">
          <thead>
            <tr>
              <th>Weather Measure</th>
              <th>Min</th>
              <th>Max</th>
              <th>Avg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Air Temperature</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Road Temperature</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Wind Speed</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h2>Site Statistics</h2>
        <table className="table-striped table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Site</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coldest</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Warmest</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Windiest</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Stats;
