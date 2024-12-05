import React from "react";
import IndividualCard from "../IndividualCard/IndividualCard";
import "./BarCard.css";
import img1 from "../../../assets/plan_1.jpeg";
import img2 from "../../../assets/plan_2.jpeg";
import img3 from "../../../assets/plan_3.jpeg";

function BarCard() {
  return (
    <section className="bar-card">
      <IndividualCard
        img={img1}
        description="Individual plan"
        price="US $150/Y"
      />
      <IndividualCard img={img3} description="Family plan" price="US $300/Y" />
      <IndividualCard
        img={img2}
        description="Enterprise plan"
        price="US $1550/Y"
      />
    </section>
  );
}

export default BarCard;
