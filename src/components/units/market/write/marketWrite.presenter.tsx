import * as S from "./marketWrite.styles";
import "react-quill/dist/quill.snow.css";
import KaKaoMap from "./kakaoMap";
import Uploads01 from "../../../commons/uploads/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWriteUI(props: any) {
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickWrite)
      }
    >
      {props.isOpen && (
        <S.AddressModal
          visible={true}
          closable={false}
          onCancel={props.handleCancel}
        >
          <S.AddressSearch
            onComplete={props.onCompleteAddressSearch}
          ></S.AddressSearch>
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.WriteTitle>{props.isEdit ? "상품 수정" : "상품 등록"}</S.WriteTitle>
        <S.Line />
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.Name
            placeholder="상품명을 작성해주세요"
            {...props.register("name")}
          />
        </S.InputWrapper>
        <S.Error>{props.formState.errors.name?.message}</S.Error>
        <S.InputLine2 />
        <S.InputWrapper>
          <S.Label>상품 요약</S.Label>
          <S.Remarks
            placeholder="상품요약을 작성해주세요"
            {...props.register("remarks")}
          />
        </S.InputWrapper>
        <S.Error>{props.formState.errors.remarks?.message}</S.Error>
        <S.InputLine2 />
        <S.InputWrapper>
          <S.Label>상품내용</S.Label>
          {props.isEdit ? (
            props.data?.fetchUseditem.contents && (
              <ReactQuill
                onChange={props.onChangeContents}
                placeholder="상품을 설명해주세요."
                style={{
                  width: "1419px",
                  height: "431px",
                  marginLeft: "171px",
                }}
                defaultValue={props.data?.fetchUseditem.contents}
              />
            )
          ) : (
            <ReactQuill
              onChange={props.onChangeContents}
              placeholder="상품을 설명해주세요."
              style={{ width: "1419px", height: "431px", marginLeft: "171px" }}
            />
          )}
        </S.InputWrapper>
        <S.Error style={{ marginTop: "55px" }}>
          {props.formState.errors.contents?.message}
        </S.Error>
        <S.InputLine2 style={{ marginTop: "25px" }} />
        <S.InputWrapper>
          <S.Label>판매 가격</S.Label>
          <S.Price
            placeholder="판매 가격을 입력해주세요"
            {...props.register("price")}
          />
        </S.InputWrapper>
        <S.Error>{props.formState.errors.price?.message}</S.Error>
        <S.InputLine2 />
        <S.InputWrapper>
          <S.Label>태그 입력</S.Label>
          <S.Tags
            placeholder="#태그 #태그 #태그"
            defaultValue={props.data?.fetchUseditem.tags}
            {...props.register("tags")}
          />
        </S.InputWrapper>
        <S.InputLine2 />
        <S.AddressWrapper>
          <S.Label>브랜드 위치</S.Label>
          <S.MapWrapper>
            <KaKaoMap address={props.address}></KaKaoMap>
            <S.PostalCodeWrapper>
              <S.PostalCode placeholder="07250" readOnly />
              <S.PostalCodeButton
                type="button"
                onClick={props.onClickAddressSearch}
              >
                우편번호 검색
              </S.PostalCodeButton>
              <S.AddressDetail>
                <S.Address1
                  {...props.register("useditemAddress.address")}
                  readOnly
                />
                <S.Address2
                  {...props.register("useditemAddress.addressDetail")}
                />
              </S.AddressDetail>
            </S.PostalCodeWrapper>
          </S.MapWrapper>
        </S.AddressWrapper>
        <S.InputLine2 />
        <S.UploadWrapper>
          <S.Label>사진 첨부</S.Label>
          <S.ImageWrapper>
            <div ref={props.divRef}></div>
            {props.fileUrls.map((e: any, i: any) => (
              <Uploads01
                key={uuidv4()}
                index={i}
                fileUrl={e}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.ImageWrapper>
        </S.UploadWrapper>
        <S.Line style={{ marginTop: "76px" }} />
        <S.ButtonWrapper>
          <S.CancelButton>취소</S.CancelButton>
          <S.WriteButton>{props.isEdit ? "수정" : "등록"}</S.WriteButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
