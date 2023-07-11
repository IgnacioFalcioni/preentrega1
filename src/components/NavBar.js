import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';




function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">PET CLUB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Acerca de</Nav.Link>
            
          </Nav>
          
        </Container>
        <CartWidget/>
      </Navbar>
      
      
    </>
  );
}

export default NavBar;