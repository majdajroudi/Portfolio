import React from 'react';
import homeImg from "../../images/homeImg.svg";
import {Sides} from "./../../components/Sides";
import {motion} from "framer-motion";
import {GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import {pageTransitions, transitionProperties} from "./../../components/HelperFunctions/index";
import { Col, Row} from "antd"
import "./index.css"

const Home = () => {

    return (
        <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageTransitions}
        transition={transitionProperties}
        className="pageWrapper"
        key="/home">
            <Sides />
            <div className="home">
                <Row className="home__contentBox__bottom">
                    <Col className="home__contentBox__nameCol">
                        <Col>
                            <h1>Majd</h1>
                            <h1>Ajroudi</h1>
                            <h3>Front End Developer</h3>
                            <h3 className="home__contentBox__nameCol--email" >majd.ajroudi@gmail.com</h3>
                            <Row className="home__contentBox__nameCol__iconsWrapper">
                                <Row className="home__contentBox__nameCol__icons">
                                    <a href="https://www.linkedin.com/in/majd-ajroudi/"><LinkedinOutlined /></a>
                                    <a href="https://github.com/majdajroudi"><GithubOutlined /></a>
                                </Row>
                            </Row>
                        </Col>
                    </Col>
                    <Col className="home__contentBox__imgCol">
                        <Row className="home__contentBox__imgContainer">
                            <img src={homeImg} alt="walking man illustration"/>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Sides />
        </motion.div>
    )
}

export default Home