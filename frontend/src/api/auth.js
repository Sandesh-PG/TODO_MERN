// src/api/auth.js
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/auth'; 

// axios.post(`${API_BASE}/login`, data)


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logoutUser = async () => {
  try {
    await axios.post(`${API_BASE}/logout`);
  } catch (error) {
    throw error.response.data;
  }
};
