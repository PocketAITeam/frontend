import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/images/logo.svg';
import logoPng from '../../assets/images/logo.png';

import './Navbar.css';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="navbar-custom my-4">
            <Container
                fluid
                className="d-flex justify-content-between align-items-center"
            >
                {/* اللوجو */}
                <Navbar.Brand href="#" className="me-auto">
                    <img src={logoPng} alt="Pocket AI" />
                    <span className="logo-text ms-2">Pocket AI</span>
                </Navbar.Brand>

                {/* اللينكات */}
                <Nav className="mx-auto d-none d-lg-flex links">
                    <Nav.Link href="#action1">Features</Nav.Link>
                    <Nav.Link href="#action2">How it Works</Nav.Link>
                    <Nav.Link href="#action3">FAQ</Nav.Link>
                    <Nav.Link href="#action4">Download</Nav.Link>
                </Nav>

                {/* الزرار */}
                <Button
                    variant="outline-success"
                    className="ms-auto language-button"
                >
                    English
                    <i className="fas fa-chevron-down ms-1"></i>
                </Button>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
