import { Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const New = function () {
  
    return (
        <>
    <div className="d-flex align-items-center mb-1 mt-3">
      <p
        style={{ fontSize: "0.7rem" }}
        className="m-0 fw-semibold lh-1 d-flex align-items-center"
      >
        Nuovi episodi radio
      </p>
      <i className="bi bi-chevron-right"></i>
    </div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </>
}

export default New;
