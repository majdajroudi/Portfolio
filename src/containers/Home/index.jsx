import React,{useState} from 'react';
import NameAnimated from "../../components/Name/index"

const Home = () => {
    const [introDone, setIntroDone] = useState(false)
    
    const transformStyle = {
        transform: "translateX(-50px)"
    }

    return(
        <>
            <NameAnimated style={introDone? transformStyle:""} introCheck={setIntroDone}/>
            {/* <Navbar /> */}
        </>
    )
}

export default Home