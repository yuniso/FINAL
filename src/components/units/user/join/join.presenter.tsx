import * as S from "./join.styles";

export default function JoinUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickJoin)}>
      <S.Wrapper>
        <S.Title>JOIN MEMBER</S.Title>
        <S.Line />
        <S.UserWrapper>
          <S.IdWrapper>
            <S.Label>아이디</S.Label>
            <S.Id
              type="text"
              placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
              {...props.register("email")}
            />
          </S.IdWrapper>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.PwWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
              {...props.register("password")}
            />
          </S.PwWrapper>
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <S.Pw2Wrapper>
            <S.Label>비밀번호 확인</S.Label>
            <S.Password2
              type="password"
              placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
              {...props.register("passwordConfirm")}
            />
          </S.Pw2Wrapper>
          <S.Error>{props.formState.errors.passwordConfirm?.message}</S.Error>
          <S.NameWrapper>
            <S.Label>이름</S.Label>
            <S.Name
              type="text"
              placeholder="ex) 홍길동"
              {...props.register("name")}
            />
          </S.NameWrapper>
          <S.Error>{props.formState.errors.name?.message}</S.Error>
        </S.UserWrapper>
        <S.Line />
        <S.ButtonWrapper>
          <S.CancelButton onClick={props.onClickCancel}>취소</S.CancelButton>
          <S.CreateButton type="submit">확인</S.CreateButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
