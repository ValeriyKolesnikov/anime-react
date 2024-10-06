import React from 'react';
import './Filters.css';

interface FiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

interface FiltersState {
  status?: string;
  type?: string;
  genre?: string;
}

const Filters: React.FC<FiltersProps> = ({ setFilters }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters: FiltersState) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filters">
      <select name="status" onChange={handleFilterChange}>
        <option value="">All Statuses</option>
        <option value="airing">Airing</option>
        <option value="completed">Completed</option>
        <option value="upcoming">Upcoming</option>
      </select>

      <select name="type" onChange={handleFilterChange}>
        <option value="">All Types</option>
        <option value="tv">TV</option>
        <option value="movie">Movie</option>
        <option value="ova">OVA</option>
        <option value="ona">ONA</option>
        <option value="special">Special</option>
      </select>

      <select name="genre" onChange={handleFilterChange}>
        <option value="">All Genres</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
      </select>
    </div>
  );
};

export default Filters;
