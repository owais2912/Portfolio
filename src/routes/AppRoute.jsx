import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/index';
import routesConfig from './routesConfig';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routesConfig.home} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
