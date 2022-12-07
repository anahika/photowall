import React from "react";
import Photo from "../photo/Photo";
import Comment from "../comments/Comment";
import { useParams } from "react-router-dom";

function Single(props) {
  const params = useParams();
  const id = params.id;
  // eslint-disable-next-line
  const index = props.posts.findIndex((post) => post.id == id);

  const comments = props.comments[params.id] || [];
  // eslint-disable-next-line
  let post = props.posts.find((post) => post.id == id);

  if (props.loading === true)
    return (
      <div data-testid="loading" className="loader">
        ...loading
      </div>
    );
  else if (post) {
    return (
      <div className="single-photo">
        <Photo post={post} {...props} index={index} />
        <Comment
          startAddingComment={props.startAddingComment}
          comments={comments}
          id={id}
        />
      </div>
    );
  } else
    return (
      <div data-testid="no-post" className="loader">
        ...no post found
      </div>
    );
}

export default Single;
