import React from "react";
import { Link } from "react-router-dom";

const Listing = ({
  image,
  header,
  description,
  bigdiv,
  imgdiv,
  worddiv,
  alink,
  classdiv
}) => (
    <div>
      <div id={bigdiv}>
        <div>
          <img src={image} alt={header} border="0" />
        </div>
        <div id={worddiv}>
          <h1>
            <a href={alink}>{header}</a>
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );

export default Listing;