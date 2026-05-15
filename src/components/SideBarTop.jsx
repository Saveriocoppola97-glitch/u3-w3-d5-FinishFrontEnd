import { Button, Row, Col } from "react-bootstrap";
const MainContent = function () {
  return (
    <Row className="bg-black">
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Button className="bg-danger fw-bold">
        <span className="me-1">
          <i class="bi bi-person"></i>
        </span>
        Accedi
      </Button>
    </Row>
  );
};
export default MainContent;
