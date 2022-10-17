import JoinUI from "./join.presenter";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./join.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ICreateUserInput,
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { message, Modal } from "antd";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일  아이디를 @까지 정확하게 입력하세요.")
    .matches(/^\w+@\w+\.\w+$/, "이메일 형식에 알맞지 않습니다."),
  password: yup
    .string()
    .required("비밀번호는 최소 8자 최대 16자로 입력해주세요.")
    .min(8, "비밀번호는 최소 8자로 입력해주세요.")
    .max(16, "비밀번호는 최대 16자로 입력해주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      "영문 + 숫자 조합 8~16자리의 비밀번호를 입력해주세요"
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 다시 한번 입력해주세요."),
  name: yup.string().required("이름을 입력해 주세요."),
});

export default function JoinPage() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickJoin = async (data: ICreateUserInput) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      alert("회원가입이 완료되었습니다.");
      // 경로 로그인 창으로 변경해야 함
      router.push("/login");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickCancel = () => {
    router.push("/");
  };
  return (
    <JoinUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickJoin={onClickJoin}
      onClickCancel={onClickCancel}
    />
  );
}
