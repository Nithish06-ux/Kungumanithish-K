import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '';

export const getPortfolioData = async () => {
  const { data } = await axios.get(`${API_BASE}/api/portfolio`);
  return data;
};

export const submitContact = async (formData) => {
  const { data } = await axios.post(`${API_BASE}/api/contact`, formData);
  return data;
};
