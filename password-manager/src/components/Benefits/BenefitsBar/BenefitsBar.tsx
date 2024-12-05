import React from "react";
import BenefitsIcon from "../BenefitsIcon/BenefitsIcon";
import "./BenefitsBar.css";

function BenefitsBar() {
  return (
    <section className="footer">
      <BenefitsIcon icono="key" text="Seguridad" />
      <BenefitsIcon icono="groups" text="Retroalimentación" />
      <BenefitsIcon icono="star_half" text="Reputación" />
      <BenefitsIcon icono="install_desktop" text="Multi dispositivo" />
    </section>
  );
}

export default BenefitsBar;
