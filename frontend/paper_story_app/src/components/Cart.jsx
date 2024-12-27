import { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import CartRow from './CartRow';
import GlobalContext from '../context/GlobalContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cart, isOpenCart, setOpen } = useContext(GlobalContext);

    const calculateTotal = cart.reduce((acc, book) => acc + book.price, 0);

    if (isOpenCart) {
        return (
            <div className="cart">
                <div
                    className="cart__container"
                >
                    <div className="cart__content">
                        <h3 className="cart__content__h3">Su Carrito</h3>
                        <RxCross1
                            className="cart__content__x-logo"
                            onClick={() => setOpen(false)}
                        />
                    </div>
                    <div className="cart__line">
                        {cart?.length > 0 ? (
                            cart.map((book, index) => <CartRow
                                key={index}
                                id={book.id}
                                title={book.title}
                                image={book.imageLink}
                                price={book.price} />)
                        ) : (
                            <div className="cart__empty">
                                <p className="cart__empty__p">Su carrito esta vacio</p>
                            </div>
                        )}
                    </div>
                    {cart?.length > 0 && (
                        <>
                            <div className="cart__total">
                                <h2 className="cart__total__h2">Total</h2>
                                <h2 className="cart__total__amount">$ {calculateTotal}</h2>
                            </div>
                            <Link to="/checkout">
                                <button
                                    type="button"
                                    className="cart__checkout"
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