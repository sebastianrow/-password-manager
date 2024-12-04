import React from "react";
import "./IndividualCard.css";

function IndividualCard(props) {
  let { img, price, description } = props;
  return (
    <section className="individual-card">
      <img src={img} alt="" />
      <p className="description">{description}</p>
      <div className="card-bottom">
        <p className="pricing">{price}</p>
        <button id="get-button">Get now</button>
      </div>
    </section>
  );
}

export default IndividualCard;
