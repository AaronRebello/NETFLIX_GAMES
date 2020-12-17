import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActionGames from './components/scripts/action/ActionGames';
import ActionAdventureGames from "./components/scripts/action-adventure/ActionAdventureGames"
import LogicGames from "./components/scripts/logic/LogicGames"
import AdventureGames from "./components/scripts/adventure/AdventureGames"
import PuzzleGames from "./components/scripts/puzzle/PuzzleGames"
import RacingGames from "./components/scripts/racing/RacingGames"
import SimulationGames from "./components/scripts/simulation/SimulationGames"
import SportsGames from "./components/scripts/sports/SportsGames"
import StrategyGames from "./components/scripts/strategy/StrategyGames"
import WarGames from "./components/scripts/war/WarGames"
import Login from "./components/scripts/login-page/Login"
import GetStarted from "./components/scripts/login-page/GetStarted"
// import {Provider} from "react-redux"

function App() {
  return (
<Router>
<Route exact path="/" component={GetStarted}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/actiongames" component={ActionGames} />
<Route exact path="/actionadventuregames" component={ActionAdventureGames} />
<Route exact path="/adventuregames" component={AdventureGames} />
<Route exact path="/logicgames" component={LogicGames} />
<Route exact path="/puzzlegames" component={PuzzleGames} />
<Route exact path="/racinggames" component={RacingGames} />
<Route exact path="/simulationgames" component={SimulationGames} />
<Route exact path="/sportsgames" component={SportsGames} />
<Route exact path="/strategygames" component={StrategyGames} />
<Route exact path="/wargames" component={WarGames} />

</Router>

  );
}

export default App;
