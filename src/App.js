import "./App.css";
import Nav from "./components/Nav.js";
// import Home from "./Home.js";
// import Sites from "./sites";
import Footer from "./components/footer";
import Map from "./components/map";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/home"));
const Sites = lazy(() => import("./components/sites"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sites" exact component={Sites} />
            <Route path="/map" exact component={Map} />
            <Route path="*" component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
