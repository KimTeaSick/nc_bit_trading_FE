import axios from "axios";
import { useQuery, useMutation, UseQueryOptions } from "@tanstack/react-query";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from ".";
import { SearchOptionType } from "@/module/setting/setting";

export const getDisparityOptionThunk = createAsyncThunk(
  "getDisparityOptionThunk",
  async () => {
    const response = await get("setting/getDisparity");
    return response;
  }
);

export const useDisparityLineQuery = () => {
  const queryKey = "setting/getDisparity" as const;
  const queryFn = async () =>
    await axios
      .get("http://localhost:8000/" + queryKey)
      .then((res) => res.data);
  const request = useQuery([queryKey], queryFn);
  return request;
};

export const useDisparityLineMutation = (body: any) => {
  console.log("body :::::::: ", body);

  const mutationFn = async () => {
    await axios
      .post("http://localhost:8000/setting/updateDisparity", body)
      .then((res) => res.data);
  };
  const response = useMutation(mutationFn);
  return response;
};

export const useSearchOptionListQuery = () => {
  const queryKey = "setting/getSearchOptionList" as const;
  const queryFn = async () =>
    await axios
      .get("http://localhost:8000/" + queryKey)
      .then((res) => res.data);
  const request = useQuery([queryKey], queryFn);
  return request;
};

export const searchOptionInsert = async (body: SearchOptionType) => {
  const response = await post("setting/registerSearchOption", body);
  return response;
};
export const searchOptionUpdate = async (body: SearchOptionType) => {
  const response = await post("setting/updateSearchOption", body);
  return response;
};

export const useSearchOption = async (body: { num: string }) => {
  const response = await post("setting/updateUseSearchOption", body);
  return response;
};
