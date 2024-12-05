import React from "react";
import "./BenefitsIcon.css";

function BenefitsIcon(props) {
  let { icono, text } = props;
  return (
    <section className="icon">
      <span className="material-symbols-outlined icon-self">{icono}</span>
      <p>{text}</p>
    </section>
  );
}

export default BenefitsIcon;
