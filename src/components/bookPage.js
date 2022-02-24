import React from 'react';
import Book from './Book';
import AddForm from './AddForm';
import { useSelector } from 'react-redux';

function BookPage() {
  const myBooks = useSelector(store => store.booksReducer);
  console.log(myBooks);
  return (
    <div>
      {myBooks.map((book) => <Book id={book.id} key={book.id} title={book.title} author={book.author} />)}
      <AddForm />
    </div>
  );
}

export default BookPage;
