import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar';

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

  state = {
    progress: 0
  }

  // Set Progress
  setProgress = (progress) => {
    this.setState({ progress });
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Navbar categories={this.categories} />

          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} category="general" />}></Route>

            {this.categories.map((category, index) => {
              return <Route key={index} exact path={`/${category}`} element={<News key={index} setProgress={this.setProgress} category={category} />}></Route>
            })}

          </Routes>

        </Router>
      </>
    )
  }
}

export default App;