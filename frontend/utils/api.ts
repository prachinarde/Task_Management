import axios from "axios";

const API_URL = "http://localhost:8080"; // Backend URL

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

// Set Auth Token
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};