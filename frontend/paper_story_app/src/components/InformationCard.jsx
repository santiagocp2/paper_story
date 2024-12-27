import React from 'react';
import '../styles/InformationCard.css';

const InformationCard = ({
    icon,
    title,
    desc
}) => {
    return (
        <div className="information-card">
            {icon}
            <div>
                <h2 className="information-card__h2">{title}</h2>
                <p className="information-card__p">{desc}</p>
            </div>
        </div>

    );
}
export default InformationCard;