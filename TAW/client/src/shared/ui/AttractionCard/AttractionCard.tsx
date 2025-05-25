import React from 'react';
import { Link } from 'react-router-dom';
import './AttractionCard.css';

interface AttractionCardProps {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ id, name, image, description }) => (
  <div className="attraction-card">
    {image && (
      <img
        src={image}
        alt={name}
        className="attraction-card__image"
      />
    )}
    <h3 className="attraction-card__name" title={name}>{name || 'Без названия'}</h3>
    <p className="attraction-card__description" title={description}>
      {description || 'Описание отсутствует'}
    </p>
    <Link
      to={`/attrection/${id}`}
      className="attraction-card__link"
    >
      Подробнее
    </Link>
  </div>
);

export default AttractionCard;