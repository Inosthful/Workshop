import { useState } from 'react'
import '../styles/App.css'
import * as React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Locaux from "../pages/Locaux";
import Missions from "../pages/Missions";
import Home from "../pages/Home";
import Login from '../pages/Login';
import SignInUser from '../pages/SignInUser';
import SignInOrg from '../pages/SignInOrg';
import RegisterUser from '../pages/RegisterUser';
import RegisterOrg from '../pages/RegisteroRG';


const App = () => {
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
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>

  );
};

export default App;