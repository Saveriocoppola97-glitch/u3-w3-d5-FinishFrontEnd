import { Row, Col } from "react-bootstrap";
import img3 from "../assets/images/2a.png";
import img4 from "../assets/images/2b.png";
import img5 from "../assets/images/2c.png";
import img6 from "../assets/images/2d.png";
import img7 from "../assets/images/2e.png";

const NewSeason = function () {
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
      <Row className="g-3">
        <Col>
          <img className="img-fluid rounded-2 mb-1" src={img3} alt="img1" />
          <div className="d-flex justify-content-between align-item-center">
            <p style={{ fontSize: "0.7rem" }} className="m-0 small">
              Prólogo con Abuelo
            </p>
            <p
              style={{ fontSize: "0.5rem" }}
              className="bg-secondary m-0 p-1 text-black py-1 px-2 "
            >
              E
            </p>
          </div>
        </Col>
        <Col>
          <img className="img-fluid rounded-2 mb-1" src={img4} alt="img2" />
          <p style={{ fontSize: "0.7rem" }} className="m-0 small">
            The Wanderer
          </p>
        </Col>
        <Col>
          <img className="img-fluid rounded-2 mb-1" src={img5} alt="img2" />
          <p style={{ fontSize: "0.7rem" }} className="m-0 small">
            Michael Buble & Carly Pearce
          </p>
        </Col>
        <Col>
          <img className="img-fluid rounded-2 mb-1" src={img6} alt="img2" />
          <p style={{ fontSize: "0.7rem" }} className="m-0 small">
            Stephan Moccio: The Zane Lowe Interview
          </p>
        </Col>
        <Col>
          <img className="img-fluid rounded-2 mb-1" src={img7} alt="img2" />
          <p style={{ fontSize: "0.7rem" }} className="m-0 small">
            Chart Spotlight: Julia Michaels
          </p>
        </Col>
      </Row>
    </>
  );
};
export default NewSeason;
