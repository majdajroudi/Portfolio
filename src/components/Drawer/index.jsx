import React, { useState } from 'react';
import { Drawer, Button, Row, Col } from 'antd';
import {NavLink, useLocation} from "react-router-dom";
import {MenuOutlined } from "@ant-design/icons";
import "./index.css"

const DrawerMenu = () => {
  const [visible, setVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation()
  window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth)
  })

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const isCurrentPath = (path) => {
    if (location.pathname === path) {
      return "navbar__elementsWrapper--element navbar__activeElement";
    } else {
      return "navbar__elementsWrapper--element";
    }
  };

  return (
    screenWidth <= 1024 && <Row className="drawerWrapper">
      <Row className="drawer">
        <Button className="drawer--button" type="primary" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer
          title=""
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
          className="drawer__drawer"
        >
          <Col className="drawer__drawer__linksWrapper">
            <NavLink className={isCurrentPath("/")} to="/" > &nbsp;Home &nbsp;</NavLink>
            <NavLink className={isCurrentPath("/about")} to="/about" >&nbsp;About &nbsp;</NavLink>
            <NavLink className={isCurrentPath("/portfolio")} to="/portfolio" >&nbsp;Portfolio &nbsp;</NavLink>
            <NavLink className={isCurrentPath("/publications")} to="/publications">&nbsp;Publications &nbsp;</NavLink>
            <NavLink className={isCurrentPath("/contact")} to="/contact" >&nbsp;Contact &nbsp;</NavLink>
          </Col>
        </Drawer>
      </Row>
    </Row>
  );
};

export default DrawerMenu;