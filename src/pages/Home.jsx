import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Books } from '../utils/mockData';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Online Library</h1>
      <div className="categories">
        <ul>
          <h3>Categories : </h3>
          <li><Link to="/browse/fiction">Fiction</Link></li>
          <li><Link to="/browse/non-fiction">Non-Fiction</Link></li>
          <li><Link to="/browse/sci-fi">Sci-Fi</Link></li>
        </ul>
      </div>
      <div className="popular-books">
        <h3>Popular Books</h3>
        <div className="book-list">
          {Books.slice(0, 6).map(book => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
