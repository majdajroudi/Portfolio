import React, { useState } from 'react';
import { Drawer, Button, Row, Col } from 'antd';
import {NavLink, useLocation} from "react-router-dom";
import {MenuOutlined } from "@ant-design/icons";
import {motion} from "framer-motion"
import {pageTransitions, transitionProperties} from "./../HelperFunctions/index"
import "./index.css"

const DrawerMenu = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation()

  const showDrawer = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const isCurrentPath = (path) => {
    if (location.pathname === path) {
      return "navbar__elementsWrapper--element navbar__activeElement";
    } else {
      return "navbar__elementsWrapper--element";
    }
  };

  return ( <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageTransitions}
      transition={transitionProperties}
      key={location.pathname}
      className="drawerWrapper">
      <Row className="drawer"
        style={location.pathname !== "/" && {justifyContent: "space-between"}}>
        {/*Repeated name on home page looks bad, so only show it when the user is in another route */}
        {location.pathname !== "/" && <h1 className="drawer__name" >Majd Ajroudi</h1>}
        <Button className="drawer--button" type="primary" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer
          title=""
          placement="right"
          closable={true}
          onClose={handleClose}
          visible={visible}
          className="drawer__drawer"
        >
          <Col className="drawer__drawer__linksWrapper">
            <NavLink onClick={handleClose} className={isCurrentPath("/")} to="/" > &nbsp;Home &nbsp;</NavLink>
            <NavLink onClick={handleClose} className={isCurrentPath("/about")} to="/about" >&nbsp;About &nbsp;</NavLink>
            <NavLink onClick={handleClose} className={isCurrentPath("/projects")} to="/projects" >&nbsp;Projects &nbsp;</NavLink>
            <NavLink onClick={handleClose} className={isCurrentPath("/publications")} to="/publications">&nbsp;Publications &nbsp;</NavLink>
            <NavLink onClick={handleClose} className={isCurrentPath("/contact")} to="/contact" >&nbsp;Contact &nbsp;</NavLink>
          </Col>
        </Drawer>
      </Row>
    </motion.div>
  );
};

export default DrawerMenu;