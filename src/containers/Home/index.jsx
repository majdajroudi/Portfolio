import React,{useState} from 'react';
import NameAnimated from "../../components/Name/index"
import Navbar from "./../../components/Navbar"

const Home = () => {
    const [introDone, setIntroDone] = useState(false)    

    return(
        <>
            <NameAnimated introCheck={setIntroDone}/>
            {/* <Navbar /> */}
        </>
    )
}

export default Home