import '../styles/App.css'
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Locaux from "../pages/Locaux";
import Missions from "../pages/Missions";
import Home from "../pages/Home";

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoianVqdTE0OSIsImEiOiJjbG5hNHR2MjUwMGRjMmlvM2l3amV0aTYwIn0.QlDL3RVdUNFWPx9gfMPQgA';

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