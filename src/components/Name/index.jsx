import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap"
import Typical from "react-typical"
import Typist from "react-typist"


const NameAnimated = () => {
    const [firstDone, setFirstDone] = useState(false)
    const [secondDone, setSecondDone] = useState(false)

  const handleFirstDone = () =>{
    setFirstDone(true)
  }

  const handleSecondDone = () => {
    setSecondDone(true)
  }

  return (
    <div className="App">
        <h1 className="text">
        <Row>
            <Col md={{offset:4, span:4}} lg={{offset:4, span:4}}>
                <Typist cursor={{hideWhenDone:true,hideWhenDoneDelay: 0}} onTypingDone={handleFirstDone}>
                    <Typist.Delay ms={"500"}/>
                    <span className="developer-tag">{"<developer>"}</span>
                </Typist>
            </Col>
        </Row>
        <Row>
            <Col md={{offset:7, span:7}} lg={{offset:7, span:7}}>
                {secondDone? <Typist cursor={{hideWhenDone: true}}>
                    <Typist.Delay ms={"500"}/>
                    <span className="name">Majd Ajroudi</span>
                </Typist>:""}
            </Col>
        </Row>
        <Row>
            <Col md={{offset:10, span:10}} lg={{offset:10,span:10}}>
                {firstDone? <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 0}} onTypingDone={handleSecondDone}>
                    <Typist.Delay ms={"500"}/>
                    <span className="developer-tag">{"</developer>"}</span>
                </Typist>: ""}
            </Col>
        </Row>
          </h1>
    </div>
  );
}

export default NameAnimated;