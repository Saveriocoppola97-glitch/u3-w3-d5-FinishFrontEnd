import { Button, Row, Col, Form } from "react-bootstrap";
import logoApple from "../assets/logos/apple.svg";

const MainContent = function () {
  return (
    <Row className="align-items-center text-center top-bar text-secondary">
      <Col
        md={3}
        className="d-flex justify-content-center align-items-center gap-2"
      >
        <i className="bi bi-shuffle"></i>
        <i className="bi bi-skip-backward-fill fs-5"></i>
        <i className="bi bi-play-fill fs-2"></i>
        <i className="bi bi-skip-forward-fill fs-5"></i>
        <i className="bi bi-repeat"></i>
      </Col>
      <Col className="bg-secondary p-1" md={5}>
        <img
          style={{ width: "14px", filter: "invert(0.8)" }}
          src={logoApple}
          alt="logo-Apple-Music"
        />
      </Col>
      <Col md={2} className="d-flex align-items-center justify-content-center">
        <i className="bi bi-volume-up me-2"></i>
        <Form.Range className="w-50" />
      </Col>
      <Col md={2}>
        <Button className="bg-danger m-1 fw-bold">
          <span className="me-1">
            <i className="bi bi-person"></i>
          </span>
          Accedi
        </Button>
      </Col>
    </Row>
  );
};
export default MainContent;
