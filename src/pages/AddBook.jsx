import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      category,
      description,
      rating,
      image,
      id: Date.now(),
      price: '₹999',  // Add a default price or leave this empty if you want
    };
    dispatch(addItem(newBook));
    navigate('/browse');  // Redirect to Browse Books after adding
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          min="1"
          max="5"
        />
        <input
          type="url"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
