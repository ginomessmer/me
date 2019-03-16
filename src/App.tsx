import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route to="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
