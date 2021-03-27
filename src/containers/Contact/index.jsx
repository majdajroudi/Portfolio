import React,{useState} from "react";
import "./index.css";
import emailjs from 'emailjs-com';
import {Row, Form, Input, Button, message} from "antd";
import {motion} from "framer-motion";
import {pageTransitions, transitionProperties} from "./../../components/HelperFunctions/index";

const Contact = () => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setFormState({...formState, [e.target.name]: value })
    }

    const sendEmail = (e) => {
        emailjs.sendForm('service_jczbbdr', 'template_a1e9xei', e.target.parentElement.form, 'user_3L99vhLla4mDlgFbYgmSn')
          .then((result) => {
              console.log(result.text);
              message.success("Success! Thank you for getting in touch")
          }, (error) => {
              console.log(error.text);
          });
    }

    const handleSend = (e) => {
        if (formState.firstName !== "" && formState.email !== "" && formState.message !== "") {
            sendEmail(e)
            setFormState({
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            })
        }
        else {
            message.error("Please fill all the required fields")
        }
    }
    

    return (
        <motion.div 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageTransitions}
        transition={transitionProperties}
        className="pageWrapper"
        key="/contact">

            <Row className="contact">
                <h3 className="contact__title">Contact Me</h3>
                 <Form className="contact__form"  >
                   <Form.Item  label="" rules={[{required: true, message: "First name is required"}]}>
                        <Input name="firstName" 
                                onChange={(e) => handleChange(e)}
                                placeholder= "First name" 
                                value={formState.firstName}/>
                    </Form.Item>
                   <Form.Item  label="" rules={[{required: false}]}>
                        <Input 
                        placeholder="Last name" 
                        value={formState.lastName}
                        name="lastName" 
                        onChange={(e) => handleChange(e)}/>
                    </Form.Item>
                    <Form.Item label="" rules={[{required: true, message: "Email is required"}]}>
                        <Input 
                        placeholder="Email" 
                        value={formState.email}
                        name="email" 
                        onChange={(e) => handleChange(e)}/>
                    </Form.Item>
                    <Form.Item label=""  rules={[{required: true, message: "Please type in your message!"}]}>
                        <Input.TextArea 
                        placeholder="Type in your message!" 
                        value={formState.message}
                        name="message" 
                        onChange={(e) => handleChange(e)}/>
                    </Form.Item>
                    <Button type="primary" onClick={handleSend} htmlType="submit" >
                        Send
                    </Button>
                </Form> 
            </Row>
            
        </motion.div>
    )
}

export default Contact

