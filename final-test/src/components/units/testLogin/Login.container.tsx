import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { LOGIN_USER } from "./Login.queries";
import { ChangeEvent, useState } from "react";
// import { Modal } from "antd"
import LoginUIPage from "./Login.presenter";
import { accessTokenState } from "../../../commons/testStore";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// const schema = yup.object({
//   email: yup.string().required("이메일을 입력해 주세요."),
//   password: yup.string().required("비밀번호를 입력해주세요."),
// });

export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  // const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  const onClickLogin = async (data) => {
    const result = await loginUser({
      variables: {
        ...data,
      },
    });

    const accessToken = result.data?.loginUser.accessToken;
    if (!accessToken) {
      alert("로그인에 실패하였습니다.");
      router.push("/login");
      return;
    }

    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    alert("로그인에 성공하였습니다.");
    router.push("/");
  };

  return (
    <LoginUIPage
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      // onChangeEmail={onChangeEmail}
      // onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
