import axios from "axios";

const API = axios.create({
 baseURL: "http://localhost:3000/api",

});

export const fetchProperties = (params) =>
  API.get("/properties", { params });

export const fetchProperty = (id) =>
  API.get(`/properties/${id}`);

export const createLead = (data) =>
  API.post("/leads", data);

export default API;
