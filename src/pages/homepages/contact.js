import React from "react"
import Layout from "../../components/layout"
import { title, pageStyle } from "./about.module.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {textArea,buttonStyle}from "./contact.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <div className={pageStyle}>
        <div style={{ paddingBottom: 15 }}>
          <h1 className={title}>Contact</h1>
        </div>
        <Form name="contact" method="POST" data-netlify="true">
          <Form.Group className="mb-3" >
            <Form.Label>Your First Name</Form.Label>
            <Form.Control type="text" name="firstname" placeholder="First name here" required={true}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Your Last Name</Form.Label>
            <Form.Control type="text" name="lastname" placeholder="Last name here" required={true}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="text" name="email" placeholder="Email here" required={true} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" placeholder="Title here" required={true}/>
          </Form.Group>
          <Form.Group className={textArea}>
          <Form.Label>Your Message</Form.Label>
          <textarea name="message" required={true}></textarea>
          </Form.Group>
          <input type="hidden" name="form-name" value="contact" />
          <div className={buttonStyle}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </div>
        </Form>
      </div>
    </Layout>
  )
}

export default IndexPage
