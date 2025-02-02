import React, { useState } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY,
    [progress, setProgress] = useState(0),
    categories = [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ]

  return (
    <>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar categories={categories} />

        <Routes>
          <Route exact path="/" element={<News apiKey={API_KEY} setProgress={setProgress} category="general" />}></Route>

          {categories.map((category, index) => {
            return <Route key={index} exact path={`/${category}`} element={<News key={index} apiKey={API_KEY} setProgress={setProgress} category={category} />}></Route>
          })}

        </Routes>

      </Router>
    </>
  )
}

export default App
