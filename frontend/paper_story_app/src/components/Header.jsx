import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import SearchBar from './SearchBar';

const Header = () => {
    const { cart, setOpen } = useContext(GlobalContext);
    const cartCount = cart.length;

    return (
        <header className="py-4 bg-white white:bg-slate-800 top-0 sticky z-10 shadow-lg font-karla">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">

                    <Link
                        to="/home"
                        className="text-3xl font-bold dark:text-dark justify-between items-center flex gap-2"
                    >
                        <img className="inline-block h-12 hover:scale-110" alt="Logo de la tienda" src="./logo.png" />
                        <p>Relatos de Papel</p>
                    </Link>
                    <SearchBar />
                    <div className="flex gap-4 md:gap-8 items-center dark:text-dark">
                        <Link
                            to="/home"
                            className="text-3xl font-bold"
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/books"
                            className="text-3xl font-bold"
                        >
                            Libros
                        </Link>
                        <div
                            className="text-black-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
                            onClick={() => setOpen(true)}
                        >
                            <AiOutlineShoppingCart className="dark:text-dark" />
                            <div
                                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                            >
                                {cartCount}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;