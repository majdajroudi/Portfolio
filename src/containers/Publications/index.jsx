import React from "react"
import "./index.css";
import {Col, Row, Card} from "antd"
import { LinkOutlined } from "@ant-design/icons";
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

const singleRootMethod = {
    title: "UZAKLIK DEGİŞİMİ VE AÇI VERİSİ TEMELLİ TEK KÖKLÜ YÖRÜNGE BELİRLEME YÖNTEMİ GELİŞTİRİLMESİ",
    description: "This work solves interpolation sensitivity problems arising when applying the method suggested in 'Orbit Determination From Doppler and Angle Data'. several methods to solve those problems are presented in the study. The paper was presented in the 8th ULUSAL HAVACILIK VE UZAY KONFERANSI 2020 (UHUK '20)",
    link: "https://www.researchgate.net/publication/347471795_UZAKLIK_DEGISIMI_VE_AC_I_VERISI_TEMELLI_TEK_KOKLU_YORUNGEON_BELIRLEME_YONTEMI_GELISTIRILMESI"
}

const lambertProblemMcpi = {
    title: "Parallel solution of Lambert’s problem using modified Chebyshev-Picard iteration method",
    description: "In this work, A parallel algorithm have developed to solve Lambert’s problem in a parallel environment. Experiments to test the scalability of the algorithm on both shared and distributed memory architectures were conducted. The experimental results show that the parallel algorithm achieves 8.26- and 3.94-times faster execution time on distributed memory and shared memory architectures, respectively.",
    link: "https://dergipark.org.tr/tr/pub/ngumuh/issue/68178/1069509"
}

const BLOGS = [arabicI18next]
const ARTICLES = [dopplerEffect, singleRootMethod, lambertProblemMcpi]

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
                                    <a target="_blank" rel="noopener noreferrer" href={article.link}><LinkOutlined/></a>
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
                                    <a target="_blank" rel="noopener noreferrer" href={article.link}><LinkOutlined/></a>
                                </Row>
                            </Card>
                        )
                    })}
                </Col>
            </Col>
        </motion.div>
    )
}

export default Publications
