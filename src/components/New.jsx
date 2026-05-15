import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const New = function () {
  const [tracks, setTracks] = useState([]);

  const getApi = function () {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=Michael%20Jackson",
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella risposta del server");
        }
      })
      .then((data) => {
        setTracks(data.data);
      })
      .catch((err) => {
        console.log("Errore:", err);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="d-flex align-items-center gap-1 mb-1 mt-3">
        <p style={{ fontSize: "0.7rem" }} className="m-0 fw-semibold lh-1">
          Nuovi episodi radio
        </p>
        <i className="bi bi-chevron-right"></i>
      </div>
      <Row className="g-3">
        {tracks.slice(0, 8).map((song) => (
          <Col xs={6} lg={3} key={song.id}>
            <Card className="border-0 mb-1">
              <Card.Img src={song.album.cover_medium} />
            </Card>
            <div className="d-flex justify-content-between align-items-start">
              <span style={{ fontSize: "0.6rem" }}>{song.title}</span>
              <span
                style={{ fontSize: "0.5rem" }}
                className="bg-secondary text-black px-2 py-1"
              >
                E
              </span>
            </div>
            <span
              className="d-block"
              style={{
                fontSize: "0.6rem",
                lineHeight: "1",
              }}
            >
              {song.artist.name}
            </span>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default New;
