import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <div className="bottom">
      <Navbar sticky='bottom' bg="dark" variant="dark">
        <Nav className='mx-auto'>
            <Nav.Link className='footer-icon' href="https://github.com/ManoLo2ManoLo" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></Nav.Link>
            <Nav.Link className='footer-icon' href="https://www.linkedin.com/in/manuel-canas-menendez/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}/></Nav.Link>
            <Nav.Link className='footer-icon' href="mailto:manuel.canas.menendez@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></Nav.Link>
        </Nav> 
      </Navbar>
    </div>
  )
}

export default Footer;