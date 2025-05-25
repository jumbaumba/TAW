import React, { useEffect, useState } from 'react';
import AttractionCard from '../../shared/ui/AttractionCard/AttractionCard';
import './index.css';

interface Attraction {
  xid: string;
  name: string;
  image: string;
  description?: string;
}

const API_KEY = '5ae2e3f221c38a28845f05b6c4f327457cea942184ad5a7736c64e58';

const AttractionsList: React.FC = () => {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const res = await fetch(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=2.3292&lat=48.8628&rate=2&format=json&limit=50&kinds=architecture&apikey=${API_KEY}`
        );
        const baseData = await res.json();

        const filtered: Attraction[] = [];
        let count = 0;

        for (const item of baseData) {
          if (count >= 30) break;

          try {
            const detailRes = await fetch(
              `https://api.opentripmap.com/0.1/en/places/xid/${item.xid}?lang=en&apikey=${API_KEY}`
            );
            const detail = await detailRes.json();

            if (!detail.preview?.source) continue;

            filtered.push({
              xid: item.xid,
              name: item.name || detail.name || 'Без названия',
              image: detail.preview.source,
              description:
                detail.wikipedia_extracts?.text ||
                detail.info?.descr ||
                detail.kinds?.replaceAll('_', ' ') ||
                '',
            });

            count++;
            await new Promise((r) => setTimeout(r, 500));
          } catch {
            continue;
          }
        }

        setAttractions(filtered);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttractions();
  }, []);

  if (loading) return <p className="attractions__loading">Загрузка достопримечательностей...</p>;

  return (
    <div className="attractions">
      <h2 className="attractions__title">Достопримечательности Франции</h2>
      <div className="attractions-list">
        {attractions.map((attraction) => (
          <AttractionCard
            key={attraction.xid}
            id={attraction.xid}
            name={attraction.name}
            image={attraction.image}
            description={attraction.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AttractionsList;