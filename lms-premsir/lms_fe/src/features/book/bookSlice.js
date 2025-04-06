import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [], //for admin purpose
  publicBooks: [],
  selectedBook: {},
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.books = action.payload;
    },
    setPublicBooks: (state, action) => {
      state.publicBooks = action.payload;
    },
    setSelectedBook: (state, { payload }) => {
      state.selectedBook = payload || {};
    },
  },
});

const { reducer, actions } = bookSlice;
export const { setBook, setPublicBooks, setSelectedBook } = actions;

export default reducer;
