import React, {useState} from "react"
import 'antd/dist/antd.css';
import {Col } from "antd"
import Typist from "react-typist"
import {motion} from "framer-motion"
import "./index.css"



const NameAnimated = ({introCheck, introDone}) => {
    const [nameTyped, setNameTyped] = useState(false)
    const [tagTyped, setTagTyped] = useState(false)

  const handleNameTyped = () =>{
    setNameTyped(true)
  }

  const handleTagTyped = () => {
    setTagTyped(true)
  }

  const handleTypingDone = () => {
      introCheck(true)
  }

  return (
    <div className="home__nameAnimation">
        <h1 className="text">
                <Col >
                    {nameTyped?<Typist cursor={{hideWhenDone:true,hideWhenDoneDelay: 0}} onTypingDone={handleTagTyped}>
                        <Typist.Delay ms={"500"}/>
                        <span className="developer-tag opener">{"<developer>"}</span>
                    </Typist>:""}
                </Col>
                <Col >
                    <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay:0}} onTypingDone={handleNameTyped}>
                        <Typist.Delay ms={"500"}/>
                        <span className="name">Majd Ajroudi</span>
                    </Typist>
                </Col>
                <Col >
                    {tagTyped? <Typist cursor={{hideWhenDone: true}} onTypingDone={handleTypingDone}>
                        <Typist.Delay ms={"500"}/>
                        <span className="developer-tag opener">{"</developer>"}</span>
                    </Typist>: ""}
                </Col>
          </h1>
    </div >
  );
}

export default NameAnimated;



// md={{offset:4, span:4}} lg={{offset:4, span:4}}
