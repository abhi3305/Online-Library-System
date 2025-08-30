import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Books } from '../utils/mockData';
import './BookDetails.css';

function BookDetails() {
  const { id } = useParams(); // Get the book ID from the URL
  const book = Books.find(b => b.id === parseInt(id)); // Find the book by ID

  return (
    <div className="book-details">
      {book ? (
        <div className="book-info">
          <img src={book.image} alt={book.title} />
          <div className="book-text">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> {book.price}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p><strong>Publish Date:</strong> {book.publishDate}</p>
            <Link to="/browse">Back to Browse</Link>
          </div>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
}

export default BookDetails;
