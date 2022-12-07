import React from "react";

function Comment(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    props.startAddingComment(comment, props.id);
    e.target.elements.comment.value = "";
  };
  return (
    <div className="comment">
      {props.comments.map((comment, index) => (
        <p role="paragraph" key={index}>
          {comment}
        </p>
      ))}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="comment" name="comment" />
        <input type="submit" hidden data-testid="button" />
      </form>
    </div>
  );
}

export default Comment;
