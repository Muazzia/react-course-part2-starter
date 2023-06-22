import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../apiCLient/apiClient";

const useData = <T>(key: string, endpoint: string) => {
  const Fetch = () => apiClient.get<T[]>(endpoint).then((res) => res.data);

  return useQuery<T[], Error>({
    queryKey: [key],
    queryFn: Fetch,
  });
};

export default useData;
