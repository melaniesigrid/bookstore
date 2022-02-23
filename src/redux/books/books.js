import React from 'react';
import Book from './book';

function Books() {
  return (
    <div>
      <Book />
      <form className="addForm">
        <label htmlFor="title">
          <input id="title" placeholder="Title" Required />
        </label>
        <label htmlFor="author">
          <input Id="author" placeholder="Author" Required />
        </label>
        <button type="submit" className="add btn">Add</button>
      </form>
    </div>
  );
};

export default Books;
