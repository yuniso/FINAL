import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export const Wrapper = styled.div`
  width: 1920px;
  padding: 104px 0px 113px 91px;
`;
export const WriteTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #555555;
  margin-left: 37px;
`;
export const Line = styled.div`
  width: 1737.5px;
  border: 3px solid #555555;
  background-color: #555555;
  margin-top: 31px;
`;
export const InputWrapper = styled.div`
  display: flex;
  margin-top: 34px;
  align-items: center;
`;
export const Label = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-left: 43px;
`;
export const Name = styled.input`
  width: 1419px;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  outline: none;
  font-size: 24px;
  margin-left: 195px;
  padding-left: 19px;

  ::placeholder {
    font-size: 15px;
    color: #a9a9a9;
    padding-left: 19px;
  }
`;
export const InputLine2 = styled.div`
  width: 1735.5px;
  border: 1px solid #bdbdbd;
  margin-top: 26px;
`;
export const Remarks = styled.input`
  width: 1419px;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  outline: none;
  font-size: 24px;
  margin-left: 165px;
  padding-left: 19px;

  ::placeholder {
    font-size: 15px;
    color: #a9a9a9;
    padding-left: 19px;
  }
`;
// export const Contents = styled.input`
//   width: 1419px;
//   height: 56px;
//   background-color: #e9e9e9;
//   border: none;
//   outline: none;
//   font-size: 24px;
//   margin-left: 171px;
//   padding-left: 19px;

//   ::placeholder {
//     font-size: 15px;
//     color: #a9a9a9;
//     padding-left: 19px;
//   }
// `;
export const Price = styled.input`
  width: 1419px;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  outline: none;
  font-size: 24px;
  margin-left: 163px;
  padding-left: 19px;

  ::placeholder {
    font-size: 15px;
    color: #a9a9a9;
    padding-left: 19px;
  }
`;
export const Tags = styled.input`
  width: 1419px;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  outline: none;
  font-size: 24px;
  margin-left: 162px;
  padding-left: 19px;

  ::placeholder {
    font-size: 15px;
    color: #a9a9a9;
    padding-left: 19px;
  }
`;
export const AddressWrapper = styled.div`
  margin-top: 41px;
`;
export const PostalCodeWrapper = styled.div`
  margin-top: 66px;
  margin-left: 26px;
`;
export const PostalCode = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  color: #bdbdbd;
  outline: none;
  border: 1px solid #bdbdbd;

  ::placeholder {
    color: #bdbdbd;
  }
`;

export const PostalCodeButton = styled.button`
  width: 124px;
  height: 51px;
  margin-left: 16px;
  background-color: #555555;
  color: #ffffff;
  border: none;
`;
export const AddressDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Address1 = styled.input`
  margin-top: 26px;
  width: 1271px;
  height: 56px;
  background-color: #e9e9e9;
  outline: none;
  border: none;
`;
export const Address2 = styled.input`
  margin-top: 24px;
  width: 1271px;
  height: 56px;
  background-color: #e9e9e9;
  outline: none;
  border: none;
`;
export const UploadWrapper = styled.div`
  margin-top: 42px;
`;
export const ButtonWrapper = styled.div`
  padding: 73px 746px 0px 677px;
`;
export const CancelButton = styled.button`
  width: 195px;
  height: 77px;
  background-color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;
export const WriteButton = styled.button`
  width: 195px;
  height: 77px;
  background-color: #555555;
  margin-left: 16px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const AddressModal = styled(Modal)``;
export const AddressSearch = styled(DaumPostcode)``;
export const Error = styled.div`
  color: red;
  margin-top: 10px;
  margin-left: 303px;
`;
export const MapWrapper = styled.div`
  display: flex;
`;
export const ImageWrapper = styled.div`
  display: flex;
  margin-top: 47px;
  margin-left: 42px;
`;
