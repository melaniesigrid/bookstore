import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import AddForm from './addForm';
import { loadBooksApi } from '../redux/books/books'

function BookPage() {
  const myBooks = useSelector((store) => store.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooksApi());
  }, [dispatch]);

  return (
    <div>
      {
        myBooks.map((book) => (
          <Book
            key={book.item_id}
            item_id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
      }
      <AddForm />
    </div>
  );
}

export default BookPage;
