import BookCard from "./BookCard";
import "../styles/BookList.css";

const BookList = ({
    title,
    books
}) => {
    return (
        <div className="book-list">
            <div className="book-list__title">
                <h2 className="book-list__title-h2">
                    {title}
                </h2>
            </div>
            <div
                className="book-list__item"
            >
                {books?.map((book, index) => (
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
    );
}
export default BookList;