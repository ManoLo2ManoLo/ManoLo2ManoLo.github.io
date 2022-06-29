import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import iconImage from '../../assets/icons/icon.png';

function About() {
  return (
    <Container className='top-bottom-space'>
      <Row>
        <h1 className='center'>About Me</h1>
      </Row>

      <Row>
        <Col md="5" className="d-flex justify-content-center">
          <img src={iconImage}  alt='icon' style={{ width: "80%" }} className="mx-auto"/>
        </Col>

        <Col md="6" className='d-flex align-items-center my-2'>
          <p>
            I am a Full Stack Web Developer with an educational background in Criminal Justice. I recently earned a certificate in Full Stack 
            Development from Rutgers University, where I developed front and back-end skills. Looking forward to 
            continuing to learn, collaborate, and problem-solving.
          </p>
        </Col>
      </Row>
    </Container>
      
  )
}

export default About;