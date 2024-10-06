import React, { useEffect, useState } from 'react';
import { fetchAnimeList } from '../api/jikanApi';
import AnimeCard from './AnimeCard';
import Pagination from './Pagination';
import Filters from './Filters';
import SearchBar from './SearchBar';
import './AnimeList.css';

const AnimeList: React.FC = () => {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState<string | null>(null); // Добавляем состояние для запроса

  const loadAnime = async (page: number, filters: any, query?: string | null) => {
    setLoading(true);
    try {
      const params: any = { page, ...filters };
      if (query) {
        params['q'] = query; // Добавляем параметр поиска по названию
      }
      const data = await fetchAnimeList(params);
      setAnimeList(data.data);
      setTotalPages(data.pagination.last_visible_page);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnime(page, filters, searchQuery);
  }, [page, filters, searchQuery]);

  const handlePageChange = (newPage: number) => setPage(newPage);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="anime-list-container">
      <SearchBar onSearch={handleSearch} />
      <Filters setFilters={setFilters} />
      <div className="anime-list">
        {animeList.map(anime => (
          <AnimeCard
            key={anime.mal_id}
            id={anime.mal_id}
            title={anime.title}
            imageUrl={anime.images.jpg.large_image_url}
            score={anime.score}
            ratings={anime.scored_by}
          />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default AnimeList;
