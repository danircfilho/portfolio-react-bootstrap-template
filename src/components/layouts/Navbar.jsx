import { Link } from 'react-router-dom';

//Estilos
import styles from './Navbar.module.css';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MenuApp() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React com Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className={styles.menuAdjust}>
            <Nav className="me-auto justify-content-end">
              <Nav.Link>
                <Link to="/card">Cards</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/form">Form</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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