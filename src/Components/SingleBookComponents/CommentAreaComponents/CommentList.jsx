//----- Componenti react
import { React } from "react";

//----- Componenti react-bootstrap
import { ListGroup } from "react-bootstrap";

//----- Componenti app
import SingleComment from "./SingleComment";


//---- GetComments.jsx
function CommentList({
  commentsBook,
  updateListComment,
  setUpdateListComment,
  token
}) {
  
  return (
    <>
      <p>Commenti:</p>
      <ListGroup>
        {commentsBook.map((commentBook) => (
         
         <SingleComment
            key={commentBook._id}
            commentProp={commentBook}

            //prendo lo stato ereditato da CommentArea e lo porto in SingleComment
            updateListComment={updateListComment}
            setUpdateListComment={setUpdateListComment}
            token = {token}
          />


        ))}
      </ListGroup>
    </>
  );
}
export default CommentList;
