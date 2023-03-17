import React from "react";
import {
  QueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import axios from "axios";

export const useRecommendPrice = () => {
  const queryKey = "getRecommendPrice" as const;
  const queryFn = async () =>
    await axios
      .get("http://localhost:8000/" + queryKey)
      .then((res) => res.data);
  const request = useQuery([queryKey], queryFn);

  return { request };
};
