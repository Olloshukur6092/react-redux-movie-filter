import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <Navbar.Brand href="#home" className="navBrand">
          Navbar
        </Navbar.Brand>
        <Nav className="ms-auto nav-links">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Register</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
