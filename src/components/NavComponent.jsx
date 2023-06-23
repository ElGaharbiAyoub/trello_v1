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
import { useEffect } from 'react';
import { render } from 'react-dom';


function NavComponent({isAuth, userAuth, setUserAuth, setIsAuth}) {
  const logout = ()=> {
    setIsAuth(false);
    setUserAuth("");
  }
  useEffect(()=> {
    render;
  },[isAuth])

  console.log(userAuth)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img className="logo_img" src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {
            isAuth ?
                <>
                  <span className='text-info fw-bold'>{userAuth}</span>
                <Nav>
                  <Link to="/login" >
                    <Button variant="outline-light" className="btn_connexion btn btn-primary" onClick={()=>logout()}>Logout <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
                  </Link>
                </Nav>
                </>
                :
                <Nav>
                  <Link to="/login" >
                    <Button variant="outline-light" className="btn_connexion">Connexion <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline-info">Inscription <FontAwesomeIcon icon={faUser} /></Button>
                  </Link>
                </Nav>


          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;