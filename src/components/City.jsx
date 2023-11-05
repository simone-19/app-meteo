import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
// import { } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const City = ({ latitudine, longitudine, cityname }) => {
  console.log(latitudine);
  const [prev, setprev] = useState(null);
  const getprev = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitudine +
        "&lon=" +
        longitudine +
        "&appid=94bd9d2062c0dcd6e965728bf445a7b2&units=metric&lang=it"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        setprev(data);
        console.log("prev", data);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  useEffect(() => {
    getprev();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitudine, longitudine, cityname]);
  console.log(prev);
  return (
    prev && (
      <Card id="cardy" className="100vh">
        <Card.Header as="h5">CITTA' : {cityname}</Card.Header>
        <Row>
          <Card.Body className=" d-flex justify-content-around mt-2">
            <Col>
              <Card.Title className="d-flex mb-3">
                TEMPO : {prev.weather[0].description}
              </Card.Title>
              <Card.Title className="d-flex  mb-3">
                UMIDITA' : {prev.main.humidity}%
              </Card.Title>
            </Col>
            <Col>
              <Card.Title className="d-flex  mb-3">
                TEMP.MIN : {prev.main.temp_min}°
              </Card.Title>
              <Card.Title className="d-flex  mb-3">
                TEMPO.MAX : {prev.main.temp_max}°
              </Card.Title>
            </Col>
            <Col>
              <Card.Title className="d-flex  mb-3">
                TEMPERATURA : {prev.main.temp}°
              </Card.Title>
            </Col>
          </Card.Body>
        </Row>
        <img
          className="mt-3"
          src="https://www.veneto.info/wp-content/uploads/sites/114/previsioni-meteo-hd.jpg"
          alt="meteo"
        />
      </Card>
    )
  );
};
export default City;
