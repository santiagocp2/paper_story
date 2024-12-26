import { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import GlobalContext from '../context/GlobalContext';

const CheckoutRow = ({
    id,
    title,
    image,
    author,
    price
}) => {

    const { updateCart } = useContext(GlobalContext);

    return (
        <div className="grid grid-cols-3 gap-3 border items-center">
            <div className="justify-items-center">
                <img src={image} alt="PORTADA" className="h-15" />
            </div>
            <div className="justify-items-center">
                <h3 className="font-bold leading-4">Titulo: {title}</h3>
                <div className="flex space-x-2 items-center">
                    <h3 className="font-semibold">Precio: $ {price}</h3>
                </div>
                <h3><strong>Autor: </strong>{author}</h3>
            </div>
            <div className="justify-items-center">
                <RiDeleteBin6Line
                    className="text-red-500 cursor-pointer text-2xl hover:text-red-600"
                    onClick={() => updateCart(id, "remove")}
                />
            </div>
        </div>
    );
};

export default CheckoutRow;