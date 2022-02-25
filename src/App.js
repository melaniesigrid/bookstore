import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

import Header from './components/Header.js';
import BookPage from './components/BookPage.js';
import Categories from './redux/categories/categories';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/categories/" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
