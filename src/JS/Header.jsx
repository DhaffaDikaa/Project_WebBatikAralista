import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Image/logo.png" alt="Aralista" />
      </div>

      <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setShowMenu(false)}>Beranda</Link>
        </li>
        <li>
          <Link to="/katalog" className={location.pathname === '/katalog' ? 'active' : ''} onClick={() => setShowMenu(false)}>Katalog</Link>
        </li>
        <li>
          <Link to="/edukasi" className={location.pathname === '/edukasi' ? 'active' : ''} onClick={() => setShowMenu(false)}>Edukasi</Link>
        </li>
        <li>
          <Link to="/profil-usaha" className={location.pathname === '/profil-usaha' ? 'active' : ''} onClick={() => setShowMenu(false)}>Profil Usaha</Link>
        </li>
        <li>
          <Link to="/kontak" className={location.pathname === '/kontak' ? 'active' : ''} onClick={() => setShowMenu(false)}>Kontak</Link>
        </li>
      </ul>

      {/* Nav Actions (Keranjang & Profil) tetap terjaga di desktop maupun mobile */}
      <div className="nav-actions">
        <Link to="/keranjang" aria-label="Keranjang">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <span className="divider">|</span>
        <Link to="/profil-user" aria-label="Profil">
          <i className="fas fa-user"></i>
        </Link>
      </div>

      {/* Tombol Hamburger dengan fungsionalitas klik state React */}
      <div className="hamburger" id="hamburger-btn" onClick={() => setShowMenu(!showMenu)}>
        <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Header;