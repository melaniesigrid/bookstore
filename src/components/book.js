import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

function Book(props) {
  const {
    item_id,
    title,
    author,
    category,
  } = props;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBookApi(item_id));

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

export default Book;