import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutRow from '../components/CheckoutRow';
import GlobalContext from '../context/GlobalContext';
import '../styles/Checkout.css';

const Checkout = () => {
    const [checkout, setCheckout] = useState(false);
    const { cart, updateCart, setOpen } = useContext(GlobalContext);
    const navigate = useNavigate();
    const calculateTotal = cart.reduce((acc, book) => acc + book.price, 0);

    const handleOrder = () => {
        updateCart(null, "removeAll");
        setOpen(false);
        setCheckout(false);
        alert("PEDIDO REALIZADO CON ÉXITO");
        navigate("/home");
    };

    return (
        <div className="checkout">
            {checkout ? (
                <div className="checkout__container">
                    <h1 className="checkout__alert__title">Atención!!!!!</h1>
                    <p className="checkout__alert__description">
                        ¿Está seguro de que desea realizar el pedido? Una vez confirmado, no podrá cancelarlo.
                    </p>
                    <div className="checkout__buttons">
                        <span
                            className="checkout__button__action"
                            onClick={() => setCheckout(false)}
                        >
                            Cancelar
                        </span>
                        <span
                            className="checkout__button__action"
                            onClick={handleOrder}
                        >
                            Confirmar
                        </span>
                    </div>
                </div>
            ) : (
                <div
                    className="checkout__container"
                >
                    <div className="checkout__title">
                        <h3 className="checkout__title_h3">Pedido</h3>
                    </div>
                    <div className="checkout__item">
                        {cart?.length > 0 ? (
                            cart.map((book, index) => <CheckoutRow
                                key={index}
                                id={book.id}
                                title={book.title}
                                image={book.imageLink}
                                price={book.price} 
                                author={book.author}/>)
                        ) : (
                            <div className="checkout__cart">
                                <p className="checkout__cart__text">No ha seleccionado nada</p>
                            </div>
                        )}
                    </div>
                    {cart?.length > 0 && (
                        <>
                            <div className="checkout__total">
                                <h2 className="checkout__total__data">Total</h2>
                                <h2 className="checkout__total__data">$ {calculateTotal}</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setCheckout(true)}
                                className="checkout__button-pay"
                            >
                                PAGAR
                            </button>
                        </>
                    )}
                </div>
            )}
            <br />
        </div>
    );
}

export default Checkout;