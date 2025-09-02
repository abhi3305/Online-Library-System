import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import AddBook from './pages/AddBook';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/browse/:category" element={<BrowseBooks />} /> {/* Fixed route */}
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
