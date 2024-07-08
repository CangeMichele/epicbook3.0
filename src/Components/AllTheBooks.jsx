//----- Componenti react
import { React, useState } from "react";
//----- Componenti react-bootstrap
import { Row, Col } from "react-bootstrap";

//----- Componenti app
import SingleBook from "./SingleBook";
// import CommentsArea from "./SingleBookComponents/CommentArea";

//----- AllTheBooks.jsx
function AllTheBooks({ category, search }) {

  const [selected, setSelected] = useState(false);


  return (
    <Row>

      <Col>
        <Row>
          {category
            .filter(
              (book) => book.title.toLowerCase().includes(search.toLowerCase()) //filtro pops.book e genero array di corrispondenti
            )
            .map((book) => (
               //ciclo array e uso map per generare pagina
              <SingleBook key={book.asin} bookProp={book} selected={selected} setSelected={setSelected} /> 
            ))}
        </Row>
      </Col>
    </Row>
  );
}
export default AllTheBooks;
