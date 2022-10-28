import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  padding: 95px 91px 312px;
`;

export const Title = styled.div`
  margin-left: 794px;
  font-size: 40px;
`;

export const Line = styled.div`
  width: 1700px;
  border: 3px solid #555555;
  margin-top: 114px;
  background-color: #555555;
`;

export const IdWrapper = styled.div`
  display: flex;
  margin-top: 174px;
`;

export const InputTitle = styled.div`
  font-size: 24px;
  margin-left: 390px;
  display: flex;
  align-items: center;
`;

export const Id = styled.input`
  width: 611px;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  outline: none;
  padding-left: 18px;
  font-size: 20px;
  margin-left: 60px;

  ::placeholder {
    font-size: 15px;
    color: #a9a9a9;
  }
`;

export const PwWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const Pw = styled.input`
  width: 611px;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  outline: none;
  padding-left: 18px;
  font-size: 20px;
  margin-left: 38px;

  ::placeholder {
    font-size: 15px;
    color: #a9a9a9;
  }
`;

export const LoginButton = styled.button`
  width: 186px;
  height: 136px;
  background-color: #000000;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  margin-left: 31px;
  margin-top: 174px;
`;

export const InputWrapper = styled.div`
  float: left;
`;

export const Error = styled.div`
  color: red;
  margin-left: 522px;
  margin-top: 10px;
`;
