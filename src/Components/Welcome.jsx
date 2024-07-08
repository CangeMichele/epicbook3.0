//----- Componenti react
import { useContext, React } from "react";

//----- Componenti react-bootstrap
import { Alert } from "react-bootstrap";

//----- Context
import { Theme } from "../modules/Context";



//----- Welcome.jsx -----
function Welcome() {
  const [themeContext] = useContext(Theme);

  return (
    <>
      <Alert variant={themeContext==='dark' ? 'secondary ' : 'primary '} className="text-center">
        <h1>Benvenuto su EpicBook</h1>
      </Alert>
    </>
  );
}

export default Welcome;
