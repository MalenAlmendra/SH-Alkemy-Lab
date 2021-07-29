import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const HeroDetails = () => {
  const { idHero } = useParams();
  const [completeHero, setCompleteHero] = useState({});
  const fetchData = async () => {
    const data = await axios.get(
      `https://superheroapi.com/api.php/2880712572242850/${idHero}`
    );
    setCompleteHero(data.data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  console.log(completeHero);
  return (
    <div className="container">
      <Navbar />
      <h1>
        {idHero} - {completeHero.name}
      </h1>
      <p>Peso.</p>
      <p>Altura.</p>
      <p>Nombre.</p>
      <p>Alias.</p>
      <p>Color de ojos.</p>
      <p>Color de cabello.</p>
      <p>Lugar de trabajo.</p>
    </div>
  );
};

export default HeroDetails;
