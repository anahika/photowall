import React from "react";
import Photo from "../photo/Photo";
import { Link } from "react-router-dom";

function Photowall(props) {
  return (
    <div>
      <Link className="addIcon" to="/add-photo">
        +
      </Link>
      <div className="photoGrid">
        {props.posts
          .sort((x, y) => y.id - x.id)
          .map((post, index) => (
            <Photo key={index} post={post} index={index} {...props} />
          ))}
      </div>
    </div>
  );
}

export default Photowall;
