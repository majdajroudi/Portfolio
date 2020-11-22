import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import Home from "./containers/Home/index"
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Home} />
      <Route path="/about" component="" />
      <Route path="/portfolio" component="" />
      <Route path="/resume" component="" />
      <Route path="/contact" component="" />
    </Router>
  )
}

export default App;
