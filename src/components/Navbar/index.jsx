import React from "react"
import { Row } from "antd"
import { NavLink, useLocation } from "react-router-dom";
import { pageTransitions, transitionProperties } from "./../../components/HelperFunctions/index"
import { motion } from "framer-motion";
import "./index.css"


const Navbar = () => {
  const location = useLocation()

  const isCurrentPath = (path) => {
    if (location.pathname === path) {
      return "navbar__elementsWrapper--element navbar__activeElement";
    } else {
      return "navbar__elementsWrapper--element";
    }
  };

  return (
    <Row className="navbar">
      <Row className="navbar__elementsWrapper">
        <NavLink className={isCurrentPath("/")} to="/" > &nbsp;Home &nbsp;</NavLink>
        <NavLink className={isCurrentPath("/about")} to="/about" >&nbsp;About &nbsp;</NavLink>
        <NavLink className={isCurrentPath("/projects")} to="/projects" >&nbsp;Projects &nbsp;</NavLink>
        <NavLink className={isCurrentPath("/blog")} to="/blog">&nbsp;Blog &nbsp;</NavLink>
        <NavLink className={isCurrentPath("/contact")} to="/contact" >&nbsp;Contact &nbsp;</NavLink>
      </Row>
    </Row>
  )
}

export default Navbar;