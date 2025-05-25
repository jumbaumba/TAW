import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './AttractionPage.css';

const API_KEY = '5ae2e3f221c38a28845f05b6c4f327457cea942184ad5a7736c64e58';

interface AttractionDetail {
  name: string;
  preview?: { source: string };
  wikipedia_extracts?: { text: string };
  wikipedia?: string;
  address?: Record<string, string>;
  point: { lat: number; lon: number };
  kinds?: string;
}


const AttractionPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<AttractionDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttraction = async () => {
      try {
        const res = await fetch(
          `https://api.opentripmap.com/0.1/en/places/xid/${id}?apikey=${API_KEY}`
        );
        const detail = await res.json();
        setData(detail);
      } catch (err) {
        console.error('Failed to load details', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchAttraction();
  }, [id]);

  if (loading) return <p className='loading'>Загрузка...</p>;
  if (!data) return <p className='not-found'>Данные не найдены</p>;

  return (
    <div className='attraction'>
      <Link to="/attrection" className='back'>← Назад</Link>

      <h1 className='attraction__name'>{data.name}</h1>

      {data.preview?.source && (
        <img
          src={data.preview.source}
          alt={data.name}
          className="attraction__image"
        />
      )}

      {data.wikipedia_extracts?.text && (
        <p className='attraction__description'>{data.wikipedia_extracts.text}</p>
      )}

      {data.wikipedia && (
        <p className='attraction__wikipedia'>
          Подробнее:{" "}
          <a 
            href={data.wikipedia} 
            target="_blank" 
            rel="noreferrer"
            className='attraction__wikipedia-link'
        >
            Wikipedia
          </a>
        </p>
      )}

    {data.point ? (
        <>
            <h3 className='attraction__location'>Расположение</h3>
            <MapContainer
                center={[data.point.lat, data.point.lon]}
                zoom={16}
                scrollWheelZoom={false}
                className='attraction__map'
                >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[data.point.lat, data.point.lon]}
                    icon={L.icon({
                    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                })}
                >
                    <Popup>{data.name}</Popup>
                </Marker>
            </MapContainer>
        </>
    ) : (
        <p className='attraction__location'>Локация отсутствует</p>
    )}

      {data.address && (
        <p className='attraction__address'>
          Адрес: <strong>{data.address.country}</strong>
        </p>
      )}

    {data.kinds && (
    <div className="attraction__kinds">
        <h4>Категории:</h4>
        <div className="attraction__kinds-list">
        {data.kinds.split(',').map((kind) => (
            <Link
                key={kind}
                to={`/categories/${kind.trim()}`}
                className="attraction__kind"
          >
            {kind.trim().replaceAll('_', ' ')}
          </Link >
        ))}
        </div>
    </div>
    )}

    </div>
  );
};

export default AttractionPage;