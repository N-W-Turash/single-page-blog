import { Navbar, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import "../../stylesheets/components/header/index.scss";

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Blog Logo"
              src={Logo}
              className="d-inline-block brand-logo"
            />
            <h6 className="d-inline-block fw-bold">BLOG</h6>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;


