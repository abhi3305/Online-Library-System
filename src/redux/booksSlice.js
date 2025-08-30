// src/redux/booksSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { Books } from '../utils/mockData';  // Import your mock data

const booksSlice = createSlice({
  name: 'books',
  initialState: Books,  // Use mock data as the initial state
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);  // Add the new book to the array
    },
    removeItem: (state, action) => {
      return state.filter(book => book.id !== action.payload);  // Remove a book by ID
    }
  }
});

export const { addItem, removeItem } = booksSlice.actions;

export default booksSlice.reducer;
