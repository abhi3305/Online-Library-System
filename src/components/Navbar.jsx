import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/browse">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
}

export default Navbar;
