import { useContext } from 'react';
import BookList from './BookList';
import GlobalContext from '../context/GlobalContext';

const NewBooks = () => {
    const { books } = useContext(GlobalContext);

    const newbooks = books.filter((book) => book.year > 1950);

    return <BookList title="Destacados" books={newbooks} />;
};

export default NewBooks;