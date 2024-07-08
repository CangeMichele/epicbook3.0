//----- Componenti react
import { useContext, React } from "react";

//----- Componenti react-router-dom
import { useParams } from "react-router-dom";

//----- Componenti react-bootstrap
import { Row, Col, Card } from "react-bootstrap";

//----- Componenti App
import CommentsArea from "../Components/SingleBookComponents/CommentArea";

//----- Context
import { BookCategory } from "../modules/Context";

//----- Json
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

const jsonCategory = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

export default function BookDetailes() {
  const { asin } = useParams();
  const [category, setCategory] = useContext(BookCategory);

  const book = jsonCategory[category].find((book) => book.asin === asin);

  const title = book.title;
  const img = book.img;
  const price = book.price;

  return (
    <>
      <Row>
        <Col>
          <Card className="mb-3" style={{ maxWidth: "540px" }}>
            <Row className="g-0">
              <Col md={4}>
                <Card.Img
                  src={img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="mt-5">
                    <p><b>Prezzo: </b>€{price}</p>
                    <p><b>Ctegoria: </b>{category}</p>
                  </Card.Text>
                  <Card.Text>
                    <small className="text-body-secondary">
                    asin: {asin}
                    </small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
 
        <Col>
          <CommentsArea asin={asin} />
        </Col>
      </Row>
    </>
  );
}
