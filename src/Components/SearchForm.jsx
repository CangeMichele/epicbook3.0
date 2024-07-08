//----- Componenti react
import { React } from "react";
//----- Componenti react-bootstrap
import {Form } from "react-bootstrap";

//----- SearchForm.jsx
function SearchForm({ search, handleSearch }) {
  return (
    <>
      <Form.Group className="m-3">
        <Form.Control
          type="search"
          placeholder={`cerca...`}
          value={search}
          onChange={handleSearch}
        />
      </Form.Group>
    </>
  );
}

export default SearchForm;
