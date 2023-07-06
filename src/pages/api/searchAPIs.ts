import { post, get } from ".";

const URL = "http://121.165.242.171:34256";
// const URL = "http://192.168.10.43:8888";

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
  try {
    const flag = validationCheck(body);
    if (flag) {
      const response = await post("dash/getRecommendCoin", body);
      console.log("response.data", response);
      return { data: response };
    } else {
      alert("값을 다 채워주세요!");
      return flag;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const B_CoinSearch = async (body: any) => {
  try {
    const flag = validationCheck(body);
    if (flag) {
      const response = await post("newRawSearch", body);
      console.log("response.data", response);
      return { data: response };
    } else {
      alert("값을 다 채워주세요!");
      return flag;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const ConditionRegister = async (body: any) => {
  const response = await post("option/insertOption", body);
  if (response === "Insert sucess") {
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
  const response = await post("option/updateOption", body);
  if (response === "Insert sucess") {
    alert("조건이 수정되었습니다!");
    return 200;
  } else {
    alert("조건 수정증 에러가 발생했습니다");
    return 500;
  }
};

export const getConditionList = async () => {
  const response = await get("option/optionList");
  console.log(response);
  return response;
};

export const getConditionDetail = async (body: any) => {
  const response = await post("option/optionDetail", body);
  return response;
};

export const conditionDelete = async (name: any) => {
  const body = { option: name[0] };
  const response = await post("option/deleteOption", body);
  if (response === "delete sucess") alert("조건이 삭제되었습니다");
  return response;
};

export const setUseCondition = async (name: any) => {
  const body = { option: name[0] };
  const response = await post("option/useOption", body);
  return response;
};
