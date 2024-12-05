import React from "react";
import BenefitsBar from "../components/Benefits/BenefitsBar/BenefitsBar";
import "./HomePage.css";
import BarCard from "../components/Cards/BarCard/BarCard";
import Description from "../components/Description/Description";
import img1 from "../assets/pretty.jpg";

function HomePage() {
  return (
    <>
      <section className="home-page">
        <header className="header">
          <Description
            button="¡Comprar ahora!"
            description="Simplifica tu vida digital con PasSave, el gestor de contraseñas que asegura tus datos y facilita tu acceso a todas tus cuentas. Olvídate de recordar múltiples contraseñas y mantén tu información protegida con alta encriptación. ¡Comienza hoy y lleva tu seguridad al siguiente nivel!"
            h1="PasSave, adquiere tu servicio de gestor de contraseñas HOY"
            img={img1}
          />
        </header>
        <div className="body">
          <BarCard />
        </div>
        <footer className="foot-container">
          <BenefitsBar />
        </footer>
      </section>
    </>
  );
}

export default HomePage;
