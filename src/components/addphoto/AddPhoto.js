import React from "react";
import { useNavigate } from "react-router-dom";

function AddPhoto(props) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.desciption.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };

    if (description && imageLink) {
      props.startAddingPost(post);
      navigate("/");
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Link" name="link"></input>
        <input type="text" placeholder="Description" name="desciption"></input>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default AddPhoto;
