import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroCard from "../../components/HeroCard/HeroCard";
const HeroTeam = ({ team, deleteHero }) => {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        {team.length === 0 ? (
          <>
            <h1>Equipo de Superheroes</h1>
            <p>
              Este es el equipo de superheroes que te acompañara en toda tu
              aventura.
            </p>
            <p>
              Para seleccionar a otros heroes, ir a la seccion "Buscar Heroes"
            </p>
          </>
        ) : (
          team.map((hero) => (
            <div className="col-3">
              <HeroCard id={hero.id} heroObject={hero} isInTeam={true} deleteHero={deleteHero} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HeroTeam;
