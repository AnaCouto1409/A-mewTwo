import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import pages from './pages'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/matricula" element={<Matricula />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;