import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getMerchants(page, search) {
    return apiClient.get(
      `/merchants?limit=10&offset=${page > 1 ? (page - 1) * 10 : 0}${
        search ? `&query=${search}` : ""
      }`
    );
  },
};
