import React from 'react';
import { useFetch } from './hooks/useFetch';
import './Detail_Book.css';

const Detail_Book = ({ bookId, goBack }) => {
  const { data, isLoading, hasError } = useFetch(`https://stephen-king-api.onrender.com/api/book/${bookId}`);

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error loading data</div>;

  const book = data.data;

  return (
    <div className="detail-book-card">
      <div className="detail-book-content">
        <div className="detail-book-info">
          <h1>{book.Title}</h1>
          <p><strong>ID:</strong> {book.id}</p>
          <p><strong>Year:</strong> {book.Year}</p>
          <p><strong>Publisher:</strong> {book.Publisher}</p>
          <p><strong>ISBN:</strong> {book.ISBN}</p>
          <p><strong>Pages:</strong> {book.Pages}</p>
          <p><strong>Notes:</strong> {book.Notes.join(', ')}</p>
          <h2>Villains</h2>
          <ul>
            {book.villains.map((villain, index) => (
              <li key={index}>{villain.name}</li>
            ))}
          </ul>
          <div className="button-container">
            <button className="back-button" onClick={goBack}>Back to Books</button>
          </div>
        </div>
        <img src="/stephen_king_books.jpg" alt="Stephen King Books" className="detail-book-image" />
      </div>
    </div>
  );
};

export default Detail_Book;