import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // ✅ FIXED PORT
});

export const fetchProperties = (params) => {
  return API.get("/properties", { params });
};

export const fetchProperty = (id) => {
  return API.get(`/properties/${id}`);
};
