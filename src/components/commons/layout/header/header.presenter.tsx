import { Modal } from "antd";
import * as S from "./header.styles";

export default function HeaderUI(props: any) {
  return (
    <S.Wrapper>
      <S.Logo onClick={props.onClickLogo} />
      <S.ItemWrapper>
        {props.loginStatus ? (
          <S.LoginWrapper>
            <S.Point>
              <span style={{ fontWeight: "bold" }}>
                {props.LoginUser?.fetchUserLoggedIn.name}
              </span>
              님 포인트{" "}
              <span style={{ borderBottom: "1px solid" }}>
                {props.LoginUser?.fetchUserLoggedIn.userPoint.amount.toLocaleString()}
              </span>
              P
            </S.Point>
            <S.Reload onClick={props.onClickModal}>충전</S.Reload>
            <S.Logout onClick={props.onClickLogout}>로그아웃</S.Logout>
            <S.Basket>장바구니 </S.Basket>
            <S.Circle>
              <span style={{ fontSize: "15px", color: "#FFFFFF" }}>0</span>
            </S.Circle>
          </S.LoginWrapper>
        ) : (
          <>
            <S.Item1 onClick={props.onClickLogin}>로그인</S.Item1>
            <S.Item2 onClick={props.onClickJoin}>회원가입</S.Item2>
            <S.Item3>장바구니 </S.Item3>
            <S.Circle>
              <span style={{ fontSize: "15px", color: "#FFFFFF" }}>0</span>
            </S.Circle>
          </>
        )}
      </S.ItemWrapper>
      {props.isOpen && (
        <S.ModalOpen visible={true} onCancel={props.onClickCancel}>
          <S.ReloadTitle>충전하실 금액을 선택해주세요!</S.ReloadTitle>
          <form>
            <S.ReloadSelect {...props.register("price")}>
              <option value={100}>100</option>
              <option value={500}>500</option>
              <option value={2000}>2000</option>
              <option value={5000}>5000</option>
            </S.ReloadSelect>
            <S.Button
              type="button"
              onClick={props.handleSubmit(props.onClickReload)}
            >
              충전하기
            </S.Button>
          </form>
        </S.ModalOpen>
      )}
    </S.Wrapper>
  );
}
