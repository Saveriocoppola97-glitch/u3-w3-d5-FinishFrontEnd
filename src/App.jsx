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
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={2}>
            <SideBarLeft />
          </Col>
          <Col style={{ backgroundColor: "#1f1f1f" }}>
            <SideBarTop />
            <MainHero />
            <NewSeason />
            <New />
            <Other />
          </Col>
          <footer style={{ backgroundColor: "#323232" }}>
            <Footer />
          </footer>
        </Row>
      </Container>
    </>
  );
}

export default App;
