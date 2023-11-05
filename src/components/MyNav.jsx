import { useState } from "react";
import { Navbar, Container, Form } from "react-bootstrap";

const MyNav = ({ setcoordinate }) => {
  const [city, setcity] = useState("");
  const search = (e) => {
    e.preventDefault();
    console.log(city);
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=1&appid=94bd9d2062c0dcd6e965728bf445a7b2&lang=it"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        setcoordinate(data);

        console.log("data", data);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };

  return (
    <Navbar id="nav" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand className="text-white fw-bold" href="#">
          EPIMETEO
        </Navbar.Brand>
        <Form onSubmit={search}>
          <input
            className="rounded-3"
            type="search"
            placeholder="cerca città..."
            value={city}
            onChange={(e) => {
              setcity(e.target.value);
            }}
          />
        </Form>
      </Container>
    </Navbar>
  );
};
export default MyNav;
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// key 94bd9d2062c0dcd6e965728bf445a7b2
