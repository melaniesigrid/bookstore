import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddForm from './AddForm';

function BookPage() {
  const myBooks = useSelector((store) => store.booksReducer);
  return (
    <div>
      {
        myBooks.map((book) => <Book id={book.id} key={book.id} title={book.title} author={book.author} category={book.category} />)
      }
      <AddForm />
    </div>
  );
}

export default BookPage;
