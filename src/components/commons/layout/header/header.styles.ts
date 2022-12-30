import styled from "@emotion/styled";
import { Modal } from "antd";

export const Wrapper = styled.div`
  width: 1920px;
  height: 100px;
  display: flex;
`;

export const Logo = styled.div`
  width: 183px;
  height: 49px;
  background: url("/navigation/Simple_Logo.png");
  margin-top: 26px;
  margin-left: 76px;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 1200px;
  align-items: center;
  cursor: pointer;
`;

export const Item1 = styled.div``;
export const Item2 = styled.div`
  margin-left: 66px;
`;

export const Item3 = styled.div`
  margin-left: 56px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Point = styled.div``;
export const Reload = styled.button`
  border: none;
  margin-left: 7px;
  background-color: #ffffff;
  cursor: pointer;
`;

export const Logout = styled.button`
  border: none;
  margin-left: 20px;
  background-color: #ffffff;
  cursor: pointer;
`;

export const Basket = styled.div`
  margin-left: 45px;
`;

export const ModalOpen = styled(Modal)`
  margin-top: 500px;
`;
export const CancelButton = styled.button``;
export const ReloadTitle = styled.div``;
export const ReloadSelect = styled.select``;
export const ReloadButton = styled.button``;
export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  text-align: center;
  background-color: #f65656;
  margin-left: 5px;
`;

export const Button = styled.button``;
