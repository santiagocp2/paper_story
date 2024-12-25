import { useEffect, useState } from 'react';
import { BookData } from '../data/BookData';

export const useBooks = () => {

    const [books, setBooks] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de productos
     * en el primer renderizado.
     */
    useEffect(() => {

        //fetch('https://freetestapi.com/api/v1/books').then((res) => res.json()).then(console.log).then((res) =>  setBooks(res));
        setBooks(BookData);
        setTimeout(() => {
        }, 2500);
    }, []);

    return books;
}