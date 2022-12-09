import Heder from "./Heder";
import Hero from "./Hero";
import Home from "./Home";
import Login from './Login'
import Nomath from './Nomatch'
import SingelPage from "./SingelPage";
import Registreation from './Registreation'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Heder />
      <Switch>
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
        <Route path='/article/:slug' component={SingelPage} />
        <Route path='#'>
          <Nomath />
        </Route>
      </Switch>
    </>
  );
}

export default App;
