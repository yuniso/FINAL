import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const loginStatusState = atom({
  key: "loginStatus",
  default: false,
});

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const PointState = atom({
  key: "PointState",
  default: false,
});
