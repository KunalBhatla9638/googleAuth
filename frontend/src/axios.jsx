import axios from "axios";

const API = "http://localhost:3000/api/";

const BASEURL = axios.create({
  baseURL: API,
});

export default API;
