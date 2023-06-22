import axios from "axios";

const BASE_URL = "http://52.78.246.119:8888/";
// const BASE_URL = "http://121.165.242.171:34256/";

export const get = async (uri: string, params = {}, headers = {}) => {
  try {
    const result = await axios.get(BASE_URL + uri, {
      ...params,
      headers: {
        ...headers,
      },
    });
    const { data } = result;
    if (data === 444) {
      alert("해당 요청중 오류가 나타났습니다.");
      return;
    }
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
    if (data === 444) {
      alert("해당 요청중 오류가 나타났습니다.");
      return;
    }
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
