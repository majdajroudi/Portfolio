import React, {useState} from "react"
import {Row} from "antd"
import {NavLink} from "react-router-dom";
import "./index.css"


const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth)
    })

    return ( screenWidth > 768&& <div className="navbarWrapper"><Row className="navbar">
                <Row className="navbar__elementsWrapper">
                    <NavLink className="navbar__elementsWrapper--element" to="/" > &nbsp;Home &nbsp;</NavLink>
                    <NavLink className="navbar__elementsWrapper--element" to="/about" >&nbsp;About &nbsp;</NavLink>
                    <NavLink className="navbar__elementsWrapper--element" to="/portfolio" >&nbsp;Portfolio &nbsp;</NavLink>
                    <NavLink className="navbar__elementsWrapper--element" to="/resume">&nbsp;Publications &nbsp;</NavLink>
                    <NavLink className="navbar__elementsWrapper--element" to="/contact" >&nbsp;Contact &nbsp;</NavLink>
                </Row>
            </Row></div>
    )
}

export default Navbar;


// items.map(({ item, props, key }) =>
//                 <Col  >{item}</Col>)