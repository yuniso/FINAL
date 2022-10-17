import { ICreateUserInput } from "../../../../commons/types/generated/types";

export interface IJoinUIProps {
  onClickJoin: (data: ICreateUserInput) => void;
  onClickCancel: () => void;
  register: any;
  handleSubmit: any;
  formState: any;
}
