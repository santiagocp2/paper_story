import { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import CartRow from './CartRow';
import GlobalContext from '../context/GlobalContext';

const Cart = () => {
    const { cart, isOpenCart, setOpen } = useContext(GlobalContext);

    const calculateTotal = cart.reduce((acc, book) => acc + book.price, 0);

    if (isOpenCart) {
        return (
            <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
                <div
                    className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla dark:bg-slate-600 dark:text-white"
                >
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-2xl">Su Carrito</h3>
                        <RxCross1
                            className="text-[24px] cursor-pointer hover:opacity-70"
                            onClick={() => setOpen(false)}
                        />
                    </div>
                    <div className="mt-6 space-y-2">
                        {cart?.length > 0 ? (
                            cart.map((book, index) => <CartRow
                                key={index}
                                id={book.id}
                                title={book.title}
                                image={book.imageLink}
                                price={book.price} />)
                        ) : (
                            <div className="flex flex-col justify-center items-center p-4">
                                <p className="text-center text-xl my-2">Su carrito esta vacio</p>
                            </div>
                        )}
                    </div>
                    {cart?.length > 0 && (
                        <>
                            <div className="flex items-center justify-between p-2">
                                <h2 className="font-bold text-2xl">Total</h2>
                                <h2 className="font-bold text-2xl">$ {calculateTotal}</h2>
                            </div>
                            <Link to="/checkout">
                                <button
                                    type="button"
                                    className="w-full text-center text-white bg-blue-500 py-2 my-4 rounded font-bold text-xl hover:bg-blue-700"
                                >
                                    IR A PAGAR
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        );
    }
};

export default Cart;