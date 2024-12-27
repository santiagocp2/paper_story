import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import GlobalContext from '../context/GlobalContext';
import '../styles/BookCard.css';

const BookCard = ({
    id,
    author,
    year,
    title,
    image,
    price
}) => {

    const { updateCart } = useContext(GlobalContext);

    return (
        <div className="book-card">
            <div className="book-card__link">
                <Link to={{ pathname: `/book/${id}` }}>
                    <img
                        src={image}
                        alt={title}
                        className="book-card__logo"
                    />
                </Link>
            </div>
            <div className="book-card__content">
                <p className="book-card__publicacion">
                    <strong>Año de publicación: </strong>{year}
                </p>
                <p className="book-card__autor">
                    <strong>Autor: </strong>{author}
                </p>
                <Link
                    className="book-card__link-title"
                    to={{ pathname: `/book/${id}` }}
                    title={title}
                >
                    {title}
                </Link>
            </div>
            <div className="book-card__cart">
                <h2 className="book-card__price"><strong>$ {price}</strong></h2>
                <button
                    type="button"
                    className="book-card__button"
                    onClick={() => updateCart(id, "add")}
                    title="AGREGAR AL CARRITO"
                >
                    <AiOutlineShoppingCart />
                </button>
            </div>
        </div>
    );
}

export default BookCard;