import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/header';
import BookPage from './components/bookPage';
import Categories from './redux/categories/categories';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/categories/" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
