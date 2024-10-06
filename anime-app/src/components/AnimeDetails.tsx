import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnimeDetails } from '../api/jikanApi';
import './AnimeDetails.css';

const AnimeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [animeDetails, setAnimeDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadAnimeDetails = async (animeId: string) => {
    setLoading(true);
    try {
      const data = await fetchAnimeDetails(animeId);
      setAnimeDetails(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadAnimeDetails(id);
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!animeDetails) return <p>Anime not found.</p>;

  const {
    title,
    images,
    score,
    scored_by,
    trailer,
    original_title,
    titles,
    start_date,
    end_date,
    producers,
    genres,
    themes,
    favorites,
  } = animeDetails;

  return (
    <div className="anime-details">
      <h1>{title}</h1>
      <img src={images.jpg.large_image_url} alt={title} />
      {trailer && trailer.embed_url && (
        <iframe src={trailer.embed_url} title="Trailer" allowFullScreen></iframe>
      )}
      <div className="anime-info">
        <p>Original Title: {original_title}</p>
        <p>English Title: {titles[0].title}</p>
        <p>Score: {score}</p>
        <p>Ratings: {scored_by}</p>
        <p>Favorites: {favorites}</p>
        <p>Start Date: {start_date}</p>
        <p>End Date: {end_date}</p>
        <p>Producers: {producers.map((p: any) => p.name).join(', ')}</p>
        <p>Genres: {genres.map((g: any) => g.name).join(', ')}</p>
        <p>Themes: {themes.map((t: any) => t.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default AnimeDetails;
