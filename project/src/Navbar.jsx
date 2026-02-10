import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.module.css';
import logo from './assets/img/logo.jpg'



function BasicExample() {
  return (
    <>
    
    <Navbar expand="lg" className={styles.bodytertiary}>
      <Container>
        <img className={styles.logo} src={logo} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navmain}>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">MENS</Nav.Link>
             <Nav.Link href="#link">GALLERY</Nav.Link>
             <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title="COLLECTIONS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Polos</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Hoodies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>

    
  );
}

export default BasicExample;