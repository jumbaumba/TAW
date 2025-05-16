import React from 'react';

interface AttractionCardProps {
  name: string;
  description?: string;
  image?: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ name, description, image }) => (
  <div className="attraction-card">
    {image && <img src={image} alt={name} />}
    <h3>{name}</h3>
    {description && <p>{description}</p>}
  </div>
);

export default AttractionCard;