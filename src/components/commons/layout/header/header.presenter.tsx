import * as S from "./header.styles";

export default function HeaderUI(props: any) {
  return (
    <S.Wrapper>
      <S.Logo onClick={props.onClickLogo} />
      <S.ItemWrapper>
        {props.loginStatus ? (
          <S.Point>{props.data?.fetchUserLoggedIn.name}님 포인트</S.Point>
        ) : (
          <>
            <S.Item1 onClick={props.onClickLogin}>로그인</S.Item1>
            <S.Item2 onClick={props.onClickJoin}>회원가입</S.Item2>
            <S.Item3>장바구니</S.Item3>
          </>
        )}
      </S.ItemWrapper>
    </S.Wrapper>
  );
}
