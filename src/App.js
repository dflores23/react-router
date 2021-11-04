import React from 'react';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import About from './pages/About'
import { Route, Switch } from 'react-router-dom';




function App(props) {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route>
          <About />
        </Route>
        <Route path="/stocks/:symbol" 
        render={(routerProps) =>  <Stocks {...routerProps}/>}
        />
      </Switch>
      
    </div>
  );
}

export default App;
