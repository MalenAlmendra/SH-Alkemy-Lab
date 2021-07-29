import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const HeroDetails = () => {
  const { idHero } = useParams();
  const [completeHero, setCompleteHero] = useState({});
  const [isLoading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://superheroapi.com/api.php/2880712572242850/${idHero}`)
      .then((response) => {
        const { data } = response;
        setCompleteHero(data);
        setLoading(false);
      });
  };

  if (isLoading === false) {
    console.log(completeHero);
    console.log(completeHero.appearance);
    console.log(completeHero.name);
    console.log(completeHero.work);
    console.log(completeHero.biography);
  }

  return (
    <div className="container">
      <Navbar />
      {isLoading || isLoading === null ? (
        <div>Cargando </div>
      ) : (
        <div className='d-flex'>
          <div className="col-6">
            <h1>{completeHero.name}</h1>
            <p>Peso: {completeHero.appearance.weight[1]}</p>
            <p>Altura: {completeHero.appearance.height[1]}</p>
            <p>
              Alias:
              {completeHero.biography.aliases[0]}
            </p>
            <p>Color de ojos: {completeHero.appearance["eye-color"]}</p>
            <p>Color de cabello: {completeHero.appearance["hair-color"]}</p>
            <p>Lugar de trabajo: {completeHero.work.base}</p>
          </div>
          <div className="col-6">
            <img src={completeHero.image.url} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroDetails;
