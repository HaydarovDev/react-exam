import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com/products/category/",
  timeout: 500,
});
