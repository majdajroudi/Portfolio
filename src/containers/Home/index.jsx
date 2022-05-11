import React from 'react';
import homeImg from "../../images/homeImg.svg";
import { motion } from "framer-motion";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { pageTransitions, transitionProperties } from "./../../components/HelperFunctions/index";
import { Col, Row } from "antd"
import Particles from "react-tsparticles"
import "./index.css"

const Home = () => {

    const options = {
        background: {
            color: "#31393D",
        },
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "connect",
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: ["#B8623F", "#C8C6CB",],
            },
            links: {
                color: "#C8C6CB",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 250,
                },
                value: 20,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: true,
                value: 5,
            },
        },
    }

    return (
        <>

            <Particles options={options} />

            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageTransitions}
                transition={transitionProperties}
                className="pageWrapper"
                key="/home">
                <div className="home">
                    <Row className="home__contentBox__bottom">
                        <Col className="home__contentBox__nameCol">
                            <Col>
                                <h1 className="home__contentBox__nameCol--name">Majd</h1>
                                <h1 className="home__contentBox__nameCol--surname">Ajroudi</h1>
                                <h3>Front End Developer</h3>
                                <h3 className="home__contentBox__nameCol--email" >majd.ajroudi@gmail.com</h3>
                                <Row className="home__contentBox__nameCol__iconsWrapper">
                                    <Row className="home__contentBox__nameCol__icons">
                                        <a target="_blank" href="https://www.linkedin.com/in/majd-ajroudi/"><LinkedinOutlined /></a>
                                        <a target="_blank" href="https://github.com/majdajroudi"><GithubOutlined /></a>
                                    </Row>
                                </Row>
                            </Col>
                        </Col>
                        <Col className="home__contentBox__imgCol">
                            <Row className="home__contentBox__imgContainer">
                                <img src={homeImg} alt="walking man illustration" />
                            </Row>
                        </Col>
                    </Row>
                </div>
            </motion.div>
        </>

    )
}

export default Home