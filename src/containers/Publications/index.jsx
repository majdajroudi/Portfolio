import React from "react"
import "./index.css";
import {Col, Row, Card} from "antd"
import { LinkOutlined } from "@ant-design/icons";
import {Sides} from "./../../components/Sides";
import {pageTransitions, transitionProperties} from "./../../components/HelperFunctions/index"
import {motion} from "framer-motion"

const dopplerEffect = {
    title: "Orbit Determination From Doppler and Angle Data",
    description: "Orbit determination using Laplace method, Doppler effect data retreived with a radar and angluar data using observation is investigated in this work. The work was presented in the 10th Ankara International Aerospace Conference 2019 (AIAC'19) in METU.",
    link: "http://aiac.ae.metu.edu.tr/paper.php?Paper=AIAC-2019-185"
}

const ARTICLES = [dopplerEffect]

const Publications = () => {

    return(
        <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageTransitions}
        transition={transitionProperties}
        className="pageWrapper"
        key="/publications">
            <Sides/>
            <Col className="publications">
                {ARTICLES.map((article) => {
                    return (
                        <Card key={article.title} className="publications__article" bordered={false}>
                            <Row className="publications__article__details">
                                <h2>{article.title}</h2>  
                                <p>{article.description}</p>
                            </Row>
                            <Row className="publications__article--link">
                                <a href={article.link}><LinkOutlined/></a>
                            </Row>
                        </Card>
                    )
                })}
            </Col>
            <Sides/>
        </motion.div>
    )
}

export default Publications