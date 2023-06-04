import "./App.css";
import Nav from "./Nav.js";
import Home from "./Home.js";
import Sites from "./sites";
import Footer from "./footer";
import Map from "./map";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sites" exact component={Sites} />
          <Route path="/map" exact component={Map} />
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
