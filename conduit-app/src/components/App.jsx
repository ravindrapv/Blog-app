import React, { Component } from 'react'
import Heder from "./Heder";
import Hero from "./Hero";
import Home from "./Home";
import Login from './Login'
import Nomath from './Nomatch'
import SingelPage from "./SingelPage";
import Registreation from './Registreation'
import { Route, Switch } from 'react-router-dom'
import NewArticel from './NewArticel';
import Settings from './Settings';
import Profile from './Profile';
const localStorageKey = "app_users"
const userVerifiyURL = `https://conduitapi.onrender.com/api/user`
class App extends Component {

  state = {
    isLogin: false,
    user: null,
    isVerifiying: true,
  }

  componentDidMount() {
    const StorageKey = localStorage[localStorageKey];
    if (StorageKey) {
      this.setState({ isLogin: true });
      fetch(userVerifiyURL, {
        method: "GET",
        headers: {
          authorization: `Token${StorageKey}`
        }
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then(({ errors }) => {
            return Promise.reject(errors)
          });
        })
        .then(({ user }) => this.UpdatUser(user))
        .catch((errors) => console.log(errors))
    } else {
      this.setState({ isVerifiying: false })
    }
  }

  UpdatUser = (user) => {
    this.setState({ isLogin: true, user, isVerifiying: false });
    localStorage.setItem(localStorageKey, user.token)
  }
  render() {
    if (this.state.isVerifiying) {
      return <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-900"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-900"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-900"></div>
      </div>
    }
    return (
      <>
        <Heder isLogin={this.state.isLogin} user={this.state.user} />
        {
          this.state.isLogin ? <AuthUser user={this.state.user} /> : <UnAuthuser UpdatUser={this.UpdatUser} user={this.state.user} />
        }
      </>
    )
  }
}


function AuthUser(props) {
  return (
    <>
      <Route path="/" exact>
        <Hero />
        <Home />
      </Route>
      <Route path='/NewArticel'>
        <NewArticel />
      </Route>
      <Route path='/Settings'>
        <Settings />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
      <Route path='/article/:slug'>
        <SingelPage user={props.user} />
      </Route>
      <Route path='#'>
        <Nomath />
      </Route>
    </>
  )
}


function UnAuthuser(props) {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Home />
        </Route>
        <Route path="/Login">
          <Login UpdatUser={props.UpdatUser} />
        </Route>
        <Route path="/Registreation">
          <Registreation UpdatUser={props.UpdatUser} />
        </Route>
        <Route path='/article/:slug'>
          <SingelPage user={props.user} />
        </Route>
        <Route path='#'>
          <Nomath />
        </Route>
      </Switch>
    </>
  )
}
export default App