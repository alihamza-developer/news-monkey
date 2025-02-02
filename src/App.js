import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {

  categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ]


  render() {
    return (
      <>
        <Router>

          <Navbar categories={this.categories} />

          <Routes>
            <Route exact path="/" element={<News category="general" />}></Route>

            {this.categories.map((category, index) => {
              return <Route key={index} exact path={`/${category}`} element={<News key={index} category={category} />}></Route>
            })}

          </Routes>

        </Router>
      </>
    )
  }
}

export default App;