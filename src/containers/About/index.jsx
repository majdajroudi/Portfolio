import React from 'react';
import aboutImg from "../../images/majd.svg"
import { Col, Row} from "antd"
import {Sides} from "./../../components/Sides";
import "./index.css"

const textObject = {
    title: "Hi! this is me to the left",
    text0: "I believe that my journey placed me in an area where creativeness and logic walk hand-in-hand. I saw the power of coding while working on an academic astrodynamics project, it was then that I said: here is something I don't get bored of. I learned programming languages like Python and C and familirized myself with them.",
    text1:"I learned Front End development during the Covid-19 pandemic in an immersive bootcamp provided by Re:coded. During the bootcamp I learned technologies like Javascript, CSS, HTML, ReactJS, Firebase and Redux."
}

const About = () => {
    return (
        <div className="pageWrapper">
            <Sides />
            <div className="about">
                    <Row className="about__contentBox__bottom">
                        <Col className="about__contentBox__textCol">
                            <Col>
                                <h2>{textObject.title}</h2>
                                <p>{textObject.text0}</p> 
                                <p>{textObject.text1}</p>
                            </Col>
                        </Col>
                        <Col className="about__contentBox__imgCol">
                            <Row className="about__contentBox__imgContainer">
                                <img src={aboutImg} alt="walking man illustration"/>
                            </Row>
                        </Col>
                    </Row>
            </div>
            <Sides />
        </div>
    )
}

export default About