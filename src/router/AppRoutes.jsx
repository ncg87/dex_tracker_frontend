import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import VolumePage from '../pages/VolumePage';
import TokenPage from '../pages/TokenPage';
import DEXPage from '../pages/DEXPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/volume" element={<VolumePage />} />
    <Route path="/tokens/:token" element={<TokenPage />} />
    <Route path="/dexs/:dex" element={<DEXPage />} />
  </Routes>
);

export default AppRoutes;
