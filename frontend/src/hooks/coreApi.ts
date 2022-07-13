import axios from "axios"

export const coreApi = () => {
  return axios.create({
    baseURL: process.env.API_URL
  });
}