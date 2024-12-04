import React from "react";
import "./Description.css";

function Description(props) {
  let { h1, description, img, button } = props;
  return (
    <section className="header-description">
      <article className="description-img">
        <img src={img} />
      </article>
      <article className="description-info">
        <h1>{h1}</h1>
        <p>{description}</p>
        <button>{button}</button>
      </article>
    </section>
  );
}

export default Description;
