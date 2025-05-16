import React, { useEffect, useState } from 'react';
import AttractionCard from '../../shared/ui/AttractionCard'; //укажи правильный путь

interface Attraction {
  xid: string;
  name: string;
}

const AttractionsList: React.FC = () => {
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await fetch(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=2.3292&lat=48.8628&rate=2&format=json&apikey=YOUR_API_KEY`
        );
        const data = await response.json();
        setAttractions(data);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      }
    };

    fetchAttractions();
  }, []);

  return (
    <div className="attractions-list">
      {attractions.map((attraction) => (
        <AttractionCard key={attraction.xid} name={attraction.name} />
      ))}
    </div>
  );
};

export default AttractionsList;