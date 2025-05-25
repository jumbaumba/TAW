import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AttractionCard from '@shared/ui/AttractionCard/AttractionCard';
import './CategoryPage.css';

const API_KEY = '5ae2e3f221c38a28845f05b6c4f327457cea942184ad5a7736c64e58';

interface Attraction {
  xid: string;
  name: string;
  image: string;
  description?: string;
}

const CategoryPage = () => {
  const { kind } = useParams<{ kind: string }>();
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=2000&lon=2.3292&lat=48.8628&rate=2&format=json&limit=50&kinds=${kind}&apikey=${API_KEY}`
        );
        const base = await res.json();

        const filtered: Attraction[] = [];
        let count = 0;

        for (const item of base) {
          if (count >= 20) break; //выводим максимум 20 карточек в категории 

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
              description: detail.info?.descr || '',
            });

            count++;
            await new Promise((r) => setTimeout(r, 500)); // 🔁 задержка между запросами
          } catch {
            continue;
          }
        }

        setAttractions(filtered);
      } catch (err) {
        console.error('Ошибка загрузки данных', err);
      } finally {
        setLoading(false);
      }
    };

    if (kind) fetchData();
  }, [kind]);

  if (loading)
     return <p className="category-page__loading">Загрузка...</p>;

return (
  <div className="category-page">
    <h2 className="category-page__title">
      Категория: {kind?.replaceAll('_', ' ')}
    </h2>
    <div className="category-page__list">
      {attractions.map((attr) => (
        <AttractionCard
          key={attr.xid}
          id={attr.xid}
          name={attr.name}
          image={attr.image}
          description={attr.description}
        />
      ))}
    </div>
  </div>
);
};

export default CategoryPage;