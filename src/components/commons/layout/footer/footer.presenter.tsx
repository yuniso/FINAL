import * as S from "./footer.styles";

export default function FooterUI() {
  return (
    <div>
      <S.Line />
      <S.Wrapper>
        <S.Logo />
        <S.Body>
          {/* prettier-ignore */}
          <pre>
          (주) 딩코          대표: 안우엽<br/>
          사업자등록번호 717-87-02373<br/>
          주소: 서울특별시 구로구 디지털로 300,패스트파이브<br/>
          학원 등록 번호: 제 5845호<br/>
          개인정보처리방침     서비스 이용 약관<br/>
          Copyright©2022.Dingco Corp.,Ltd.
        </pre>
        </S.Body>
      </S.Wrapper>
    </div>
  );
}
