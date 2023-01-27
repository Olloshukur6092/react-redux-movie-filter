import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="header">
      <Container>
        <Link to="/" className="nav-link">
          <Navbar.Brand className="navBrand">Navbar</Navbar.Brand>
        </Link>
        <Nav className="ms-auto nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
