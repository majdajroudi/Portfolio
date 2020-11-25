import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Home from "./containers/Home/index";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import {TopBottom} from "./components/Sides"

function App() {

  return (
    <Router className="App">
      <Route path="/" component={TopBottom} />
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/publications" component="" />
      <Route path="/contact" component="" />
      <Route path="/" component={TopBottom} />
    </Router>
  )
}

export default App;
