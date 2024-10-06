import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface WatchLaterAnime {
  id: number;
  title: string;
  imageUrl: string;
  score: number;
  ratings: number;
}

interface WatchLaterState {
  watchLater: WatchLaterAnime[];
  addToWatchLater: (anime: WatchLaterAnime) => void;
  removeFromWatchLater: (id: number) => void;
  clearWatchLater: () => void;
}

const useWatchLaterStore = create<WatchLaterState>()(
  persist(
    (set) => ({
      watchLater: [],
      addToWatchLater: (anime: WatchLaterAnime) =>
        set((state) => ({
          watchLater: [...state.watchLater, anime],
        })),
      removeFromWatchLater: (id: number) =>
        set((state) => ({
          watchLater: state.watchLater.filter((anime) => anime.id !== id),
        })),
      clearWatchLater: () => set({ watchLater: [] }),
    }),
    {
      name: 'watch-later-storage'
    }
  )
);

export { useWatchLaterStore };
