import { useRouter } from "next/router";
import * as S from "./navigation.styles";

const menus = [
  { name: "BRAND", page: "/" },
  { name: "CATEGORY", page: "/" },
  { name: "LIFE", page: "/" },
  { name: "BEAUTY", page: "/" },
  { name: "|", page: "/" },
  { name: "#STYLE", page: "/" },
  { name: "EVENT", page: "/" },
];

const loginMenus = [
  { logo: "DINGCO", page: "/" },
  { name: "BRAND", page: "/" },
  { name: "CATEGORY", page: "/" },
  { name: "LIFE", page: "/" },
  { name: "BEAUTY", page: "/" },
  { name: "|", page: "/" },
  { name: "#STYLE", page: "/" },
  { name: "EVENT", page: "/" },
  { name2: "회원가입", page: "/join" },
  { name2: "장바구니", page: "/" },
];

const joinMenus = [
  { logo: "DINGCO", page: "/" },
  { name: "BRAND", page: "/" },
  { name: "CATEGORY", page: "/" },
  { name: "LIFE", page: "/" },
  { name: "BEAUTY", page: "/" },
  { name: "|", page: "/" },
  { name: "#STYLE", page: "/" },
  { name: "EVENT", page: "/" },
  { name2: "로그인", page: "/login" },
  { name2: "장바구니", page: "/" },
];

const HIDDEN_LOGIN = ["/login"];
const HIDDEN_JOIN = ["/join"];

export default function NavigationUI(props: any) {
  const router = useRouter();
  const isHiddenLoginNavigation = HIDDEN_LOGIN.includes(router.pathname);
  const isHiddenJoinNavigation = HIDDEN_JOIN.includes(router.pathname);

  console.log(loginMenus);
  return (
    <S.Wrapper>
      {isHiddenLoginNavigation
        ? loginMenus.map((e) => (
            <div key={e.page}>
              <S.Logo id={e.page} onClick={props.onClickMenu}>
                {e.logo}
              </S.Logo>
              <S.MenuItem id={e.page} onClick={props.onClickMenu}>
                {e.name}
              </S.MenuItem>
              <S.LoginItem id={e.page} onClick={props.onClickMenu}>
                {e.name2}
              </S.LoginItem>
            </div>
          ))
        : isHiddenJoinNavigation
        ? joinMenus.map((e) => (
            <div key={e.page}>
              <S.Logo id={e.page} onClick={props.onClickMenu}>
                {e.logo}
              </S.Logo>
              <S.MenuItem id={e.page} onClick={props.onClickMenu}>
                {e.name}
              </S.MenuItem>
              <S.LoginItem id={e.page} onClick={props.onClickMenu}>
                {e.name2}
              </S.LoginItem>
            </div>
          ))
        : menus.map((e) => (
            <div key={e.page}>
              <S.MenuItem id={e.page} onClick={props.onClickMenu}>
                {e.name}
              </S.MenuItem>
            </div>
          ))}
    </S.Wrapper>
  );
}
