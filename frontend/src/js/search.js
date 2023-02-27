// search endpoints
import axios from "axios";

const urlApi = "http://167.99.235.152:8080/campaigns/search";

export const getCampaignsSearch = async () => {
  const response = await axios.get(`${urlApi}`);
  return response.data;
};

export const getCampaignPopulars = async () => {
  const response = await axios.get(`${urlApi}/mostPopular`);
  return response.data;
};

export const getCampaignearGoal = async () => {
  const response = await axios.get(`${urlApi}/nearGoal`);
  return response.data;
};

export const getCampaignNewest = async () => {
  const response = await axios.get(`${urlApi}/newest`);
  return response.data;
};

export const getCampaignProducts = async () => {
  const response = await axios.get(`${urlApi}/products`);
  return response.data;
};

export const getCampaignServices = async () => {
  const response = await axios.get(`${urlApi}/services`);
  return response.data;
};
