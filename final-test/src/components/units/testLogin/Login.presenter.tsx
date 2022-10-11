import * as S from "./Login.styles";

export default function LoginUIPage(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.TitleLabel>Login</S.TitleLabel>
        <S.EmailWrapper>
          <S.Label>이메일</S.Label>
          <S.Email type="text" {...props.register("email")} />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
        </S.EmailWrapper>
        <S.PwWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Pw type="password" {...props.register("password")} />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
        </S.PwWrapper>
        <S.SubmitButton onClick={props.onClickButton}>
          로그인하기
        </S.SubmitButton>
      </S.Wrapper>
    </form>
  );
}
