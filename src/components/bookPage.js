/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector } from 'react-redux';
/* eslint-disable-next-line */
import Book from './Book';
/* eslint-disable-next-line */
import AddForm from './AddForm';

function BookPage() {
  const myBooks = useSelector((store) => store.booksReducer);
  return (
    <div>
      {
        myBooks.map(
          (book) =>
            (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                category={book.category} />
            ),
        )
      }
      <AddForm />
    </div>
  );
}

export default BookPage;
