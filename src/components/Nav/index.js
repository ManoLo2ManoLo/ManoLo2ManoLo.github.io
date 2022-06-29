import React from 'react';
import resumePDF from '../../assets/pdf/resume.pdf';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation(props) {
    const {
        aboutSelected,
        setAboutSelected,
        workSelected,
        setWorkSelected,
        contactSelected,
        setContactSelected,
    } = props;

    function about() {
        setAboutSelected(true)
        setWorkSelected(false)
        setContactSelected(false)
    }

    function work() {
        setAboutSelected(false)
        setWorkSelected(true)
        setContactSelected(false)
    }

    function contact() {
        setAboutSelected(false)
        setWorkSelected(false)
        setContactSelected(true)
    }

    return (
        <>
            {['md'].map((expand) => (
                <Navbar fixed="top" key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/">MANOLO</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                            <Offcanvas.Body>
                                <Nav>
                                    <Nav.Link onClick={() => about()} className={`mx-2 ${aboutSelected && 'navActive'}`}>About Me</Nav.Link>
                                    <Nav.Link onClick={() => work()} className={`mx-2 ${workSelected && 'navActive'}`}>My Work</Nav.Link>
                                    <Nav.Link onClick={() => contact()} className={`mx-2 ${contactSelected && 'navActive'}`}>Contact Me</Nav.Link>

                                    <NavDropdown title="Resume" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href={resumePDF} target="_blank" rel="noreferrer noopener" download>Download Resume</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Navigation;