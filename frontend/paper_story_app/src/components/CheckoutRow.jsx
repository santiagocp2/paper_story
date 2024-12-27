import { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import GlobalContext from '../context/GlobalContext';
import '../styles/CheckoutRow.css';

const CheckoutRow = ({
    id,
    title,
    image,
    author,
    price
}) => {

    const { updateCart } = useContext(GlobalContext);

    return (
        <div className="checkout-row">
            <div className="checkout-row__content">
                <img src={image} alt="PORTADA" className="h-15" />
            </div>
            <div className="checkout-row__content">
                <h3 className="checkout-row__title">Titulo: {title}</h3>
                <div className="checkout-row__price">
                    <h3 className="checkout-row__price__amount">Precio: $ {price}</h3>
                </div>
                <h3><strong>Autor: </strong>{author}</h3>
            </div>
            <div className="checkout-row__content">
                <RiDeleteBin6Line
                    className="checkout-row__delete-logo"
                    onClick={() => updateCart(id, "remove")}
                />
            </div>
        </div>
    );
};

export default CheckoutRow;