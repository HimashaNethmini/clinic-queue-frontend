import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  // STATIC LOGIN MODE (no JWT yet)
  // We keep this empty for future upgrade
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // For static login system, we do NOT auto logout
    // because backend does not use JWT yet

    if (error.response) {
      console.error('API Error:', error.response.data);
    } else {
      console.error('Network Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;