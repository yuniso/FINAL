import * as S from "./main.style";

export default function MainUI(props: any) {
  return (
    <S.Wrapper>
      <S.Title>New Arrival</S.Title>
      <S.ItemCardWrapper>
        {props.data?.fetchUseditems.slice(0, 8).map((e: any) => (
          <S.ItemCard
            key={e._id}
            id={e._id}
            onClick={props.onClickMoveToDetail}
          >
            <S.ItemImage
              src={
                e.images[0]
                  ? `https://storage.googleapis.com/${e.images[0]}`
                  : "/main/main.png"
              }
            />
            <S.ItemDetail>
              <S.TagsDetail>
                <S.Tags>{e.tags[0] ? e.tags : "기본태그"}</S.Tags>
                <S.Price>{e.price.toLocaleString()}</S.Price>
              </S.TagsDetail>
              <S.seller>{e.seller.name}</S.seller>
              <S.name>{e.name}</S.name>
            </S.ItemDetail>
          </S.ItemCard>
        ))}
      </S.ItemCardWrapper>
    </S.Wrapper>
  );
}
