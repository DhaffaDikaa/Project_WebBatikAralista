import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProfilUsaha from './JS/ProfilUsaha.jsx';
import Edukasi from './JS/Edukasi.jsx';
import ArtikelDetail from './JS/ArtikelDetail.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Root default agar tidak blank */}
        <Route path="/" element={<ProfilUsaha />} />

        {/* Rute untuk halaman Profil Usaha */}
        <Route path="/profil-usaha" element={<ProfilUsaha />} />

        {/* Rute untuk halaman Edukasi */}
        <Route path="/edukasi" element={<Edukasi />} />

        {/* Rute dinamis untuk menangkap Detail Artikel 1, 2, dan 3 tanpa terpotong */}
        <Route path="/artikel/:id" element={<ArtikelDetail />} />
      </Routes>
    </Router>
  );
}

export default App;