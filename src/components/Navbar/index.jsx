import React from "react"
import {Row} from "antd"
import {NavLink} from "react-router-dom";
import "./index.css"


const Navbar = () => {

    return (
            <Row className="navbar">
                <Row className="navbar__elementsWrapper">
                    <NavLink className="navbar__elementsWrapper--element" to="/" >Home &nbsp;</NavLink>
                    <NavLink className="navbar__elementsWrapper--element" to="/about" >About &nbsp;</NavLink>
                    <NavLink className="navbar__elementsWrapper--element" to="/portfolio" >Portfolio &nbsp;</NavLink>
                    <NavLink className="navbar__elementsWrapper--element" to="/resume">Resume &nbsp;</NavLink>
                    <NavLink className="navbar__elementsWrapper--element" to="/contact" >Contact &nbsp;</NavLink>
                </Row>
            </Row>
    )
}

export default Navbar;


// items.map(({ item, props, key }) =>
//                 <Col  >{item}</Col>)