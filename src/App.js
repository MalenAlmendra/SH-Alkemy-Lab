import { useState, useEffect } from "react";
import SearchHero from "./pages/SearchHero/SearchHero";
import HeroTeam from "./pages/HeroTeam/HeroTeam";
import Login from "./pages/Login/Login";
import HeroDetails from "./pages/HeroDetails/HeroDetails";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [team, setTeam] = useState([]);
  const [goodHeroes,setGoodHeroes]=useState([])
  const [badHeroes,setBadHeroes]=useState([])

  const selectGoodAndBadHeroes=()=>{
    team.forEach(hero=>{
      if(hero.biography.alignament==='good'){
        setGoodHeroes(hero)
      }
      if(hero.biography.alignament==='bad'){
        setBadHeroes(hero)
      }
      
    })
  }

  const takeSelectedHero = (heroObj) => {
    setTeam((prevState) => [...prevState, heroObj]);
  };
  const deleteHero = (idHero) => {
    console.log(idHero)
    const heroFiltered=team.filter(hero=>hero.id!==idHero)
    setTeam(heroFiltered)
  };

  console.log(team);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeroTeam team={team} deleteHero={deleteHero} />
        </Route>
        <Route path="/search-heroes" component={SearchHero}>
          <SearchHero takeSelectedHero={takeSelectedHero} team={team} />
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
