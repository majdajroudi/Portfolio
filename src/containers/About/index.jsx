import React from 'react';
import homeImg from "../../images/homeImg.svg"
import { Col, Row} from "antd"
import {Sides} from "./../../components/Sides"
import "./index.css"

const About = () => {
    return (
        <div className="pageWrapper">
            <Sides />
            <div className="about">
                    <Row className="about__contentBox__bottom">
                        <Col className="about__contentBox__textCol">
                            <Col>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed enim at ex ultricies sagittis. Phasellus ornare ultrices erat non mollis. Nulla vel cursus est. Integer nec ipsum sodales, ornare ante sit amet, tincidunt nulla. Morbi bibendum ante ante. Donec odio ligula, elementum et sollicitudin vel, consectetur quis arcu. Pellentesque semper tincidunt turpis, quis vulputate leo molestie et.</p> 
                            </Col>
                        </Col>
                        <Col className="about__contentBox__imgCol">
                            <Row className="about__contentBox__imgContainer">
                                <img src={homeImg} alt="walking man illustration"/>
                            </Row>
                        </Col>
                    </Row>
            </div>
            <Sides />
        </div>
    )
}

export default About