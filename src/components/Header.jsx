import React from 'react';
import '../styles/components/Header.scss';
import logo from '../static/images/logo.svg';

const Header = () => (
  <header className="wrapper-header">
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo Navegantes" />
        <span>Navegantes</span>
      </div>
    </div>
  </header>
);

export default Header;
