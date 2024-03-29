import React from "react";
import { Card, Row } from "antd";
import madreamlibsImg from "./../../images/madreamlibs-portfolio.png"
import juniperImg from "./../../images/juniper-portfolio.png";
import taskManagerImg from "./../../images/task-manager-portfolio.png"
import Chip from "../../components/Chip"
import movieProjectImg from "./../../images/movie-project-portfolio.png"
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion"
import { pageTransitions, transitionProperties } from "./../../components/HelperFunctions/index"
import "./index.css";

const juniperObject = {
    title: "Juniper",
    link: "https://majdajroudi.github.io/capstone-istanbul-juniper",
    github: "https://github.com/ReCoded-Org/capstone-istanbul-juniper",
    technologies: ["ReactJS", "Firebase", "i18next", "CSS3"],
    description: "An educational gaming platform for kids to teach them aboute climate change and environmental issues",
    image: juniperImg
}

const movieObject = {
    title: "Movie Project",
    link: "https://fadime-ozdemir.github.io/oop-movie/#",
    github: "https://github.com/fadime-ozdemir/oop-movie",
    technologies: ["Javascript", "React-Bootstrap", "HTML5", "CSS3"],
    description: "A website that was developed using OOP and uses database to display famous movies, their ratings and filter movies according to user's choice",
    image: movieProjectImg
}

const taskManagerObject = {
    title: "Task Manager",
    link: "https://task-manager-website.netlify.app",
    github: "https://github.com/jennethydyrova/board-project",
    technologies: ["ReactJS", "Firebase", "Antdesign", "CSS3"],
    description: "A simple app that lets you create you account and manage your and your team's tasks",
    image: taskManagerImg
}

const madreamlibsObject = {
    title: "MadreamLibs",
    link: "https://madreamlibs.netlify.app",
    github: "https://github.com/hiba-machfej/ma-dream-libz",
    technologies: ["Javascript", "HTML5", "CSS3"],
    description: "A fun madlibs game for the kids to write their own success story in a fun way",
    image: madreamlibsImg
}

const IMAGES = [juniperObject, movieObject, taskManagerObject, madreamlibsObject];

const Projects = () => {

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageTransitions}
            transition={transitionProperties}
            className="pageWrapper"
            key="/projects">
            <div className="portfolio">
                <Row className="portfolio__bottom">
                    {IMAGES.map((project) => {
                        return <Card key={project.title} className="imageCard" >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img className="websiteImage" src={project.image} alt={project.title} />
                                <div className="websiteInfo">
                                    <h2 className="websiteName">{project.title}</h2>
                                    <p className="websiteDescription">{project.description}</p>
                                    <Row className="websiteTechnologies">
                                        {project.technologies.map((tech) => <Chip content={tech} backgroundColor="#31393D" />)}
                                    </Row>
                                    <Row className="websiteLinks">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"> <GithubOutlined /></a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"><LinkOutlined /></a>
                                    </Row>
                                </div>
                            </a>
                        </Card>
                    })}
                </Row>
            </div>
        </motion.div>
    )
}

export default Projects
