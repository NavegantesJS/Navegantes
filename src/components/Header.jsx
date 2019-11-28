import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';
import logoIcon from '../static/images/logo.svg';
import userIcon from '../static/images/user.svg';

const Header = () => (
  <header className="wrapper-header">
    <div className="container">
      <div className="menu">
        <span />
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logoIcon} alt="Logo Navegantes" />
          <span>Navegantes</span>
        </Link>
      </div>
      <div className="user">
        <img src={userIcon} alt="Menu de usuario" />
      </div>
    </div>
  </header>
);

export default Header;
