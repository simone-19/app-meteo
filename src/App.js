import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import City from "./components/City";
import Imgfissa from "./components/Imgfissa";
import { useState } from "react";

function App() {
  const [lat, setlat] = useState(null);

  const [lon, setlon] = useState(null);

  const [cityname, setcityname] = useState(null);
  const setcoordinate = (data) => {
    setlat(data[0].lat);
    setlon(data[0].lon);
    setcityname(data[0].local_names.it);
  };
  console.log(lat);
  console.log(lon);

  return (
    <>
      <Container>
        <MyNav setcoordinate={setcoordinate} />
        {!lat && !lon && !cityname && (
          <div id="main">
            <Imgfissa />
          </div>
        )}
        {lat && lon && (
          <City latitudine={lat} longitudine={lon} cityname={cityname} />
        )}
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
