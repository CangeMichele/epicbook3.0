//----- Componenti react
import { useContext, React } from "react";
//----- Componenti react-bootstrap
import { Button } from "react-bootstrap";

//----- Componenti app
import AllTheBooks from "./AllTheBooks";

//----- Context
import { Theme, BookCategory } from "../modules/Context";

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

//----- Categorys.jsx
function Categorys({ search }) {
  const themeContext = useContext(Theme);

  const [categoryContext, setCategoryContext] = useContext(BookCategory);

  const categoryList = Object.keys(jsonCategory);

  const thisCategory = jsonCategory[categoryContext]; //associo la categoria attuale al suo file json 

  return (
    <>
      {categoryList.map((categ) => (
        <Button
          variant={categoryContext === categ ? "secondary" : themeContext}
          className="m-1"
          onClick={() => setCategoryContext(categ)}
        >
          {categ}
        </Button>
      ))}

      {thisCategory && <AllTheBooks category={thisCategory} search={search} />}

    </>
  );
}
export default Categorys;
