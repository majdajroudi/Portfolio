import React,{useState} from "react"
import {Row, Col} from "antd"
import {motion} from "framer-motion"


const Navbar = () => {

    return (
        <motion.div style={{width:"50%"}} initial={{y:15, x:211, scale:1.3}} aniamte={{y:30,opacity:1}} transition={{duration:2}} >
            <Row>
                <motion.a >Home &nbsp;</motion.a>
                <motion.a >About &nbsp;</motion.a>
                <motion.a >Portfolio &nbsp;</motion.a>
                <motion.a >Resume &nbsp;</motion.a>
                <motion.a >Contact &nbsp;</motion.a>
            </Row>
        </motion.div>
    )
}

export default Navbar;


// items.map(({ item, props, key }) =>
//                 <Col  >{item}</Col>)