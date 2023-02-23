import axios from "axios";

const urlApi = "http://167.99.235.152:8080";

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

export const addCampaigns = async (campaign) => {
  const response = await axios.post(`${urlApi}/campaigns`, campaign);
  return response.data.content;
};

export const getCampaignById = async (id) => {
  const response = await axios.get(`${urlApi}/campaigns/${id}`);
  return response.data;
};

export const getCampaignComments = async (campaignId) => {
  const response = await axios.get(
    `${urlApi}/campaigns/${campaignId}/comments`
  );
  return response.data;
};
