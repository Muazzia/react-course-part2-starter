import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiCLient/apiClient";
import axios from "axios";
import useData from "./useData";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePostList = () => {
  return useData<Post>("Post", "/posts", 5);
};

export default usePostList;
