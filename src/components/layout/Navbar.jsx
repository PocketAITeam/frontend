import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';

import './Navbar.css';

import logo from '../../assets/images/logo.svg';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="navbar-custom py-3">
            <Container
                fluid
                className="align-items-center justify-content-between"
            >
                {/* Logo */}
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <img src={logo} alt="Logo" />
                    <span className="logo-text">Pocket AI</span>
                </Navbar.Brand>

                {/* Toggle for mobile */}
                <Navbar.Toggle aria-controls="navbarScroll" />

                {/* Links */}
                <Navbar.Collapse
                    id="navbarScroll"
                    className="justify-content-center"
                >
                    <Nav className="navbar-links">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#howitworks">How it Works</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#download">Download</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Language button */}
                <Dropdown>
                    <Dropdown.Toggle variant="light" className="lang-btn">
                        English
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>العربية</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
