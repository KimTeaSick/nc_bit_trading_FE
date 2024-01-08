import axios from "axios";

// const BASE_URL = "https://www.argo4s.com/api/";

const token =
  typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

const client = () => {
  const platform =
    typeof window !== "undefined"
      ? localStorage.getItem("user_platform")
      : null;
  const BASE_URL = !platform
    ? "http://localhost:8888/"
    : platform == "1"
    ? "http://localhost:8888/"
    : "http://localhost:8889/";
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const get = async (uri: string, params = {}, headers = {}) => {
  try {
    const result = await client().get(uri, {
      ...params,
      withCredentials: true,
    });
    const { data } = result;
    if (data.status === 401) {
      window.location.href = "/user/login";
      localStorage.clear();
    }
    return data.data;
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
    const result = await client().post(uri, body, {
      headers: {
        ...headers,
      },
    });
    const { data } = result;
    if (data.status === 401) {
      window.location.href = "/user/login";
      localStorage.clear();
    }
    return data.data;
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
    const result = await client().patch(url, body, {
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
