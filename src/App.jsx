// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import Provider
import store from './redux/store';  // Import the store

import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import AddBook from './pages/AddBook';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Provider store={store}> {/* Wrap the app in the Redux provider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
