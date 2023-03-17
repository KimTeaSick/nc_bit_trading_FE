import axios from "axios";
import { timeout } from "d3-timer";

const BASE_URL = "http://localhost:8000/";

export const get = async (uri: string, params = {}, headers = {}) => {
  try {
    const result = await axios.get(BASE_URL + uri, {
      ...params,
      headers: {
        ...headers,
      },
    });
    const { data } = result;
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const post = async (uri: string, body = {}, headers = {}) => {
  try {
    const result = await axios.post(BASE_URL + uri, body, {
      headers: {
        ...headers,
      },
    });
    const { data } = result;
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const patch = async (
  url: string,
  body = {},
  params = {},
  headers = {}
) => {
  try {
    const result = await axios.patch(url, body, {
      ...params,
      headers: {
        ...headers,
      },
    });
    const { data } = result;
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
