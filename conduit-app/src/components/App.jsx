import Heder from "./Heder";
import Hero from "./Hero";
import Home from "./Home";
import Login from './Login'
import Article from "./Article";
import Registreation from './Registreation'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Heder />
      <Route path="/" exact>
        <Hero />
        <Home />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Registreation">
        <Registreation />
      </Route>
      <Route path='/Article'>
        <Article />
      </Route>
    </>
  );
}

export default App;
