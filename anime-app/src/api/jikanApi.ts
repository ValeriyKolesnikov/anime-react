// src/api/jikanApi.ts
import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

export const fetchAnimeList = async (params: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/anime`, { params });
    return response.data; // Вернуть данные
  } catch (error) {
    console.error('Error fetching anime list:', error);
    throw error; // Бросить ошибку для обработки
  }
};

export const fetchAnimeDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/anime/${id}`);
    return response.data; // Вернуть данные
  } catch (error) {
    console.error(`Error fetching details for anime ID ${id}:`, error);
    throw error; // Бросить ошибку для обработки
  }
};
