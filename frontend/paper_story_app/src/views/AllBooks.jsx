import React, { useContext, useEffect, useState, useRef } from 'react';
import BookCard from '../components/BookCard';
import GlobalContext from '../context/GlobalContext';
import '../styles/AllBooks.css';

const AllBooks = () => {
    const { books } = useContext(GlobalContext);
    const sortRef = useRef();
    const [currentBooks, setCurrentBooks] = useState();

    useEffect(() => {
        setCurrentBooks(books);
    }, [books]);

    const sortBooks = (sortValue) => {
        if (sortValue === 'asc') {
            setCurrentBooks([...currentBooks].sort((a, b) => a.year - b.year));
        } else if (sortValue === 'desc') {
            setCurrentBooks([...currentBooks].sort((a, b) => b.year - a.year));
        } else {
            setCurrentBooks([...currentBooks].sort((a, b) => a.id - b.id));
        }
    };

    return (
        <div className="allbooks">
            <div className="allbooks__container">
                <div className="allbooks__content">
                    <div className="allbooks__content__data">
                        <span className="allbooks__data__title">Libros</span>
                        <select
                            ref={sortRef}
                            className="allbooks__data__filter"
                            onChange={(e) => sortBooks(e.target.value)}
                        >
                            <option value="default">Por defecto</option>
                            <option value="asc">Año de publicación (menos reciente)</option>
                            <option value="desc">Año de publicación (mas reciente)</option>
                        </select>
                    </div>
                    <div className="allbooks__item">
                        {currentBooks?.map((book, index) => (
                            <BookCard
                                key={index}
                                id={book.id}
                                author={book.author}
                                year={book.year}
                                title={book.title}
                                image={book.imageLink}
                                price={book.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;