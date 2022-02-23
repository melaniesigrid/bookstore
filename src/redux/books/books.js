import React from 'react';
import Book from './book.js'

const Books = () => {
  return (
    <div>
      <Book />
      <form className="addForm">
        <label for="title">
          <input id="title" placeholder="Title" Required />
        </label>
        <label for="author">
          <input Id="author" placeholder="Author" Required />
        </label>
        <button type="submit" className="add btn">Add</button>
      </form>
    </div>
  )
}

export default Books;