/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const {
    id,
    title,
    author,
    category,
  } = props;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));

  return (
    <div className="bookContainer">
      <div className="titleContainer">
        <p className="genre" value={category}>{category}</p>
        <p className="bookTitle">{title}</p>
        <p className="bookAuthor">{author}</p>
        <button type="button" className="remove" onClick={remove}>Remove</button>
      </div>
      <div className="graphContainer">
        <div className="graph" />
        <div className="percentageContainer">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progressContainer">
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="progressBtn">Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
