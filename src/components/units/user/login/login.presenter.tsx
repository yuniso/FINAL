import * as S from "./login.styles";

export default function LoginUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.Title>LOGIN</S.Title>
        <S.Line />
        <S.InputWrapper>
          <S.IdWrapper>
            <S.InputTitle>아이디</S.InputTitle>
            <S.Id
              placeholder="이메일 아이디를 @까지 정확하게 입력하세요."
              {...props.register("email")}
            />
          </S.IdWrapper>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.PwWrapper>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.Pw
              type="password"
              placeholder="영문+숫자 조합 8 ~ 16자리를 입력해주세요."
              {...props.register("password")}
            />
          </S.PwWrapper>
          <S.Error>{props.formState.errors.password?.message}</S.Error>
        </S.InputWrapper>
        <S.LoginButton>로그인</S.LoginButton>
      </S.Wrapper>
    </form>
  );
}
