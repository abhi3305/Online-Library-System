import React from 'react';
import { Link } from 'react-router-dom';

function Book({ book }) {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default Book;
