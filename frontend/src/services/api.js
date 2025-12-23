import axios from "axios";

const API = axios.create({
//  baseURL: "http://localhost:3000/api",     // used only for local server
    baseURL: "https://shree-devine-backend.onrender.com/api",

});

export const fetchProperties = (params) =>
  API.get("/properties", { params });

export const fetchProperty = (id) =>
  API.get(`/properties/${id}`);

export const createLead = (data) =>
  API.post("/leads", data);

export default API;
