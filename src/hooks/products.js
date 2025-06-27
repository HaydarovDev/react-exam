import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["smartphones"],
    queryFn: async () => {
      const response = await api.get("/smartphones");
      return response?.data?.products;
    },
  });
};

export const useTablets = () => {
  return useQuery({
    queryKey: ["tablets"],
    queryFn: async () => {
      const response = await api.get("/tablets");
      return response?.data?.products;
    },
  });
};

export const useLaptops = () => {
  return useQuery({
    queryKey: ["laptops"],
    queryFn: async () => {
      const response = await api.get("/laptops");
      return response?.data?.products;
    },
  });
};
