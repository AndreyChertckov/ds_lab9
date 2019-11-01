import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './components/LoginComponent';
import { Main } from './components/MainComponent'

import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Switch>
                  <Route exact path='/' component={Login}/>
                  <Route path='/main' component={Main}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
