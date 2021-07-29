import { useState, useEffect } from "react";
import SearchHero from "./pages/SearchHero/SearchHero";
import HeroTeam from "./pages/HeroTeam/HeroTeam";
import Login from "./pages/Login/Login";
import HeroDetails from "./pages/HeroDetails/HeroDetails";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [team, setTeam] = useState([]);
  const [quantityGoodHeroes, setQuantityGoodHeroes] = useState(0);
  const [quantityBadHeroes, setQuantityBadHeroes] = useState(0);

  const selectGoodAndBadHeroes = () => {
    setQuantityGoodHeroes(0);
    setQuantityBadHeroes(0);

    const goodHeroes = team.filter(
      (hero) => hero.biography.alignment === "good"
    );
    const badHeroes = team.filter(
      (hero) => hero.biography.alignment === "bad"
    );

    setQuantityGoodHeroes(goodHeroes.length);
    setQuantityBadHeroes(badHeroes.length);
  };

  useEffect(() => {
    selectGoodAndBadHeroes();
  }, [team]);

  const takeSelectedHero = (heroObj) => {
    if(heroObj.biography.alignment==='good'){
      if(quantityGoodHeroes<=3){
        setTeam((prevState) => [...prevState, heroObj]);
      }
    }

    if(heroObj.biography.alignment==='bad'){
      if(quantityBadHeroes<=3){
        setTeam((prevState) => [...prevState, heroObj]);
      }
    }
  };

  const deleteHero = (idHero) => {
    console.log(idHero);
    const heroFiltered = team.filter((hero) => hero.id !== idHero);
    setTeam(heroFiltered);
  };

  console.log(team);
  console.log("Cantidad de Buenos: " + quantityGoodHeroes);
  console.log("Cantidad de Malos: " + quantityBadHeroes);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeroTeam team={team} deleteHero={deleteHero} />
        </Route>
        <Route path="/search-heroes" component={SearchHero}>
          <SearchHero takeSelectedHero={takeSelectedHero} team={team} quantityGoodHeroes={quantityGoodHeroes} quantityBadHeroes={quantityBadHeroes}/>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/:idHero">
          <HeroDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
