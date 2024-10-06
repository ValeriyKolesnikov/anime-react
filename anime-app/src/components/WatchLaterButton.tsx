import React from 'react';
import { useWatchLaterStore } from '../store/watchLaterStore';

interface Anime {
  id: number;
  title: string;
  imageUrl: string;
  score: number;
  ratings: number;
}

interface WatchLaterButtonProps {
  anime: Anime;
}

const WatchLaterButton: React.FC<WatchLaterButtonProps> = ({ anime }) => {
  const { addToWatchLater, removeFromWatchLater, watchLater } = useWatchLaterStore();
  const isInWatchLater = watchLater.some((item) => item.id === anime.id);

  const handleToggleWatchLater = () => {
    if (isInWatchLater) {
      removeFromWatchLater(anime.id);
    } else {
      addToWatchLater(anime);
    }
  };

  return (
    <button onClick={handleToggleWatchLater}>
      {isInWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
    </button>
  );
};

export default WatchLaterButton;
