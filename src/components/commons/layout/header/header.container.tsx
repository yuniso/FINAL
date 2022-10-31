import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loginStatusState } from "../../../../commons/store";
import HeaderUI from "./header.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
  LOGOUT_USER,
} from "./header.queries";
import Script from "next/script";
import { useForm } from "react-hook-form";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function HeaderPage() {
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useRecoilState(loginStatusState);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState(false);

  const { data: LoginUser } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLoginStatus(true);
    } else if (!localStorage.getItem("accessToken")) {
      setLoginStatus(false);
    }
  }, [loginStatus]);

  useEffect(() => {
    setUser(LoginUser);
  }, [user]);

  const onClickLogout = () => {
    try {
      logoutUser();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
      setLoginStatus(false);

      deleteCookie("refreshToken");
      router.push("/");
      Modal.success({ content: "로그아웃 되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickReload = (data: any) => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "포인트 충전",
        amount: data.price,
        buyer_email: LoginUser?.fetchUserLoggedIn.email,
        buyer_name: LoginUser?.fetchUserLoggedIn.name,
        buyer_tel: "010-0000-0000",
        buyer_addr: "서울특별시 구로구 디지털로 300, 패스트파이브 구로점",
        buyer_postcode: "08379",
        m_redirect_url: `http://localhost:3000/`,
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          setIsOpen(false);
          router.push("/");
          Modal.success({ content: "결제되었습니다." });
        } else {
          Modal.error({ content: "다시 시도해주세요." });
        }
      }
    );
  };

  const deleteCookie = (name: any) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
  };

  const onClickModal = () => {
    setIsOpen(true);
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

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
    <div>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      />
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
      />
      <HeaderUI
        onClickLogo={onClickLogo}
        onClickLogin={onClickLogin}
        onClickJoin={onClickJoin}
        loginStatus={loginStatus}
        LoginUser={LoginUser}
        onClickLogout={onClickLogout}
        setIsOpen={setIsOpen}
        isActive={isActive}
        onClickReload={onClickReload}
        isOpen={isOpen}
        onClickModal={onClickModal}
        onClickCancel={onClickCancel}
        register={register}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
