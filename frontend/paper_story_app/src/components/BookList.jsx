import BookCard from "./BookCard";

const BookList = ({
    title,
    books
}) => {
    return (
        <div className="container mt-8 mx-auto px-4 white:bg-slate-800">
            <div className="sm:flex items-center justify-between">
                <h2 className="text-3xl font-medium font-lora dark:text-dark">
                    {title}
                </h2>
            </div>
            <div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
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