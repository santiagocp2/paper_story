import { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import GlobalContext from '../context/GlobalContext';
import '../styles/CartRow.css';

const CartRow = ({
    id,
    title,
    image,
    price
}) => {

    const { updateCart } = useContext(GlobalContext);

    return (
        <div className="cart-row">
            <img src={image} alt="PORTADA" className="cart-row__logo" />
            <div className="cart-row__content">
                <h3 className="cart-row__title">{title}</h3>
                <div className="cart-row__price">
                    <h3 className="cart-row__price__amount">$ {price}</h3>
                </div>
            </div>
            <div className="cart-row__detele">
                <RiDeleteBin6Line
                    className="cart-row__delete__logo"
                    onClick={() => updateCart(id, "remove")}
                />
            </div>
        </div>
    );
};

export default CartRow;