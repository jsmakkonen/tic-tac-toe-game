import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Board } from './components/board';
import { Scoreboard } from './components/scoreboard'
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return(
      <div className="app">
        <Header />
          <BrowserRouter>
            <Route exact path="/" component={Scoreboard}/>
            <Route path="/board" component={Board}/>
          </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App;