import * as S from "./marketWrite.styles";

export default function MarketWriteUI() {
  return (
    <S.Wrapper>
      <S.WriteTitle>상품 등록</S.WriteTitle>
      <S.Line />
      <S.InputWrapper>
        <S.Label>상품명</S.Label>
        <S.Name placeholder="상품명을 작성해주세요" />
      </S.InputWrapper>
      <S.InputLine2 />
      <S.InputWrapper>
        <S.Label>상품 요약</S.Label>
        <S.Remarks placeholder="상품요약을 작성해주세요" />
      </S.InputWrapper>
      <S.InputLine2 />
      <S.InputWrapper>
        <S.Label>상품내용</S.Label>
        <S.Contents placeholder="상품을 설명해주세요." />
      </S.InputWrapper>
      <S.InputLine2 />
      <S.InputWrapper>
        <S.Label>판매 가격</S.Label>
        <S.Price placeholder="판매 가격을 입력해주세요" />
      </S.InputWrapper>
      <S.InputLine2 />
      <S.InputWrapper>
        <S.Label>태그 입력</S.Label>
        <S.Tags placeholder="#태그 #태그 #태그" />
      </S.InputWrapper>
      <S.InputLine2 />
      <S.AddressWrapper>
        <S.Label>브랜드 위치</S.Label>
        <S.PostalCodeWrapper>
          <S.PostalCode placeholder="07250" />
          <S.PostalCodeButton>우편번호 검색</S.PostalCodeButton>
        </S.PostalCodeWrapper>
        <S.AddressDetail>
          <S.Address1 />
          <S.Address2 />
        </S.AddressDetail>
      </S.AddressWrapper>
      <S.InputLine2 />
      <S.UploadWrapper>
        <S.Label>사진 첨부</S.Label>
      </S.UploadWrapper>
      <S.Line />
      <S.ButtonWrapper>
        <S.CancelButton>취소</S.CancelButton>
        <S.WriteButton>등록</S.WriteButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
