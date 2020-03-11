import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

import home from './views/home';
import singleBeer from './views/singleBeer';
import listBeers from './views/listBeers';
import newBeer from './views/newBeer';
import randomBeer from './views/randomBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={home} exact />
            <Route path="/beer/:id" component={singleBeer} exact />
            <Route path="/listBeers" component={listBeers} exact />
            <Route path="/newBeer" component={newBeer} exact />
            <Route path="/randomBeer" component={randomBeer} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
