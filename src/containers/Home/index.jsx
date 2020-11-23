import React, {useState} from 'react';
import Navbar from "../../components/Navbar/index"
import homeImg from "../../images/homeImg.svg"
// import {motion} from "framer-motion"
import { Col, Row,Card} from "antd"
import "./index.css"

const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth)
    })

    return (
        <div className="home">
            <Card className="home__contentBox" bordered={false}>
                {screenWidth > 768 && <Navbar /> }
                <Row className="home__contentBox__bottom">
                    <Col className="home__contentBox__nameCol">
                        <Col>
                            <h1>Majd</h1>
                            <h1>Ajroudi</h1>
                            <h3>Front End Developer</h3>
                        </Col>
                    </Col>
                    <Col className="home__contentBox__imgCol">
                        <Row className="home__contentBox__imgContainer">
                            <img src={homeImg} alt="walking man illustration"/>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Home