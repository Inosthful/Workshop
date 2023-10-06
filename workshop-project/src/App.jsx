import './styles/App.css'
import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Locaux from "./pages/Locaux";
import Missions from "./pages/Missions";
import Home from "./pages/Home";
import Login from './pages/Login';
import SignInUser from './pages/SignInUser';
import SignInOrg from './pages/SignInOrg';
import RegisterUser from './pages/RegisterUser';
import RegisterOrg from './pages/RegisterOrg';
import Discount from './pages/Discount';
import Aos from 'aos';
import 'aos/dist/aos.css';

import mapboxgl from 'mapbox-gl';
import OrgaList from './pages/OrgaList';
import Orga from './pages/Orga';
mapboxgl.accessToken = 'pk.eyJ1IjoianVqdTE0OSIsImEiOiJjbG5hNHR2MjUwMGRjMmlvM2l3amV0aTYwIn0.QlDL3RVdUNFWPx9gfMPQgA';

const App = () => {
  
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locaux" element={<Locaux />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/signin/user" element={<SignInUser />} />
        <Route path="/login/signin/org" element={<SignInOrg />} />
        <Route path="/login/register/user" element={<RegisterUser />} />
        <Route path="/login/register/org" element={<RegisterOrg />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/organisations" element={<OrgaList />} />
        <Route path="/organisation/:id" element={<Orga />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>

  );
};

export default App;