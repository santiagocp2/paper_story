import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    // const dispatch = useAppDispatch();
    // const cartCount = useAppSelector(
    //   (state) => state.cartReducer.cartItems.length
    // );
    // const showCart = () => {
    //     dispatch(setCartState(true));
    // };

    return (
        <header className="py-4 bg-white white:bg-slate-800 top-0 sticky z-10 shadow-lg font-karla">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    
                    <Link
                        to="/"
                        className="text-4xl font-bold dark:text-dark justify-between items-center flex gap-2"
                    >
                        <img className="inline-block h-12 hover:scale-110" alt="Logo de la tienda" src="./logo.png"/>
                        <p>Relatos de Papel</p>
                    </Link>
                    <div className="lg:flex hidden w-full max-w-[500px]">
                        <input
                            type="text"
                            placeholder="Buscar un libro..."
                            className="border-2 border-gray-500 px-6 py-2 w-full dark:text-white white:bg-slate-800"
                        />
                        <div className="bg-gray-500 text-white text-[26px] grid place-items-center px-4">
                            <BsSearch />
                        </div>
                    </div>
                    <div className="flex gap-4 md:gap-8 items-center dark:text-dark">
                        <Link
                            to="/"
                            className="text-xl font-bold"
                        >
                            Libros
                        </Link>
                        <div
                            className="text-black-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
                            // onClick={showCart}
                        >
                            <AiOutlineShoppingCart className="dark:text-dark" />
                            <div
                                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                                data-test="cart-item-count"
                            >
                                {/* {cartCount} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;