// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import FormPage from './Components/FormPage';
import ResultPage from './Components/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/form/:username" element={<FormPage/>} />
        <Route path="/result/:username" element={<ResultPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
