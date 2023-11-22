

import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchPixabayImages = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `?key=40789892-e6d9fd27b6c02625fdd9685c5&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const { totalHits, hits } = response.data;

    if (hits && hits.length > 0) {
      return { totalHits, hits };
    } else {
      throw new Error('No images found');
    }
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};

export default fetchPixabayImages;
