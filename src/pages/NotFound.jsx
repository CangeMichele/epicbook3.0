//----- Componenti react
import { useContext, React } from "react";

//----- Componenti react-bootstrap
import { Alert } from "react-bootstrap";

//----- Context
import { Theme } from "../modules/Context";



//----- Welcome.jsx -----
function ErrorPage() {
  const [themeContext] = useContext(Theme);

  return (
    <>
      <Alert variant={themeContext==='dark' ? 'dark ' : 'danger '} className="text-center">
        <h1>Pagina non trovata</h1>
        <h3>Errore 404</h3>
      </Alert>
    </>
  );
}

export default ErrorPage;
