import * as S from "./ProductDetail.styles";

export default function ProductDetailUI(props: any) {
  return (
    <S.Wrapper>
      <S.DetailImage>
        {props.data?.fetchUseditem.images.map((e: any) => (
          <S.Ima key={e._id} src={`https://storage.googleapis.com/${e}`} />
        ))}
        <S.Name>{props.data?.fetchUseditem.name}</S.Name>
      </S.DetailImage>
    </S.Wrapper>
  );
}
