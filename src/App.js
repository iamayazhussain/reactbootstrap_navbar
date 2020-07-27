import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Rnd from "./Components/Rnd";
import NavBar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/rnd" component={Rnd}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
