import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiRefund2Fill } from 'react-icons/ri';
import { MdSupportAgent } from 'react-icons/md';
import InformationCard from './InformationCard';

const InformationData = [
    {
        icon: <TbTruckDelivery className="text-6xl dark:text-white" />,
        title: "Envio Gratis",
        desc: "Todos los pedidos superiores a $1000",
    },
    {
        icon: <RiRefund2Fill className="text-6xl dark:text-white" />,
        title: "Reembolso Garantizado",
        desc: "En caso de que no estes satisfecho",
    },
    {
        icon: <MdSupportAgent className="text-6xl dark:text-white" />,
        title: "Soporte 24/7",
        desc: "Contactanos en cualquier momento",
    },
];

const Information = () => {
    return (
        <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mt-8 mx-auto">
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