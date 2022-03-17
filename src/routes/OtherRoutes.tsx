import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CompaniesViews from '../pages/Companies';
import CompaniesCreate from '../pages/Companies/companies.create';
import CompaniesUpdate from '../pages/Companies/companies.update';

const OtherRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/empresas" element={<CompaniesViews />} />
        <Route path="/empresas/create" element={<CompaniesCreate />} />
        <Route path="/empresas/:id/update" element={<CompaniesUpdate />} />
        <Route path="*" element={<Home />} />
      </Routes >
    </BrowserRouter>

  );

};

export default OtherRoutes;