import React, { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import Books from './Books';



const BookApi = () => {
    const [books, setBooks] = useState(true);

    useEffect(() => {
        setBooks(true);
    }, []);

    return (
        <>
            <div>
                <Books />
            </div>
        </>

    );
}


export default BookApi;