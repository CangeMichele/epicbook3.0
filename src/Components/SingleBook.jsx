//----- Componenti react
import { React, useContext } from "react";
//----- Componenti react-bootstrap
import { Card, Col, Button } from "react-bootstrap";
//----- Componenti react-router-dom
import { useNavigate } from "react-router-dom";

//----- Context
import { Theme } from "../modules/Context";

//----- SingleBook.jsx
function SingleBook({ bookProp, selected, setSelected }) {
  const [themeContext] = useContext(Theme);

  function borderSelected(selected, themeContext) {
    if (selected === bookProp.asin) {
      if (themeContext === "light") {
        return "5px solid red";
      } else if (themeContext === "dark") {
        return "5px solid grey";
      }
    } else {
      return "none";
    }
  }

  const navigate = useNavigate();

  return (
    <Col>
      <Card className="my-card">
        <Card.Img
          className={selected === bookProp.asin ? "selected" : ""}
          variant="top"
          alt={`copertina ${bookProp.asin}`}
          src={bookProp.img}
          style={{ border: borderSelected(selected, themeContext) }}
          onClick={() =>
            setSelected(selected === bookProp.asin ? false : bookProp.asin)
          }
        />
        <Card.Body>
          <Card.Title className="my-card-title">{bookProp.title}</Card.Title>
          { selected === bookProp.asin&& <Button
            variant={themeContext === "dark" ? "secondary" : "info"}
            className="w-100 my-2"
            onClick={() => navigate(`/details/${bookProp.asin}`)}
          >
            Dettagli
          </Button>}
        </Card.Body>
      </Card>
    </Col>
  );
}
export default SingleBook;
