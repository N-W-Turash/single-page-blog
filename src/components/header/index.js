import { Navbar, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import "../../stylesheets/components/header/index.scss";

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <img
              alt="Blog Logo"
              src={Logo}
              className="d-inline-block brand-logo"
            />
            <h6 className="d-inline-block fw-bold ls-1">BLOG</h6>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;


