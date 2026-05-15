import { Row, Col } from "react-bootstrap";
import img1 from "../assets/images/1a.png";
import img2 from "../assets/images/1b.png";

const MainHero = function () {
  return (
    <>
      <h2 className="mt-2 m-0">Novità</h2>
      <hr className="my-1 bg-secondary" />
      <Row>
        <Col xs={12} md={6} className="d-flex flex-column">
          <div className="flex-grow-1">
            <p className="text-uppercase fw-light text-secondary m-0 small">
              Nuova stazione radio
            </p>
            <h6 className="small mb-2">
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </h6>
          </div>
          <img className="img-fluid rounded-2 mt-auto" src={img1} alt="img1" />
        </Col>
        <Col className="d-flex flex-column">
          <div className="flex-grow-1">
            <p className="text-uppercase fw-light text-secondary m-0 small">
              Nuova stazione radio
            </p>
            <h6 className="small mb-2">
              Ecco la nuova casa della musica latina
            </h6>
          </div>
          <img className="img-fluid rounded-2 mt-auto" src={img2} alt="img2" />
        </Col>
      </Row>
    </>
  );
};
export default MainHero;
