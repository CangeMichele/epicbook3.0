//----- Componenti react-bootstrap
import {Button, Spinner } from 'react-bootstrap';


//----- Spinner.jsx
function Loader() {
  return (
    <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Caricamento...
      </Button>
    </>
  );
}

export default Loader;