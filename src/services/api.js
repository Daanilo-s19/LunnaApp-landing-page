import axios from "axios";

const api = axios.create({
  baseURL: "https://develop-api.lunna.io"
});

export default api;
