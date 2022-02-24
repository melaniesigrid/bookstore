import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const getCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="addForm">
      <label htmlFor="title">
        <input id="title" placeholder="Title" onChange={getTitle} value={title} required />
      </label>
      <label htmlFor="author">
        <input id="author" placeholder="Author" onChange={getAuthor} value={author} required />
      </label>
      <label htmlFor="genre">
        <select className="bookSelect" id="genre" onChange={getCategory} value={category} required>
          <option value="Unknown">Genre</option>
          <option value="Action">Action</option>
          <option value="Science-Fiction">Science-Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Romance">Romance</option>
        </select>
      </label>
      <button type="submit" className="add btn" onClick={() => submitBookToStore(title, author)}>Add</button>
    </form>
  );
}

export default AddForm;
