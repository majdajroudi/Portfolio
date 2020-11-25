import React, {useState} from "react"
import {Row} from "antd"
import {NavLink, useLocation} from "react-router-dom";
import "./index.css"


const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const location = useLocation()
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth)
    })

    const isCurrentPath = (path) => {
        if (location.pathname === path) {
          return "navbar__elementsWrapper--element navbar__activeElement";
        } else {
          return "navbar__elementsWrapper--element";
        }
      };

    return ( screenWidth > 768&& <div className="navbarWrapper"><Row className="navbar">
                <Row className="navbar__elementsWrapper">
                    <NavLink className={isCurrentPath("/")} to="/" > &nbsp;Home &nbsp;</NavLink>
                    <NavLink className={isCurrentPath("/about")} to="/about" >&nbsp;About &nbsp;</NavLink>
                    <NavLink className={isCurrentPath("/portfolio")} to="/portfolio" >&nbsp;Portfolio &nbsp;</NavLink>
                    <NavLink className={isCurrentPath("/publications")} to="/publications">&nbsp;Publications &nbsp;</NavLink>
                    <NavLink className={isCurrentPath("/contact")} to="/contact" >&nbsp;Contact &nbsp;</NavLink>
                </Row>
            </Row></div>
    )
}

export default Navbar;