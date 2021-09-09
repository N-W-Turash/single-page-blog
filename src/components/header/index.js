import { Navbar, Container, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useHistory, useRouteMatch } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "../../stylesheets/components/header/index.scss";

function Header() {

  let history = useHistory();
  let match = useRouteMatch("/posts/:id");
  
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
          {
            match && match.isExact ?
              <Button
                variant="outline-secondary"
                className="float-right btn-capsule px-4"
                size="sm"
                onClick={() => history.push("/")}
              >
                Back to all posts
              </Button> : ("")
          }

        </Container>
      </Navbar>
    </>
  );
}
export default Header;


