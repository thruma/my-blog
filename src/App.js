import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
         <NavBar />
         <div id="page-body">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/articles-list" component={ArticlesListPage} />
          <Route exact path="/article/:name" component={ArticlePage} />
         </div>
       </div>
      </Router>
    );
  }
}

export default App;
