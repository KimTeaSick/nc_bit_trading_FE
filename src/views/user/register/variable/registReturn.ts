export const register_return_event = (re_val: number) => {
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
  }
  return condition;
};
