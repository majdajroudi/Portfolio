import React from "react";
import {Card, Row} from "antd";
import madreamlibsImg from "./../../images/madreamlibs-portfolio.png"
import juniperImg from "./../../images/juniper-portfolio.png"
import taskManagerImg from "./../../images/task-manager-portfolio.png"
import {Sides} from "./../../components/Sides"
import "./index.css";

const juniperObject = {
    title: "Juniper",
    technologies: "ReactJS, Firebase, i18next, Antdesign",
    description: "An educational gaming platform for kids. This website contains games that aim to teaching children about climate change and environmental issues",
    image: juniperImg
}

const taskManagerObject = {
    title: "Task Manager",
    technologies: "ReactJS, Firebase, Antdesign, CSS",
    description: "A simple app that lets you create you account and manage your and your team's tasks",
    image: taskManagerImg
}

const madreamlibsObject = {
    title: "MadreamLibs",
    technologies: "Javascript, CSS, HTML",
    description: "A fun madlibs game for the kids to write their own success story in a fun way",
    image: madreamlibsImg
}

const IMAGES = [juniperObject, taskManagerObject, madreamlibsObject];

const Portfolio = () => {


    return (
        <div className="pageWrapper">
            <Sides />
            <div className="portfolio">
                    <Row className="portfolio__bottom">
                        {IMAGES.map((project) => {
                        return <Card key={project.title} className="imageCard" >
                                <img className="websiteImage" src={project.image} alt={project.title} />
                                <div className="websiteDescription">
                                    <h2 className="websiteName">{project.title}</h2>
                                    <p>{project.description}</p>
                                    <p className="websiteTechnologies">{project.technologies}</p>
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