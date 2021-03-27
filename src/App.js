import React,{useState, lazy, Suspense} from 'react';
import './App.css';
import 'antd/dist/antd.css'
// import Projects from "./containers/Projects";
import Drawer from "./components/Drawer"
import Contact from "./containers/Contact"
import Publications from "./containers/Publications"
import {Route, useLocation, Switch} from "react-router-dom";
import { Spin } from 'antd';
import Navbar from "./components/Navbar"
import {AnimatePresence} from "framer-motion"

const Projects = lazy(() => import("./containers/Projects"))
const Home = lazy(() => import("./containers/Home"))
const About = lazy(() => import("./containers/About"))


function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const location = useLocation();

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth)
  })

  return (
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname} className="App">
          <Route exact path="/" key="/">
            {/* <TopBottom/> */}
            {screenWidth > 768 ? <Navbar /> : <Drawer />}
            <Suspense fallback={<div className="spinner"> <Spin tip="Loading..." size="large" /> </div>}>
              <Home />
            </Suspense>
            {/* <TopBottom/> */}
          </Route>

          <Route path="/about" key="/about">
            {/* <TopBottom/> */}
            {screenWidth > 768 ? <Navbar /> : <Drawer />}
            <Suspense fallback={<div className="spinner"> <Spin tip="Loading..." size="large" /> </div>}>
              <About />
            </Suspense>
            {/* <TopBottom/> */}
          </Route>

          <Route path="/projects" key="/projects">
            {/* <TopBottom/> */}
            {screenWidth > 768 ? <Navbar /> : <Drawer />}
            <Suspense fallback={<div className="spinner"> <Spin tip="Loading..." size="large" /> </div>}>
              <Projects />
            </Suspense>
            {/* <TopBottom/> */}
          </Route>

          <Route path="/blog" key="/publications">
            {/* <TopBottom/> */}
            {screenWidth > 768 ? <Navbar /> : <Drawer />}
            <Publications />
            {/* <TopBottom/> */}
          </Route>

          <Route path="/contact" key="/contact">
            {/* <TopBottom/> */}
            {screenWidth > 768 ? <Navbar /> : <Drawer />}
            <Contact/>
            {/* <TopBottom/> */}
          </Route>
          {/* <Route exact path="/" key="/drawer" component={Drawer} />
          <Route exact path="/" key="/navbar" component={Navbar} />
          <Route exact path="/" key="/home" component={Home} />
          <Route path="/about" key="/about" component={About} />
          <Route path="/projects" key="/projects" component={Projects} />
          <Route path="/publications" key="/publications" component={Publications} />
          <Route path="/contact" key="/contact" component={Contact} />
          <Route path="/" key="/bottom" component={TopBottom} /> */}
        </Switch>
    </AnimatePresence>
  )
}

export default App;
