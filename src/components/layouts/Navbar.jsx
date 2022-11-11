import { Link } from 'react-router-dom';

//Estilos
import styles from './Navbar.module.css';

//Imagem - Assets
import Logo from '../../assets/react.svg'

//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MenuApp() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className={styles.bg}>
      <Container>
        <Navbar.Brand className={styles.brand}>
          <Link to="/">
            <img 
              className="d-inline-block align-top" 
              src={Logo} 
              alt="React-Logo" 
              width="30" height="30" 
            />
          </Link>
          <Link to="/">React & Bootstrap</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className={styles.menuAdjust}>
            <Nav className="me-auto justify-content-end">
              <Nav.Link>
                <Link to="/card">Cards</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/form">Login</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                {/* div para estilizar o hover ao clicar */}
                <div className={styles.dropdown}>
                  <NavDropdown.Item>
                    <Link to="/">Action</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/">Another Action</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="/">Separated Link</Link>
                  </NavDropdown.Item>                
                </div>               
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//Nota: usando o Nav.Link
/*
  <Nav.Link href="/card">Cards</Nav.Link>
  <Nav.Link href="/form">Form</Nav.Link>
*/