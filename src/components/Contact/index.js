import React from 'react';
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import backdrop from '../../assets/cover/dark.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <Container className='top-bottom-space'>
      <center><h1>Contact Me</h1></center>
      <CardGroup className="text-white">
        <Col md="7" lg="4" className='px-2 py-2 mx-auto'>
          <Card className="border-0">
            <Card.Img src={backdrop} alt="Card image"/>
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
              <Card.Text className='center'>
                <span className="title"><FontAwesomeIcon icon={faGithub}/> Github</span>
                <br/>
                <a className='no-decor' href="https://github.com/ManoLo2ManoLo" target="_blank" rel='noreferrer'>
                  https://github.com/ManoLo2ManoLo
                </a>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md="7" lg="4" className='px-2 py-2 mx-auto'>
          <Card className="border-0">
            <Card.Img src={backdrop} alt="Card image"/>
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
              <Card.Text className='center'>
                <span className="title"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</span>
                <br/>
                <a className='no-decor' href="https://www.linkedin.com/in/manuel-canas-menendez/" target="_blank" rel='noreferrer'>
                  https://www.linkedin.com/in/manuel-canas-menendez/
                </a>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md="7" lg="4" className='px-2 py-2 mx-auto'>
          <Card className="border-0">
            <Card.Img src={backdrop} alt="Card image"/>
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
              <Card.Text className='center'>
                <span className="title"><FontAwesomeIcon icon={faEnvelope}/> Email</span>
                <br/>
                <a className='no-decor' href="mailto:manuel.canas.menendez@gmail.com" target="_blank" rel='noreferrer'>
                    manuel.canas.menendez@gmail.com
                </a>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </CardGroup>
    </Container>
  )
}

export default Contact;