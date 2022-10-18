import * as S from "./Navigation.styles";

const menus = [
  { name: "BRAND", page: "/" },
  { name: "CATEGORY", page: "/" },
  { name: "LIFE", page: "/" },
  { name: "BEAUTY", page: "/" },
  { name: "|", page: "/" },
  { name: "#STYLE", page: "/" },
  { name: "EVENT", page: "/" },
];

export default function NavigationUI(props: any) {
  return (
    <S.Wrapper>
      {menus.map((e) => (
        <div key={e.page}>
          <S.MenuItem id={e.page} onClick={props.onClickMenu}>
            {e.name}
          </S.MenuItem>
        </div>
      ))}
    </S.Wrapper>
  );
}
