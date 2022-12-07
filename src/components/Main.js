import React, { useEffect, useState } from "react";
import Photowall from "./photowall/Photowall";
import { Route, Routes, Link } from "react-router-dom";
import AddPhoto from "./addphoto/AddPhoto";
import Single from "../components/single/Single";

function Main(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    props.startLoadingPost().then(() => {
      setLoading(false);
    });
    props.startLoadingComments();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>
        {" "}
        <Link to="/">Photowall</Link>
      </h1>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Photowall {...props} />
            </div>
          }
        />

        <Route path="/add-photo" element={<AddPhoto {...props} />} />
        <Route
          path="/single/:id"
          element={<Single {...props} loading={loading} />}
        />
      </Routes>
    </div>
  );
}

export default Main;
