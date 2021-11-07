import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = ({ members }) => {
  return (
    <Navbar bg="secondary" variant="light" sticky="top" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <span className="text-warning fs-2 logo">EVANESCENCE</span>
        </Navbar.Brand>

        <Nav
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {members.map((member) => (
            <LinkContainer
              className="fs-3 link-dark"
              to={`/members/${member.param}`}
            >
              <Nav.Link>{member.position}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
