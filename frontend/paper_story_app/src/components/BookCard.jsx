import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import GlobalContext from '../context/GlobalContext';

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
        <div className="text-center border border-gray-200 font-lato">
            <div className="border-b border-gray-200">
                <Link to={{ pathname: `/book/${id}` }}>
                    <img
                        src={image}
                        alt={title}
                        className="inline-block h-60 transition-transform duration-200 hover:scale-110"
                    />
                </Link>
            </div>
            <div className="px-4 pt-4">
                <p className="text-gray-500 text-[14px] font-medium dark:text-dark">
                    <strong>Año de publicación: </strong>{year}
                </p>
                <p className="text-gray-500 text-[14px] font-medium dark:text-dark">
                    <strong>Autor: </strong>{author}
                </p>
                <Link
                    className="font-semibold hover:underline dark:text-dark overflow-hidden text-ellipsis darkspace-nowrap block"
                    to={{ pathname: `/book/${id}` }}
                    title={title}
                >
                    {title}
                </Link>
            </div>
            <div className="flex flex-wrap items-center justify-between px-4 pb-4">
                <h2 className="font-medium text-red-500 text-xl"><strong>$ {price}</strong></h2>
                <button
                    type="button"
                    className="flex items-center space-x-2 hover:bg-green-500 text-dark py-2 px-3 rounded bg-yellow-500"
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