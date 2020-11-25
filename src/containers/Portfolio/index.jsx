import React from "react";
import {Card, Row} from "antd";
import madreamlibsImg from "./../../images/madreamlibs-portfolio.png"
import juniperImg from "./../../images/juniper-portfolio.png"
import portfolioImg from "./../../images/portfolio.png"
import taskManagerImg from "./../../images/task-manager-portfolio.png"
import {Sides} from "./../../components/Sides";
import {GithubOutlined, LinkOutlined } from "@ant-design/icons";
import "./index.css";

const juniperObject = {
    title: "Juniper",
    link: "https://juniper-ist.netlify.app",
    github: "https://github.com/ReCoded-Org/capstone-istanbul-juniper",
    technologies: ["ReactJS", "Firebase", "i18next", "CSS"],
    description: "An educational gaming platform for kids to teach them aboute climate change and environmental issues",
    image: juniperImg
}

const taskManagerObject = {
    title: "Task Manager",
    link: "https://task-manager-website.netlify.app/login",
    github: "https://github.com/jennethydyrova/board-project",
    technologies: ["ReactJS", "Firebase", "Antdesign", "CSS"],
    description: "A simple app that lets you create you account and manage your and your team's tasks",
    image: taskManagerImg
}

const madreamlibsObject = {
    title: "MadreamLibs",
    link: "https://madreamlibs.netlify.app",
    github: "https://github.com/hiba-machfej/ma-dream-libz",
    technologies: ["Javascript", "HTML", "CSS"],
    description: "A fun madlibs game for the kids to write their own success story in a fun way",
    image: madreamlibsImg
}

const portfolioObject = {
    title: "Portfolio",
    link: "majd-ajroudi-portfolio.netlify.app",
    github: "",
    technologies: ["ReactJS", "Antdesign", "Font Awesome", "CSS"],
    description: "A personal portfolio of the all the frontend projects developed by Majd Ajroudi",
    image: portfolioImg
}

const IMAGES = [juniperObject, taskManagerObject,portfolioObject, madreamlibsObject];

const Portfolio = () => {


    return (
        <div className="pageWrapper">
            <Sides />
            <div className="portfolio">
                    <Row className="portfolio__bottom">
                        {IMAGES.map((project) => {
                        return <Card key={project.title} className="imageCard" >
                                <img className="websiteImage" src={project.image} alt={project.title} />
                                <div className="websiteInfo">
                                    <h2 className="websiteName">{project.title}</h2>
                                    <p className="websiteDescription">{project.description}</p>
                                    <Row className="websiteTechnologies">
                                    {project.technologies.map((tech) => <p className="singleTechnology">{tech}</p> )}
                                    </Row>
                                    <Row className="websiteLinks">
                                        <a href={project.github}> <GithubOutlined /></a>
                                        <a href={project.link}><LinkOutlined /></a>
                                    </Row>
                                </div>
                            </Card>
                        })}
                    </Row>
            </div>
            <Sides />
        </div>
    )
}

export default Portfolio