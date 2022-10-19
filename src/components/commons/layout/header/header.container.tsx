import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { loginStatusState } from "../../../../commons/store";
import HeaderUI from "./header.presenter";
import { FETCH_USER_LOGGED_IN } from "./header.queries";

export default function HeaderPage() {
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useRecoilState(loginStatusState);

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickJoin = () => {
    router.push("/join");
  };

  return (
    <HeaderUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
      loginStatus={loginStatus}
      userInfo={userInfo}
    />
  );
}
