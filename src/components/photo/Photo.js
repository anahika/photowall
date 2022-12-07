import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Photo(props) {
  const post = props.post;

  const navigate = useNavigate();

  const handleRemove = (i, id) => {
    props.startDeletingPost(i, id);
    navigate("/");
  };

  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img
          className="photo"
          src={post.imageLink}
          alt={post.description}
        ></img>
      </Link>
      <figcaption>
        <p role="paragraph">{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button onClick={() => handleRemove(props.index, post.id)}>
          Remove
        </button>
        <Link className="button" to={`/single/${post.id}`}>
          <div className="comment-count" data-testid="comment-count">
            <div className="speech-bubble"> </div>
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </div>{" "}
        </Link>
      </div>
    </figure>
  );
}

export default Photo;
