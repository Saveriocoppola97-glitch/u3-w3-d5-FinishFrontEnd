import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Other from "./components/Other";
import SideBarLeft from "./components/SideBarLeft";
import SideBarTop from "./components/SideBarTop";
import MainHero from "./components/MainHero";
import NewSeason from "./components/NewSeason";
import New from "./components/New";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={2}>
          <SideBarLeft />
        </Col>
        <Col xs={12} md={10} style={{ backgroundColor: "#1f1f1f" }}>
          <SideBarTop />
          <MainHero />
          <NewSeason />
          <New />
          <Other />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
