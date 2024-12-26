import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutRow from '../components/CheckoutRow';
import GlobalContext from '../context/GlobalContext';

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
        <div className="container mx-auto pt-8 dark:text-dark">
            {checkout ? (
                <div className="container mx-auto pt-8 dark:text-dark">
                    <h1 className="font-bold text-xl mb-1">Atención!!!!!</h1>
                    <p className="leading-4 mb-3">
                        ¿Está seguro de que desea realizar el pedido? Una vez confirmado, no podrá cancelarlo.
                    </p>
                    <div className="flex items-center space-x-2">
                        <span
                            className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1"
                            onClick={() => setCheckout(false)}
                        >
                            Cancelar
                        </span>
                        <span
                            className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1"
                            onClick={handleOrder}
                        >
                            Confirmar
                        </span>
                    </div>
                </div>
            ) : (
                <div
                    className="container mx-auto pt-8 dark:text-dark"
                >
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-2xl">Pedido</h3>
                    </div>
                    <div className="mt-6 space-y-2">
                        {cart?.length > 0 ? (
                            cart.map((book, index) => <CheckoutRow
                                key={index}
                                id={book.id}
                                title={book.title}
                                image={book.imageLink}
                                price={book.price} 
                                author={book.author}/>)
                        ) : (
                            <div className="flex flex-col justify-center items-center p-4">
                                <p className="text-center text-xl my-2">No ha seleccionado nada</p>
                            </div>
                        )}
                    </div>
                    {cart?.length > 0 && (
                        <>
                            <div className="flex items-center justify-between p-2">
                                <h2 className="font-bold text-2xl">Total</h2>
                                <h2 className="font-bold text-2xl">$ {calculateTotal}</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setCheckout(true)}
                                className="w-full text-center text-white bg-blue-500 py-2 my-4 rounded font-bold text-xl hover:bg-blue-700"
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