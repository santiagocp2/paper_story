import { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import GlobalContext from '../context/GlobalContext';

const CartRow = ({
    id,
    title,
    image,
    price
}) => {

    const { updateCart } = useContext(GlobalContext);

    return (
        <div className="grid grid-cols-7 gap-3 border items-center">
            <img src={image} alt="PORTADA" className="h-25 col-span-2" />
            <div className="col-span-3">
                <h3 className="font-bold leading-4">{title}</h3>
                <div className="flex space-x-2 items-center">
                    <h3 className="font-semibold">$ {price}</h3>
                </div>
            </div>
            <div className="font-bold col-span-2">
                <RiDeleteBin6Line
                    className="text-red-500 cursor-pointer text-2xl hover:text-red-600"
                    onClick={() => updateCart(id, "remove")}
                />
            </div>
        </div>
    );
};

export default CartRow;