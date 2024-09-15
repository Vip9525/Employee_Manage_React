// utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8082/api'; // Replace with your API URL

export const getEmployees = () => axios.get(`${API_URL}/employee`);
export const createEmployee = (employee) => axios.post(`${API_URL}/employee`, employee);
export const getEmployee = (id) => axios.get(`${API_URL}/employee/${id}`);
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/employee/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/employee/${id}`);