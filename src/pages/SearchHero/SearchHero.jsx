import React, { useState } from "react";
import axios from "axios";
import HeroCard from "../../components/HeroCard/HeroCard";
import Navbar from "../../components/Navbar/Navbar";
const url = "https://superheroapi.com/api.php/2880712572242850/search";

const SearchHero = ({
  team,
  takeSelectedHero,
  quantityGoodHeroes,
  quantityBadHeroes,
}) => {
  const [heroes, setHeroes] = useState([]);
  const [heroSearched, setHeroSearched] = useState("");
  const [isShowAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const getHero = () => {
    axios
      .get(`${url}/${heroSearched}`)
      .then((response) => {
        console.log(response.data.results);
        handleSetHeroes(response.data.results);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const handleSetHeroes = (heroesArray) => {
    setHeroes(heroesArray);
  };

  const handleSetHeroSearched = (heroFinded) => {
    setHeroSearched(heroFinded.target.value);
    console.log(heroFinded.target.value);
  };

  const searchHero = (e) => {
    e.preventDefault();
    getHero();
  };

  const selectHeroes = (id) => {
    console.log(id);
    if (team.length < 6) {
      heroes.forEach((hero) => {

        if (quantityGoodHeroes === 3 && hero.biography.alignment === "good") {
          setShowAlert(true);
          setAlertMessage("Cupos de Superheroes Llenos");
          setTimeout(() => {
            setShowAlert(false);
          }, 2300);
        } else if (
          quantityBadHeroes === 3 &&
          hero.biography.alignment === "bad"
        ) {
          setShowAlert(true);
          setAlertMessage("Cupos de Supervillanos Llenos");
          setTimeout(() => {
            setShowAlert(false);
          }, 2300);
        } else if (hero.id === id) {
          takeSelectedHero(hero);
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <div className="col-3">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleSetHeroSearched(e)}
              value={heroSearched}
            />
            <button
              class="btn btn-outline-success"
              type="submit"
              onClick={(e) => searchHero(e)}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row mt-3">
        {heroes === undefined || heroes.length === 0 ? (
          <div className="">
            <h1 className="Display">
              🐱‍👤 No hay resultados disponibles 🐱‍👤
            </h1>
            <p>Por favor, intente de nuevo con otra palabra</p>
          </div>
        ) : (
          heroes.map((hero) => (
            <div className="col-3">
              <HeroCard
                key={hero.id}
                id={hero.id}
                heroObject={hero}
                selectHeroes={selectHeroes}
              />
            </div>
          ))
        )}
      </div>
      <div className="row">
        <div className="col-4">
          <div
            class={`alert alert-warning alert-dismissible fade position-fixed bottom-0 end-0 ${
              isShowAlert ? "show" : ""
            }`}
            role="alert"
          >
            {alertMessage}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
