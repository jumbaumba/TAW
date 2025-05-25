import React from 'react';
import './AttractionCard.css'

interface AttractionCardProps {
  name: string;
  image?: string;
  description?: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ name, image, description }) => (
  <div className="attraction-card">
    {image && (
      <img 
        src={image} 
        alt={name} 
        className="attraction-card__image"
      />
    )}
    <h3 className="attraction-card__name">{name || 'Без названия'}</h3>
    <p className="attraction-card__description">{description ? description : 'Описание отсутствует'}</p>
  </div>  
);

export default AttractionCard;