import React from 'react';
import './App.css';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Detail from './pages/detail/Detail';

export default function App() {

  return (
    <div className="App">
      <div className="container">
        <HashRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={List} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/404" render={() => {
              return <h3>404</h3>
            }} />
            <Redirect from="*" to="/404" />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    </div>
  )

}
