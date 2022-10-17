import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { loginStatusState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LoginUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일  아이디를 @까지 정확하게 입력하세요.")
    .matches(/^\w+@\w+\.\w+$/, "이메일 형식에 알맞지 않습니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      "영문 + 숫자 조합 8~16자리의 비밀번호를 입력해주세요"
    )
    .required("비밀번호는 최소 8자 최대 16자로 입력해주세요."),
});

export default function LoginPage() {
  const router = useRouter();
  const apolloClient = useApolloClient();

  const [loginStatus, setLoginStatus] = useRecoilState(loginStatusState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      const userInfo = await apolloClient.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const getUserInfo = userInfo.data.fetchUserLoggedIn;
      localStorage.setItem("accessToken", accessToken as string);
      localStorage.setItem("userInfo", JSON.stringify(getUserInfo));
      setLoginStatus(true);
      router.push("/");
      alert("로그인에 성공하였습니다.");
      console.log(result);
    } catch (error) {
      message.error("로그인에 실패하였습니다.");
    }
  };
  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}
