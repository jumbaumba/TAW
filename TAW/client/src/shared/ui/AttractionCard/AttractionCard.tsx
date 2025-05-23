import React from 'react';
import './AttractionCard.css'
interface AttractionCardProps {
  name: string;
  image?: string;
  description?: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ name, image, description }) => (
  <div className="attractions-wrapper">
  <div className="attraction-card">
    {image && (
      <img 
        src={image} 
        alt={name} 
        className="attraction-card__image"
      />
    )}
    <h3>{name || 'Без названия'}</h3>
    <p>{description ? description : 'Описание отсутствует'}</p>
  </div>
  </div>
  
);

export default AttractionCard;