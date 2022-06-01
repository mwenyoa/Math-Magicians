import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="d-flex s-between">
    <h1>Math Magicians</h1>
    <nav className="d-flex">
      <Link to="/home">Home</Link>
      <Link to="/quote">Qoute</Link>
      <Link to="/Calculator">Calculator</Link>
    </nav>
  </header>
);

export default Header;
