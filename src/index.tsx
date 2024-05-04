import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testpage from './pages/Testpage';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsCo2 from './pages/WhatsCo2';
import LegalNotice from './pages/LegaNotice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="bg-primary min-h-screen w-screen text-primaryText overflow-x-hidden flex flex-col">
      <BrowserRouter>
        <Navigation />

        <div className="p-5 mt-16">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/testpage" element={<Testpage />} />
            <Route path="/what_is_co2" element={<WhatsCo2 />} />
            <Route path="/legal_notice" element={<LegalNotice />} />
          </Routes>
        </div>
        
        <Footer />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

reportWebVitals();
