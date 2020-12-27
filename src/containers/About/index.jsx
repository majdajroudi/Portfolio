import React, {useState} from 'react';
import aboutImg from "../../images/majd.svg"
import { Col, Row, Button} from "antd"
import {Sides} from "./../../components/Sides";
import {motion} from "framer-motion"
import {pageTransitions, transitionProperties} from "./../../components/HelperFunctions/index"
import "./index.css"

const About = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth)
    })

    const textObject = {
        title: screenWidth > 425? "Hi! See me on the left?": "Hi! See me on the top?",
        text0: "Well, this is me, Majd Ajroudi, a Jr. Front End Developer who likes to use tech for the benefit of people. I believe my journey has placed me in an area where creativity and logic walk hand-in-hand. I saw the power of coding while working on an academic astrodynamics project, it was then that I said: here is something I don't get bored of. I learned programming languages like Python and C and familirized myself with them.",
        text1:"I learned Front End development during the Covid-19 pandemic in an immersive bootcamp provided by Re:Coded. During the bootcamp I learned technologies like Javascript, CSS, HTML, ReactJS, Firebase and Redux."
    }

    return (
        <motion.div
        initial= "initial"
        animate="in"
        exit="out"
        variants={pageTransitions}
        transition={transitionProperties}
        className="pageWrapper"
        key="/about">
            <Sides />
            <div className="about">
                    <Row className="about__contentBox__bottom">
                        <Col className="about__contentBox__textCol">
                            <Col>
                                <h2>{textObject.title}</h2>
                                <p>{textObject.text0}</p> 
                                <p>{textObject.text1}</p>
                            </Col>
                            <Row className="resumeButton">
                                <Button className="resumeButton--button">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.keepandshare.com/doc11/29766/majd-s-resume-1-pdf-78k?da=y">Check My Resume!</a>
                                </Button>
                            </Row>
                        </Col>
                        <Col className="about__contentBox__imgCol">
                            <Row className="about__contentBox__imgContainer">
                                <img src={aboutImg} alt="walking man illustration"/>
                            </Row>
                        </Col>
                    </Row>
            </div>
            <Sides />
        </motion.div>
    )
}

export default About