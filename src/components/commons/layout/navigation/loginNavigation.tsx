import { useRouter } from "next/router";
import * as S from "./navigation.styles";

const menus = [
  { logo: "DINGCO", page: "/" },
  { name: "BRAND", page: "/market" },
  { name: "CATEGORY", page: "/market" },
  { name: "LIFE", page: "/market" },
  { name: "BEAUTY", page: "/market" },
  { name: "|", page: "/market" },
  { name: "#STYLE", page: "/market" },
  { name: "EVENT", page: "/market" },
  { name: "BEST", page: "/market" },
  { name2: "회원가입", page: "/join" },
  { name2: "장바구니", page: "/market" },
];

export default function LoginNavigation(props: any) {
  const router = useRouter();

  const onClickMenu = (event: any) => {
    router.push(event.target.id);
  };
  return (
    <S.Wrapper>
      {menus.map((e: any) => (
        <div key={e.page}>
          <S.Logo id={e.page} onClick={onClickMenu}>
            {e.logo}
          </S.Logo>
          <S.MenuItem id={e.page} onClick={onClickMenu}>
            {e.name}
          </S.MenuItem>
          <S.LoginItem id={e.page} onClick={onClickMenu}>
            {e.name2}
          </S.LoginItem>
        </div>
      ))}
    </S.Wrapper>
  );
}
