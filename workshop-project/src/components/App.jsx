import { useState } from 'react'
import '../styles/App.css'
import * as React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Locaux from "../pages/Locaux";
import Missions from "../pages/Missions";
import Home from "../pages/Home";

const App = () => {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locaux" element={<Locaux />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>

  );
};

export default App;