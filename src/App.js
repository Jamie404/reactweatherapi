import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Nav = lazy(() => import("./components/Nav"));
const Home = lazy(() => import("./components/home"));
const Footer = lazy(() => import("./components/footer"));
const Sites = lazy(() => import("./components/sites"));
const Map = lazy(() => import("./components/map"));

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
