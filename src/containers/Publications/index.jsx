import React from "react"
import "./index.css";
import {Col, Row, Card} from "antd"
import { LinkOutlined } from "@ant-design/icons";
import {Sides} from "./../../components/Sides";
import {pageTransitions, transitionProperties} from "./../../components/HelperFunctions/index"
import {motion} from "framer-motion"

const arabicI18next = {
    title: "Dealing With Arabic When Using i18next",
    description: "A blog article about my experience in developing a website that supports multiple languages using i18next package. In the article, I mention few techniques that help including arabic in your website without styling bugs",
    link: "https://medium.com/swlh/dealing-with-arabic-when-using-i18next-348ed55f7c1a"
}

const dopplerEffect = {
    title: "Orbit Determination From Doppler and Angle Data",
    description: "Orbit determination using Laplace method, Doppler effect data retreived with a radar and angluar data using observation is investigated in this work. The work was presented in the 10th Ankara International Aerospace Conference 2019 (AIAC'19) in METU.",
    link: "http://aiac.ae.metu.edu.tr/paper.php?Paper=AIAC-2019-185"
}

const BLOGS = [arabicI18next]
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
            <Col className="publicationsPageContent">
                <Col className="publications">
                    {BLOGS.map((article) => {
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

                <Row className="academicTitle">
                    <p>Academic Publications</p>
                </Row>
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
            </Col>
            <Sides/>
        </motion.div>
    )
}

export default Publications