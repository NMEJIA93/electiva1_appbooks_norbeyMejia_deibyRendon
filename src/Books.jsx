import React, { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Detail_Book from './Detail_Book';
import './Books.css';

const Books = () => {
  const { data, isLoading, hasError } = useFetch('https://stephen-king-api.onrender.com/api/books');
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [isBooksVisible, setIsBooksVisible] = useState(true);

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error loading data</div>;

  const selectBook = (id) => {
    setSelectedBookId(id);
    setIsBooksVisible(false);
  };

  const goBack = () => {
    setSelectedBookId(null);
    setIsBooksVisible(true);
  };

  return (
    <div>
      {isBooksVisible ? (
        <>
          <h1>Libros</h1>
          <div className="books-container">
            {data && data.data.map((book) => (
              <div
                key={book.id}
                className={`book-card ${selectedBookId === book.id ? 'selected' : ''}`}
                onClick={() => selectBook(book.id)}
              >
                <h2>{book.Title}</h2>
                <p>ID: {book.id}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Detail_Book bookId={selectedBookId} goBack={goBack} />
      )}
    </div>
  );
};

export default Books;