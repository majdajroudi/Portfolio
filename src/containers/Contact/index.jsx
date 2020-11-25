import React from "react";
import "./index.css";
import {Sides} from "./../../components/Sides";
import {Row, Form, Input, Button} from "antd";

const Contact = () => {
    

    return (
        <div className="pageWrapper">
            <Sides />

            <Row className="contact">
                <h3 className="contact__title">Contact Me</h3>
                 <Form className="contact__form" >
                   <Form.Item  label="" name="fname" rules={[{required: true, message: "Input your first name"}]}>
                        <Input placeholder= "First name"/>
                    </Form.Item>
                   <Form.Item  label="" name="lname" rules={[{required: false, message: "Input your last name"}]}>
                        <Input placeholder="Last name"/>
                    </Form.Item>
                    <Form.Item label="" name="email" rules={[{required: true, message: "Input your email address"}]}>
                        <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item label="" name="message" rules={[{required: true, message: "Type in your message!"}]}>
                        <Input.TextArea placeholder="Type in your message!"/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" >
                            Send
                        </Button>
                    </Form.Item>
                </Form> 
            </Row>
            
            <Sides />
        </div>
    )
}

export default Contact

