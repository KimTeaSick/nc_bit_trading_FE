export const register_return_event = (re_val: number) => {
  console.log(re_val);

  let condition = 200;
  switch (re_val) {
    case 200:
      alert("회원가입이 승인 되었습니다.");
      break;

    case 333:
      alert("이메일이 중복 되었습니다.");
      condition = 444;
      break;

    case 444:
      alert("회원가입 중 오류가 발생하였습니다.");
      condition = 444;
      break;

    case 456:
      alert("API KEY를 확인해 주세요.");
      condition = 444;
      break;
  }
  return condition;
};
