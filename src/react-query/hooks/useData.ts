import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../apiCLient/apiClient";

const useData = <T>(key: string, endpoint: string, stale = 1) => {
  const Fetch = () => apiClient.get<T[]>(endpoint).then((res) => res.data);

  return useQuery<T[], Error>({
    queryKey: [key],
    queryFn: Fetch,
    staleTime: stale * 1000,
  });
};


export default useData;
