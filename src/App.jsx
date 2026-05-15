import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import SideBarLeft from "./components/SideBarLeft";
import SideBarTop from "./components/SideBarTop";
import MainHero from "./components/MainHero";
import NewSeason from "./components/NewSeason";

import { Container, Row, Col } from "react-bootstrap";
import New from "./components/New";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2} lg={3}>
          <SideBarLeft />
        </Col>
        <Col className="bg-black">
          <SideBarTop />
          <MainHero />
          <NewSeason />
          <New />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
