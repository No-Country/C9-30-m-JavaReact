import axios from "axios";

const urlApi = "http://167.99.235.152:8080/campaigns";

export const getCampaigns = async () => {
  const response = await axios.get(`${urlApi}`);
  return response.data.content;
};

export const addCampaigns = async (campaign) => {
  const response = await axios.post(`${urlApi}`, campaign);
  return response.data.content;
};

export const getCampaignById = async (id) => {
  const response = await axios.get(`${urlApi}/${id}`);
  return response.data;
};

export const getCampaignComments = async (campaignId) => {
  const response = await axios.get(`${urlApi}/${campaignId}/comments`);
  return response.data;
};
