/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

function Genres({ data }) {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((id) => {
        if (!genres[id]?.name) return;
        return (
          <div key={id} className="genre">
            {genres[id]?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Genres;
