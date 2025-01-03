import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';

class App extends Component {
  render() {
    return (
      <>

        <Navbar />
        <News />

      </>
    )
  }
}

export default App;