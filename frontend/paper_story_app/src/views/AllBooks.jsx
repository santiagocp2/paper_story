import React, { useContext, useEffect, useState, useRef } from 'react';
import BookCard from '../components/BookCard';
import GlobalContext from '../context/GlobalContext';

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
        <div className="container mx-auto min-h-[83vh] p-4 font-karla">
            <div className="grid grid-cols-4 gap-1">
                <div className="col-span-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-lg dark:text-white">Libros</span>
                        <select
                            ref={sortRef}
                            className="border border-black dark:border-white rounded p-1 dark:text-white dark:bg-slate-600"
                            onChange={(e) => sortBooks(e.target.value)}
                        >
                            <option value="default">Por defecto</option>
                            <option value="asc">Año de publicación (menos reciente)</option>
                            <option value="desc">Año de publicación (mas reciente)</option>
                        </select>
                    </div>
                    <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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