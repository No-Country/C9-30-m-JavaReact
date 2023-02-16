import axios from "axios";

const urlApi = "https://argfounding-production.up.railway.app";

export const loginUser = async (data) => {
  const response = await axios.post(`${urlApi}/auth/login`, data);
  return response.data.jwt;
};

export const createUser = async (newUser) => {
  const response = await axios.post(`${urlApi}/auth/register`, newUser);
  return response.data;
};

export const getCampaigns = async () => {
  const response = await axios.get(`${urlApi}/campaigns`);
  return response.data.content;
};

export const getCampaignById = async (id) => {
  const response = await axios.get(`${urlApi}/campaigns/${id}`);
  return response.data;
};
