import React,{useState} from 'react';
import NameAnimated from "../../components/Name/index"
import Navbar from "../../components/Navbar/index"
import {motion} from "framer-motion"
import "./index.css"

const Home = () => {
    const [introDone, setIntroDone] = useState(false)
    
    const transformStyle = {
        transform: "translateX(-50px)"
    }

    return(
        <div className="home__content">
            <motion.div
            initial={{y:-150}}
            animate={{
              x: !introDone?10: -300,
              y: -150,
              scale: !introDone? 1: 0.87,
              rotate: 0,
            }}
            transition={{duration:1}}>
            <NameAnimated style={introDone? transformStyle:""} introCheck={setIntroDone} introDone={introDone}/>
            </motion.div>
            {introDone? <Navbar /> : ""}
            {/* <Skills /> */}
            
        </div>
    )
}

export default Home