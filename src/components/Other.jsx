import { Row, Col, Button } from "react-bootstrap";

const GridExample = function () {
  return (
    <>
      <Row xs={1} lg={3} className="g-1 my-3">
        <Col>
          <Button
            style={{ fontSize: "0.7rem" }}
            className="text-danger text-start bg-dark border-0 w-100 d-flex justify-content-between"
          >
            Esplora per Genere
            <i className="bi bi-chevron-right"></i>
          </Button>
        </Col>
        <Col>
          <Button
            style={{ fontSize: "0.7rem" }}
            className="text-danger text-start bg-dark border-0 w-100 d-flex justify-content-between"
          >
            Worldwide
            <i className="bi bi-chevron-right"></i>
          </Button>
        </Col>
        <Col>
          <Button
            style={{ fontSize: "0.7rem" }}
            className="text-danger text-start bg-dark border-0 w-100 d-flex justify-content-between"
          >
            Video musicali
            <i className="bi bi-chevron-right"></i>
          </Button>
        </Col>
      </Row>
      <Row xs={1} lg={3} className="g-1 my-3">
        <Col>
          <Button
            style={{ fontSize: "0.7rem" }}
            className="text-danger text-start bg-dark border-0 w-100 d-flex justify-content-between"
          >
            Decenni
            <i className="bi bi-chevron-right"></i>
          </Button>
        </Col>
        <Col>
          <Button
            style={{ fontSize: "0.7rem" }}
            className="text-danger text-start bg-dark border-0 w-100 d-flex justify-content-between"
          >
            Classifiche
            <i className="bi bi-chevron-right"></i>
          </Button>
        </Col>
        <Col>
          <Button
            style={{ fontSize: "0.7rem" }}
            className="text-danger text-start bg-dark border-0 w-100 d-flex justify-content-between"
          >
            Nuovi artisti
            <i className="bi bi-chevron-right"></i>
          </Button>
        </Col>
      </Row>
      <Row xs={1} lg={3} className="g-1 my-3">
        <Col>
          <Button
            style={{ fontSize: "0.7rem" }}
            className="text-danger text-start bg-dark border-0 w-100 d-flex justify-content-between"
          >
            Attività e stati d'animo
            <i className="bi bi-chevron-right"></i>
          </Button>
        </Col>
        <Col>
          <Button
            style={{ fontSize: "0.7rem" }}
            className="text-danger text-start bg-dark border-0 w-100 d-flex justify-content-between"
          >
            Audio spaziale
            <i className="bi bi-chevron-right"></i>
          </Button>
        </Col>
        <Col>
          <Button
            style={{ fontSize: "0.7rem" }}
            className="text-danger text-start bg-dark border-0 w-100 d-flex justify-content-between"
          >
            Hit del passato
            <i className="bi bi-chevron-right"></i>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default GridExample;
