import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import '../styles/BookDetail.css';

function BookDetail() {
    const { bookId } = useParams();
    const { books, updateCart } = useContext(GlobalContext);
    const book = books.find(r => r.id === Number(bookId));

    if (!book) {
        return <h2>Libro no encontrado</h2>;
    }
    return (
        <div className="book-detail">
            <div className="book-detail__content">
                <div className="book-detail__logo">
                    <img src={book.imageLink} alt="selected" />
                </div>
                <div className="book-detail__data">
                    <h2 className="book-detail__title">{book?.title}</h2>
                    <div className="book-detail__price">
                        <h2 className="book-detail__price-amount"><strong>$ {book.price}</strong></h2>
                    </div>
                    <table className="book-detail__table">
                        <tbody>
                            <tr>
                                <td className="book-detail__td">Autor</td>
                                <td>{book?.author}</td>
                            </tr>
                            <tr>
                                <td className="book-detail__td">Año de publicación</td>
                                <td>{book?.year}</td>
                            </tr>
                            <tr>
                                <td className="book-detail__td">Pais de origen</td>
                                <td>{book?.country}</td>
                            </tr>
                            <tr>
                                <td className="book-detail__td">Lenguaje</td>
                                <td>{book?.language}</td>
                            </tr>
                            <tr>
                                <td className="book-detail__td">Paginas</td>
                                <td>{book?.pages}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="book-detail__info">
                        <h2 className="book-detail__info-title">Acerca del libro</h2>
                        <p className="book-detail__info-text">
                            Para saber mas acerca de este libro, por favor visite el siguiente enlace: <a className="book-detail__info-text__link" href={book?.link} target="_blank" rel="noreferrer">ver más</a>
                        </p>
                    </div>
                    <div className="book-detail__cart">
                        <button
                            type="button"
                            className="book-detail__cart-add"
                            onClick={() => updateCart(book?.id, "add")}
                            title="AGREGAR AL CARRITO"
                        >
                            <AiOutlineShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default BookDetail;