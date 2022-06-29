import React from 'react';
import Card from 'react-bootstrap/Card';

const Modal = ({ onClose, currentWork }) => {
    const { name, link, github, index, issue, technology } = currentWork;

    return (
        <div className='modalBackdrop' onClick={onClose}>
            <div className='modalContainer'>

              <Card bg="dark" text="white">
                <Card.Header>{name}</Card.Header>
                <Card.Body variant="flush">
                  <Card.Text>Link to Application: <a href={link} rel="noreferrer" target='_blank'>{link}</a></Card.Text>
                  <Card.Text>Link to Repository: <a href={github} rel="noreferrer" target='_blank'>{github}</a></Card.Text>
                </Card.Body>

                <Card.Img 
                  src={require(`../../assets/images/${index}.png`)}
                  alt='current work'
                  target='_blank'
                  className='px-5'
                />
                <Card.Footer className="text-muted mx-auto">{name} {issue}</Card.Footer>
                <Card.Footer className="text-muted mx-auto">Technology used are {technology}.</Card.Footer>
              </Card>
            </div>
        </div>
    )
}

export default Modal;