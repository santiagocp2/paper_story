import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import SearchBar from './SearchBar';
import '../styles/Header.css';

const Header = () => {
    const { cart, setOpen } = useContext(GlobalContext);
    const cartCount = cart.length;

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__content">

                    <Link
                        to="/home"
                        className="header__content__home"
                    >
                        <img className="header__content__logo" alt="Logo de la tienda" src="./logo.png" />
                        <p>Relatos de Papel</p>
                    </Link>
                    <SearchBar />
                    <div className="header__content__menu">
                        <Link
                            to="/home"
                            className="header__menu__option"
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/books"
                            className="header__menu__option"
                        >
                            Libros
                        </Link>
                        <div
                            className="header__menu__cart"
                            onClick={() => setOpen(true)}
                        >
                            <AiOutlineShoppingCart />
                            <div
                                className="header__cart__count"
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