import * as S from "./ProductWrite.styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function ProductWriteUI(props: any) {
  return (
    <S.Wrapper>
      <S.Title>상품 등록</S.Title>
      <S.Line />
      <S.NameWrapper>
        <S.Label>상품명</S.Label>
        <S.Name placeholder="상품명을 작성해주세요" {...props.register("name")}/>
      </S.NameWrapper>
      <S.Line2 />
      <S.RemarksWrapper>
        <S.Label>상품 요약</S.Label>
        {/* <ReactQuill
          theme="snow"
          value={value} onChange={setValue}
        /> */}
        <S.Remarks placeholder="상품요약을 작성해주세요" {...props.register("remarks")}/>
      </S.RemarksWrapper>
      <S.Line2 />
      <S.ContentsWrapper>
        <S.Label>상품 내용</S.Label>
        <S.Contents placeholder="상품을 설명해주세요" {...props.register("contents")}/>
      </S.ContentsWrapper>
      <S.Line2 />
      <S.PriceWrapper>
        <S.Label>판매 가격</S.Label>
        <S.Price placeholder="판매 가격을 입력해주세요" {...props.register("price")}/>
      </S.PriceWrapper>
      <S.Line2 />
      <S.TagsWrapper>
        <S.Label>태그 입력</S.Label>
        <S.Tags placeholder="#태그 #태그 #태그" {...props.register("tags")}/>
      </S.TagsWrapper>
      <S.Line2 />
      <S.Line />
      <S.Button onClick={props.onClickCreate}>등록</S.Button>
    </S.Wrapper>
  );
}
