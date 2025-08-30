// src/pages/BrowseBooks.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';  // Import useSelector from Redux
import './BrowseBooks.css';

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState('');

  // Fetch books from the Redux store (this will now include the mock data as initial state)
  const books = useSelector((state) => state.books);  // Access the books from the Redux store

  // Filter books by category (if category exists)
  const filteredBooks = books.filter(book =>
    (category ? book.category.toLowerCase() === category.toLowerCase() : true) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) || 
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="browse-books">
      {/* Search Bar Container */}
      <div className="search-bar-container">
        <h2 className="text">Browse Books</h2>
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Book List */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <p>{book.price}</p>
              <p>{book.description.slice(0, 100)}...</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
