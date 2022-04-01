import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Detail from './components/Detail';


function App() {
  return (
    <BrowserRouter>                 
    <div className="App">
      <Switch>
        <Route exact path = '/' component= {Home}/>
        <Route path = "/detail" component= {Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
