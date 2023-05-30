import axios from "axios";

// const URL = "http://121.165.242.171:34256";
const URL = "http://192.168.10.43:8888";

const validationCheck = (body: any) => {
  console.log("CoinSearchBody", body);
  const keys = Object.keys(body);
  for (const key of keys) {
    const values = Object.values(body[key]);
    for (const element of values) {
      if (element === "") {
        return false;
      }
    }
  }
  return true;
};

export const CoinSearch = async (body: any) => {
  const flag = validationCheck(body);
  if (flag) {
    const response = await axios.post(URL + "/dash/getRecommendCoin", body);
    return response.data;
  } else {
    alert("값을 다 채워주세요!");
    return flag;
  }
};

export const ConditionRegister = async (body: any) => {
  const response = await axios.post(URL + "/option/insertOption", body);
  if (response.data === "Insert sucess") {
    alert("조건이 등록되었습니다!");
    return 200;
  } else {
    alert("조건 등록 증 에러가 발생했습니다");
    return 500;
  }
};

export const ConditionEdit = async (name: string[], condition: any) => {
  const body = {
    Name: name[0],
    ...condition,
  };
  const response = await axios.post(URL + "/option/updateOption", body);
  if (response.data === "Insert sucess") {
    alert("조건이 수정되었습니다!");
    return 200;
  } else {
    alert("조건 수정증 에러가 발생했습니다");
    return 500;
  }
};

export const getConditionList = async () => {
  const response = await axios.get(URL + "/option/optionList");
  return response.data;
};

export const getConditionDetail = async (body: any) => {
  const response = await axios.post(URL + "/option/optionDetail", body);
  return response.data;
};

export const conditionDelete = async (name: any) => {
  const body = { option: name[0] };
  const response = await axios.post(URL + "/option/deleteOption", body);
  return response.data;
};

export const setUseCondition = async (name: any) => {
  const body = { option: name[0] };
  const response = await axios.post(URL + "/option/useOption", body);
  return response.data;
};
