import './App.scss';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
