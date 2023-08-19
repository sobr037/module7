import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import BitcoinPage from '../pages/Bitcoin';

// Import or define your PageNotFound component here
// import PageNotFound from './PageNotFound';

function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}

        <Route index element={<Homepage {...props} />} />


      {/* Add routes for other pages as needed */}


        <Route path="/login" element={<Login />} />
        <Route path="/bitcoin" element={<BitcoinPage />} />

      {/* Route for handling undefined paths */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
