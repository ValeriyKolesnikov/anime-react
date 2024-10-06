import React from 'react';
import WatchLaterButton from './WatchLaterButton';
import './AnimeCard.css';
import { Link } from 'react-router-dom';

interface AnimeCardProps {
  id: number;
  title: string;
  imageUrl: string;
  score: number;
  ratings: number;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ id, title, imageUrl, score, ratings }) => {
  const anime = { id, title, imageUrl, score, ratings };

  return (
    <div className="anime-card">
      <Link to={`/anime/${id}`}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>Score: {score}</p>
        <p>Ratings: {ratings}</p>
      </Link>
      <WatchLaterButton anime={anime} />
    </div>
  );
};

export default AnimeCard;
