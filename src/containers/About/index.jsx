import React, { useState } from 'react';
import aboutImg from "../../images/majd.svg"
import { Col, Row, Button } from "antd"
import { motion } from "framer-motion"
import { pageTransitions, transitionProperties } from "./../../components/HelperFunctions/index"
import Chip from "../../components/Chip"
import "./index.css"

const About = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth)
    })

    const textObject = {
        title: screenWidth > 425 ? "Hi! See me on the left?" : "Hi! See me on the top?",
        text0: "Well, this is me, Majd, a Front End Developer who likes to use tech for the benefit of people. I believe my journey has placed me in an area where creativity and logic walk hand-in-hand.",
        stack: ["TypeScript", "ReactJS", "SASS", "Firebase", "Redux", "CesiumJS"]
    }

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageTransitions}
            transition={transitionProperties}
            className="pageWrapper"
            key="/about">
            <div className="about">
                <Row className="about__contentBox__bottom">
                    <Col className="about__contentBox__textCol">
                        <Col>
                            <h2>{textObject.title}</h2>
                            <p>{textObject.text0}</p>
                            <h3>Tech Stack:</h3>
                            <p id="tech-stack">
                                {textObject.stack.map((curr) => (
                                    <Chip content={curr} backgroundColor={"blue"} />
                                ))}
                            </p>
                        </Col>
                        <Row className="resumeButton">
                            <Button className="resumeButton--button">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.keepandshare.com/doc11/29766/majd-s-resume-1-pdf-78k?da=y">Check My Resume!</a>
                            </Button>
                        </Row>
                    </Col>
                    <Col className="about__contentBox__imgCol">
                        <Row className="about__contentBox__imgContainer">
                            <img src={aboutImg} alt="walking man avatar" />
                        </Row>
                    </Col>
                </Row>
            </div>
        </motion.div>
    )
}

export default About