import React from 'react';

function Book() {
  return (
    <div className="bookContainer">
      <div className="titleContainer">
        <p className="genre">Action</p>
        <p className="bookTitle">The Hunger Games</p>
        <p className="bookAuthor">Suzanne Collins</p>
        <button type="button" className="remove">Remove</button>
      </div>
      <div className="graphContainer">
        <div className="graph"></div>
        <div className="percentageContainer">
          <p clasName="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progressContainer">
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="progressBtn">Update Progress</button>
      </div>
    </div>
  )
}

export default Book;
