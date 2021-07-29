import React from "react";
import { Link } from "react-router-dom";
const HeroCard = ({ id, heroObject, isInTeam = false, selectHeroes, deleteHero }) => {
  const { image, name} = heroObject;

  return (
    <div key={id} className="mt-3 card" style={{ width: "18rem" }}>
      <img src={image.url} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        {isInTeam ? (
          <>
            <Link exact to={`/${id}`} className="btn btn-info">
              Ver Detalles
            </Link>
            <Link className="btn btn-danger" onClick={()=>deleteHero(id)}>Eliminar</Link>
          </>
        ) : (
          <button className="btn btn-success" onClick={() => selectHeroes(id)}>
            Select Hero
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroCard;
