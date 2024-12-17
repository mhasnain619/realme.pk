import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';

function OffcanvasExample() {
    return (
        <Navbar expand="lg" className="bg-body-light sticky-navbar">
            <Container fluid>
                <Navbar.Brand className="logo" href="#">realme</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="logo" id="offcanvasNavbarLabel-expand-lg">realme</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto">
                            <Nav.Link className="navlinks" href="#home">realme smartphone</Nav.Link>
                            <Nav.Link className="navlinks" href="#features">narzo smartphone</Nav.Link>
                            <Nav.Link className="navlinks" href="#features">Audio</Nav.Link>
                            <Nav.Link className="navlinks" href="#features">Accessories</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link className="navlinks" href="#profile">Brand</Nav.Link>
                            <Nav.Link className="navlinks" href="#settings">Support</Nav.Link>
                            <Nav.Link className="navlinks" href="#settings">Community</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default OffcanvasExample;
