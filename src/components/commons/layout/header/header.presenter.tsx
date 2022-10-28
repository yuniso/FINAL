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
                {props.data?.fetchUserLoggedIn.name}
              </span>
              님 포인트{" "}
              <span style={{ borderBottom: "1px solid" }}>
                {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString()}
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
        <S.ModalOpen open={props.onClickModal} visible={true}>
          <S.CancelButton onClick={props.setIsOpen}></S.CancelButton>
          <S.ReloadTitle>충전하실 금액을 선택해주세요!</S.ReloadTitle>
          <S.ReloadSelect
            value={props.selected}
            onChange={props.onChangeSelect}
          >
            <option value="">포인트 선택</option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="2000">2,000</option>
            <option value="5000">5,000</option>
          </S.ReloadSelect>
          <S.ReloadButton
            isActive={props.isActive}
            onClick={props.onClickReload}
          ></S.ReloadButton>
        </S.ModalOpen>
      )}
    </S.Wrapper>
  );
}
