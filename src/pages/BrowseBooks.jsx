import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BrowseBooks.css';

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState('');

  const books = useSelector((state) => state.books);

  // Filter books by category and search
  const filteredBooks = books.filter(book =>
    (!category || book.category.toLowerCase() === category.toLowerCase()) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) || 
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="browse-books">
      <div className="search-bar-container">
        <h2>{category ? category.charAt(0).toUpperCase() + category.slice(1) + " Books" : "Browse Books"}</h2>
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

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
