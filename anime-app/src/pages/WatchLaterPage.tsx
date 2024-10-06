import React from 'react';
import { useWatchLaterStore } from '../store/watchLaterStore';
import AnimeCard from '../components/AnimeCard';
import './WatchLaterPage.css';

const WatchLaterPage: React.FC = () => {
  const watchLaterAnime = useWatchLaterStore((state) => state.watchLater);

  return (
    <div>
      <h1>Watch Later</h1>
      <div className="anime-list">
        {watchLaterAnime.length === 0 ? (
          <p>No anime added to Watch Later.</p>
        ) : (
          watchLaterAnime.map(anime => (
            <AnimeCard
              key={anime.id}
              id={anime.id}
              title={anime.title}
              imageUrl={anime.imageUrl}
              score={anime.score}
              ratings={anime.ratings}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default WatchLaterPage;
