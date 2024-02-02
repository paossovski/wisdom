import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from './templates/Home';
import HomePage from './templates/HomePage';

export const Rotas = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/HomePage" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}