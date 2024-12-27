import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiRefund2Fill } from 'react-icons/ri';
import { MdSupportAgent } from 'react-icons/md';
import InformationCard from './InformationCard';
import '../styles/Information.css';

const InformationData = [
    {
        icon: <TbTruckDelivery className="information__icon" />,
        title: "Envio Gratis",
        desc: "Todos los pedidos superiores a $1000",
    },
    {
        icon: <RiRefund2Fill className="information__icon" />,
        title: "Reembolso Garantizado",
        desc: "En caso de que no estes satisfecho",
    },
    {
        icon: <MdSupportAgent className="information__icon" />,
        title: "Soporte 24/7",
        desc: "Contactanos en cualquier momento",
    },
];

const Information = () => {
    return (
        <div className="information">
            {InformationData.map((item, index) => (
                <InformationCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc} />
            ))}
        </div>
    );
}
export default Information;