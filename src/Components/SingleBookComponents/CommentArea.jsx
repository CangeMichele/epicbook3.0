//----- Componenti react
import { React, useState, useEffect } from "react";

//----- Componenti app
import CommentList from "./CommentAreaComponents/CommentList";
import AddComment from "./CommentAreaComponents/AddComment";
import Loader from "../Loader";

//----- CommentArea.jsx
function CommentsArea({ asin }) {
  // dichiarazione delle costanti
  const [loader, setLoader] = useState(false); // Stato del loader
  const [handleCommentsBook, setHandleCommentsBook] = useState([]); // Stato dei Commenti
  const [updateListComment, setUpdateListComment] = useState(false); // Stato aggiornamento elenco commenti

  const url = `https://striveschool-api.herokuapp.com/api`;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQwYzlhZDE2N2U1MzAwMTVmYTY4NmIiLCJpYXQiOjE3MTk3NTczMzQsImV4cCI6MTcyMDk2NjkzNH0.D9zj_TmuUKWu_tkMuiKbooHNL26OBKMcmez7AvINsHE";
  useEffect(() => {
    if (!asin) {
      return;
    } //blocca la fetch se non è presente asin

    setLoader(true);

    //Get dei commenti del libro
    fetch(url + `/books/${asin}/comments`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setHandleCommentsBook(data))

      .catch((error) =>
        console.error("errore nel caricamento dei commenti", error)
      )

      .finally(() => {
        setLoader(false);
      });
  }, [asin, updateListComment]); // useEffect

  // console.log(handleCommentsBook);

  return (
    <>
      {!asin && <p>seleziona un libro</p>}

      {asin && (
        <>
          {loader && <Loader />}
          <p>{asin}</p>

          <AddComment
            bookId={asin}
            updateListComment={updateListComment}
            setUpdateListComment={setUpdateListComment}
            token={token}
          />

          <CommentList
            commentsBook={handleCommentsBook}
            updateListComment={updateListComment}
            setUpdateListComment={setUpdateListComment}
            token={token}
          />
        </>
      )}
    </>
  );
}
export default CommentsArea;
