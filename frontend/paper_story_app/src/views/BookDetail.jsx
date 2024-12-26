import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

function BookDetail() {
    const { bookId } = useParams();
    const { books, updateCart } = useContext(GlobalContext);
    const book = books.find(r => r.id === Number(bookId));

    if (!book) {
        return <h2>Libro no encontrado</h2>;
    }
    return (
        <div className="container mx-auto pt-8 dark:text-dark">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 px-5 font-karla">
                <div className="space-y-2">
                    <div className="justify-items-center">
                        <img src={book.imageLink} alt="selected" className="h-90" />
                    </div>
                </div>
                <div className="px-2">
                    <h2 className="text-2xl font-bold">{book?.title}</h2>
                    <div className="mt-1">
                        <h2 className="font-medium text-red-500 text-xl"><strong>$ {book.price}</strong></h2>
                    </div>
                    <table className="mt-2">
                        <tbody>
                            <tr>
                                <td className="pr-2 font-bold">Autor</td>
                                <td>{book?.author}</td>
                            </tr>
                            <tr>
                                <td className="pr-2 font-bold">Año de publicación</td>
                                <td>{book?.year}</td>
                            </tr>
                            <tr>
                                <td className="pr-2 font-bold">Pais de origen</td>
                                <td>{book?.country}</td>
                            </tr>
                            <tr>
                                <td className="pr-2 font-bold">Lenguaje</td>
                                <td>{book?.language}</td>
                            </tr>
                            <tr>
                                <td className="pr-2 font-bold">Paginas</td>
                                <td>{book?.pages}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-2">
                        <h2 className="font-bold">Acerca del libro</h2>
                        <p className="leading-5">
                            Para saber mas acerca de este libro, por favor visite el siguiente enlace: <a className="text-blue-500" href={book?.link} target="_blank" rel="noreferrer">ver más</a>
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center mt-4 mb-2">
                        <button
                            type="button"
                            className="flex space-x-1 items-center mr-2 mb-2 hover:bg-green-700 text-white py-2 px-4 rounded bg-yellow-500"
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