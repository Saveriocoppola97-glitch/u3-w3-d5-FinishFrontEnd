import { Nav, Form } from "react-bootstrap";
import logoMusic from "../assets/logos/music.svg";

const SideBarLeft = function () {
  return (
    <div className="mt-2">
      <img style={{ width: "80px" }} src={logoMusic} alt="logo-Apple" />
      <div className="d-flex align-items-center border border-secondary rounded p-1 px-2 my-4">
        <i className="bi bi-search text-danger me-2"></i>
        <Form.Control
          type="search"
          placeholder="Cerca"
          className="bg-dark border-0 shadow-none p-0 text-white small"
        />
      </div>

      <Nav className="flex-column">
        <Nav.Link
          href="#"
          className="sidebar-item d-flex align-items-center gap-2 text-light py-1 px-2 rounded"
        >
          <i className="bi bi-house-door text-danger"></i>
          Home
        </Nav.Link>

        <Nav.Link
          href="#"
          className="sidebar-item d-flex align-items-center gap-2 text-light py-1 px-2 rounded"
        >
          <i className="bi bi-grid text-danger"></i>
          Novità
        </Nav.Link>

        <Nav.Link
          href="#"
          className="sidebar-item d-flex align-items-center gap-2 text-light py-1 px-2 rounded"
        >
          <i className="bi bi-broadcast text-danger"></i>
          Radio
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideBarLeft;
