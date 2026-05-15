import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import SideBarLeft from "./components/SideBarLeft";
import { Container, Row, Col } from "react-bootstrap";
import SideBarTop from "./components/SideBarTop";

function App() {
  return (
    <>
      <Container className="m-0 p-3">
        <Row>
          <Col xs={12} md={2} lg={3}>
            <SideBarLeft />
          </Col>
          <Col>
            <SideBarTop />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
