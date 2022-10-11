import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-left: 50px;
`;

export const EmailWrapper = styled.div``;
export const Label = styled.div`
  width: 100px;
`;

export const Email = styled.input``;
export const PwWrapper = styled.div``;
export const Pw = styled.input``;
export const SubmitButton = styled.button`
  color: white;
  border: 1px solid #fabd3e;
  background-color: #fabd3e;
  cursor: pointer;
  margin-top: 10px;
  
`;

export const TitleLabel = styled.div`
  color: #39b7c1;
  font-size: 36px;
  font-weight: 700;
  margin-right: 150px;
  padding-bottom: 50px;
`;

export const Error = styled.div`
  color: red;
`;
