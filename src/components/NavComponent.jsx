import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../assets/logo.png';
import '../styles/nav.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function NavComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img className="logo_img" src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Link to="/login" >
            <Button variant="outline-light" className="btn_connexion">Connexion <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline-info">Inscription <FontAwesomeIcon icon={faUser} /></Button>
          </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;