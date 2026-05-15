import { Row, Col } from "react-bootstrap";
import img1 from "../assets/images/1a.png";
import img2 from "../assets/images/1b.png";

const MainHero = function () {
  return (
    <>
      <h2 className="mt-2 m-0">Novità</h2>
      <hr className="my-1 bg-secondary" />
      <Row>
        <Col>
          <p className="text-uppercase fw-light fs-6 text-secondary m-0">
            Nuova stazione radio
          </p>
          <h6 className="small">
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
          </h6>
          <img className="img-fluid rounded-2" src={img1} alt="img1" />
        </Col>
        <Col>
          <p className="text-uppercase fw-light fs-6 text-secondary m-0">
            Nuova stazione radio
          </p>
          <h6 className="small">Ecco la nuova casa della musica latina</h6>
          <img className="img-fluid rounded-2" src={img2} alt="img2" />
        </Col>
      </Row>
    </>
  );
};
export default MainHero;
