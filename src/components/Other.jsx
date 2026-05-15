import { Row, Col, Button } from "react-bootstrap";

const GridExample = function () {
  return (
    <>
      <Row className="g-3 my-3">
        <Col>
          <Button className="text-danger text-start bg-dark border-0 w-100">
            Esplora per Genere
          </Button>
        </Col>
        <Col>
          <Button className="text-danger text-start bg-dark border-0 w-100">
            Worldwide
          </Button>
        </Col>
        <Col>
          <Button className="text-danger text-start bg-dark border-0 w-100">
            Video musicali
          </Button>
        </Col>
      </Row>
      <Row className="g-3 my-3">
        <Col>
          <Button className="text-danger text-start bg-dark border-0 w-100">
            Decenni
          </Button>
        </Col>
        <Col>
          <Button className="text-danger text-start bg-dark border-0 w-100">
            Classifiche
          </Button>
        </Col>
        <Col>
          <Button className="text-danger text-start bg-dark border-0 w-100">
            Nuovi artisti
          </Button>
        </Col>
      </Row>
      <Row className="g-3 my-3">
        <Col>
          <Button className="text-danger text-start bg-dark border-0 w-100">
            Attività e stati d'animo
          </Button>
        </Col>
        <Col>
          <Button className="text-danger text-start bg-dark border-0 w-100">
            Audio spaziale
          </Button>
        </Col>
        <Col>
          <Button className="text-danger text-start bg-dark border-0 w-100">
            Hit del passato
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default GridExample;
