import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Githubusers from './Github/Githubusers';




class App extends React.Component{

  render(){
    return (

        <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Githubusers}/>
              </Switch>
        </BrowserRouter>
    )
  }
}

export default App;