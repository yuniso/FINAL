import * as S from "./ProductDetail.styles";

export default function ProductDetailUI(props: any) {
  console.log(props.data?.fetchUseditem.tags);
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.DetailImage>
          <S.Img
            src={
              props.data?.fetchUseditem.images?.[0]
                ? `http://storage.googleapis.com/${props.data.fetchUseditem.images?.[0]}`
                : "/main/main.png"
            }
          />
        </S.DetailImage>
        <S.DetailWrapper>
          <S.Name>{props.data?.fetchUseditem.name}</S.Name>
          <S.Price>
            <span style={{ fontSize: "12px", marginRight: "62px" }}>
              판매가
            </span>
            {props.data?.fetchUseditem.price.toLocaleString()}{" "}
            <span style={{ fontSize: "12px" }}>원</span>
          </S.Price>
          <S.Line />
          <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
          <S.Tags>
            {props.data?.fetchUseditem.tags?.map((e: any) => (
              <S.Tags key={e}>{e}</S.Tags>
            ))}
          </S.Tags>

          <S.Line2 />
          <S.ButtonWrapper>
            <S.BuyButton>BUY NOW</S.BuyButton>
            <S.BagButton>SHOPPING BAG</S.BagButton>
          </S.ButtonWrapper>
        </S.DetailWrapper>
      </S.HeaderWrapper>
      <S.DetailTitle>DETAIL</S.DetailTitle>
      <S.Line3 />
      <S.Contents>{props.data?.fetchUseditem.contents}</S.Contents>
    </S.Wrapper>
  );
}
