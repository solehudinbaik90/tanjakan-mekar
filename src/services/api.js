import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  headers: { "Content-Type": "application/json" },
});

export const submitKritikSaran = (payload) => api.post("/kritiksaran", payload);
export const submitBukuTamu = (payload) => api.post("/bukutamu", payload);
export const submitSurvey = (payload) => api.post("/survey", payload);
export const submitPolling = (payload) => api.post("/poling", payload);

export default api;
