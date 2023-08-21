import axios from "axios";

const BASE_URL = "http://52.78.246.119:8888/";
// const BASE_URL = "http://3.35.242.102:8888/";
// const BASE_URL = "http://121.165.242.171:34256/";

const token =
  typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    // Authorization: `Bearer 12`,
  },
});

export const get = async (uri: string, params = {}, headers = {}) => {
  try {
    const result = await client.get(BASE_URL + uri, {
      ...params,
      withCredentials: true,
    });
    const { data } = result;
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const post = async (
  uri: string,
  body = {},
  headers = {}
): Promise<any> => {
  try {
    const result = await client.post(BASE_URL + uri, body, {
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
    const result = await client.patch(url, body, {
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
