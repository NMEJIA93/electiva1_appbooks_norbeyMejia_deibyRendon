import React, { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import './Books.css';

const Books = () => {
  const { data, isLoading, hasError } = useFetch('https://stephen-king-api.onrender.com/api/books');
  const [selectedBookId, setSelectedBookId] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error loading data</div>;

  const handleSelectBook = (id) => {
    setSelectedBookId(id);
  };

  return (
    <div>
      <h1>Libros</h1>
      <div className="books-container">
        {data && data.data.map((book) => (
          <div
            key={book.id}
            className={`book-card ${selectedBookId === book.id ? 'selected' : ''}`}
            onClick={() => handleSelectBook(book.id)}
          >
            <h2>{book.Title}</h2>
            <p>ID: {book.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;