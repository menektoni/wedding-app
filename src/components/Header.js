import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Formulario</Link></li>
          <li><Link to="/GeneralInfo">Información General</Link></li>
          <li><Link to="/Planes">Pre/Post Boda</Link></li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
