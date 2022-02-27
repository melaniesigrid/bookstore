/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

function Book({
    item_id,
    title,
    author,
    category,
  }) {

  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeBookApi(item_id));
  };
  return (
    <div className="bookContainer">
      <div className="titleContainer">
        <p className="genre" value={category}>{category}</p>
        <p className="bookTitle">{title}</p>
        <p className="bookAuthor">Jane Doe</p>
        <button type="button" className="remove" onClick={remove}>Remove</button>
      </div>
      <div className="graphContainer">
        <div className="percentageContainer" />
        <div className="graphParagraph">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progressContainer">
        <div className="progressContainer" />
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="progressBtn btn">Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
