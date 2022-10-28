import { useRouter } from "next/router";
import * as S from "./navigation.styles";

const menus = [
  { name: "BRAND", page: "/market" },
  { name: "CATEGORY", page: "/market" },
  { name: "LIFE", page: "/market" },
  { name: "BEAUTY", page: "/market" },
  { name: "|", page: "/market" },
  { name: "#STYLE", page: "/market" },
  { name: "EVENT", page: "/market" },
  { name: "BEST", page: "/market" },
];

export default function NavigationUI(props: any) {
  return (
    <S.Wrapper>
      {menus.map((e: any) => (
        <S.MenuItem key={e.page} id={e.page} onClick={props.onClickMenu}>
          {e.name}
        </S.MenuItem>
      ))}
    </S.Wrapper>
  );
}
