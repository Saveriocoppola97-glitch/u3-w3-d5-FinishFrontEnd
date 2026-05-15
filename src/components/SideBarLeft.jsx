import { useState } from "react";
import { Nav, Form, Navbar, Offcanvas, Button } from "react-bootstrap";
import logoMusic from "../assets/logos/music.svg";

const SideBarLeft = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar className="d-md-none bg-dark d-flex justify-content-between align-items-center">
        <Button
          variant="link"
          className="text-light fs-3 p-0"
          onClick={() => setShow(true)}
        >
          <i className="bi bi-list"></i>
        </Button>
        <img style={{ width: "50px" }} src={logoMusic} alt="logo" />
        <Button size="sm" className="bg-danger fw-bold">
          Accedi
        </Button>
      </Navbar>
      <div className="d-none d-md-block mt-2">
        <img style={{ width: "80px" }} src={logoMusic} alt="logo" />

        <div className="d-flex align-items-center border border-secondary rounded my-4">
          <i className="bi bi-search text-danger mx-2"></i>
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="bg-dark border-0 shadow-none text-white small"
          />
        </div>
        <Nav className="flex-column gap-1">
          <Nav.Link className="text-light p-0 mx-2">
            <i className="bi bi-house-door text-danger me-2"></i>
            Home
          </Nav.Link>
          <Nav.Link className="text-light p-0 mx-2">
            <i className="bi bi-grid text-danger me-2"></i>
            Novità
          </Nav.Link>
          <Nav.Link className="text-light p-0 mx-2">
            <i className="bi bi-broadcast text-danger me-2"></i>
            Radio
          </Nav.Link>
        </Nav>
      </div>
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        className="bg-dark text-light"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <img style={{ width: "60px" }} src={logoMusic} alt="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              onClick={() => setShow(false)}
              className="text-light py-2"
            >
              <i className="bi bi-house-door text-danger me-2"></i>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => setShow(false)}
              className="text-light py-2"
            >
              <i className="bi bi-grid text-danger me-2"></i>
              Novità
            </Nav.Link>
            <Nav.Link
              onClick={() => setShow(false)}
              className="text-light py-2"
            >
              <i className="bi bi-broadcast text-danger me-2"></i>
              Radio
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideBarLeft;
