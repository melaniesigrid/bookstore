import React from 'react';

function AddForm() {
  return (
    <form className="addForm">
      <label htmlFor="title">
        <input id="title" placeholder="Title" Required />
      </label>
      <label htmlFor="author">
        <input Id="author" placeholder="Author" Required />
      </label>
      <button type="submit" className="add btn">Add</button>
    </form>
  );
}

export default AddForm;
