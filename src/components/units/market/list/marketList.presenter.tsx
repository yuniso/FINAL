import * as S from "./marketList.styles";
import { BiSearch } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketListUI(props: any) {
  return (
    <S.Wrapper>
      <S.BestWrapper>
        <S.Title>BEST</S.Title>
        <S.ItemCardWrapper>
          {props.bestItems?.fetchUseditemsOfTheBest.map((e: any) => (
            <>
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
            </>
          ))}
        </S.ItemCardWrapper>
      </S.BestWrapper>
      <S.ButtonWrapper>
        <S.CreateButton onClick={props.onClickMoveToWrite}>
          상품등록
        </S.CreateButton>
        <S.search />
        <BiSearch
          size={40}
          style={{ position: "relative", right: "48px", top: "15px" }}
        />
      </S.ButtonWrapper>
      <S.Line />
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onFetchMore}
        hasMore={true || false}
      >
        <S.UseditemsWrapper>
          {props.usedItems ? (
            props.usedItems?.fetchUseditems.map((e: any) => (
              <S.UseditemCard
                key={e._id}
                id={e._id}
                onClick={props.onClickMoveToDetail}
              >
                <S.UseditemImage
                  src={
                    e.images[0]
                      ? `https://storage.googleapis.com/${e.images[0]}`
                      : "/main/main.png"
                  }
                />
                <S.UsedDetailWrapper>
                  <S.UsedTagsWrapper>
                    <S.UsedTags>{e.tags[0] ? e.tags : "기본태그"}</S.UsedTags>
                    <S.UsedPrice>
                      {e.price ? e.price.toLocaleString() : e.price}
                    </S.UsedPrice>
                  </S.UsedTagsWrapper>
                  <S.UsedSeller>{e.seller.name}</S.UsedSeller>
                  <S.UsedName>{e.name}</S.UsedName>
                </S.UsedDetailWrapper>
              </S.UseditemCard>
            ))
          ) : (
            <></>
          )}
        </S.UseditemsWrapper>
      </InfiniteScroll>
    </S.Wrapper>
  );
}
