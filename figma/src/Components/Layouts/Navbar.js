import { React } from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import "./Navbar.css";
const HeadNav = () => {
  return (
    <>
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="">
            <div className="logo container">
              <img alt="logo" src="logo.png" />
              <div className="box1">
                <h4>BID WINNER</h4>
              </div>
            </div>
          </Navbar.Brand>
          <Nav className="md-auto">
            <div className="container d-flex">
              <div>
                <Nav.Link>
                  <span>Dashboard</span>
                </Nav.Link>
              </div>
              <div>
                <Nav.Link>
                  <span>Jobs</span>
                </Nav.Link>
              </div>
              <div>
                <Nav.Link>
                  <span>Calender</span>
                </Nav.Link>
              </div>
              <div>
                <Nav.Link>
                  <span>Cost Catalog</span>
                </Nav.Link>
              </div>
              <div>
                <Nav.Link>
                  <span>Database</span>
                </Nav.Link>
              </div>
              <div>
                <Nav.Link>
                  <span>Tutorials</span>
                </Nav.Link>
              </div>
            </div>
          </Nav>
          <div className="content">
            <Row className="row1 ">
              <div className="col-lg-6">
                <h6>JaneCopper</h6>
                <p>janecopper@gmail.com</p>
              </div>
              <div className="col-lg-6">
                <img alt="" src="Janne.png" />
                <i class="ri-arrow-drop-down-fill"></i>
              </div>
            </Row>
          </div>
          <div className="content1">
            <span className="badge">1</span>
            <i class="ri-notification-3-line"></i>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default HeadNav;
