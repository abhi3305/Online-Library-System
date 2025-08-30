import React from 'react';
import { Link } from 'react-router-dom';
import './NoteFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
