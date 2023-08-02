import axios from "axios";

// const BASE_URL = "http://52.78.246.119:8888/";
// const BASE_URL = "http://3.35.242.102:8888/";
const BASE_URL = "http://121.165.242.171:34256/";

// const token = localStorage.getItem("access_token");

// const client = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `Bearer ${JSON.parse(token)}`,
//   },
// });

export const get = async (uri: string, params = {}, headers = {}) => {
  try {
    const result = await axios.get(BASE_URL + uri, {
      ...params,
      headers: {
        ...headers,
      },
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
