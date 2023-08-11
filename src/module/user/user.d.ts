export type UserInitialStateType = {
  userInfo: UserInfoType;
  userInfoStatus: string;
};

type UserInfoType = {
  idx: null | number;
  name: string;
};
