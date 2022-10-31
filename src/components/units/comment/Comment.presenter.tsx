import * as S from "./Comment.styles";
import { VscEdit } from "react-icons/vsc";
import { MdOutlineCancel } from "react-icons/md";
import { getDate } from "../../commons/libraries/getDate";

export default function CommentUI(props: any) {
  console.log(!props.isEdit);
  return (
    <S.CommentList>
      {!props.isEdit ? (
        <div>
          <S.CommentUser>
            <S.UserName>{props.el.user.name}</S.UserName>
            <S.UserContents>{props.el.contents}</S.UserContents>
            <S.Date>{getDate(props.el.createdAt)}</S.Date>
            {props.el.user.name === props.data?.fetchUserLoggedIn.name && (
              <S.Icon>
                <VscEdit
                  size={18}
                  onClick={props.onClickEditChange}
                  style={{
                    color: "#BDBDBD",
                  }}
                />
                <MdOutlineCancel
                  size={18}
                  id={props.el._id}
                  onClick={props.onClickDelete}
                  style={{
                    marginLeft: "16px",
                    color: "#BDBDBD",
                  }}
                />
              </S.Icon>
            )}
          </S.CommentUser>
        </div>
      ) : (
        <div>
          <S.EditComment {...props.register("contents")} />
          <S.EditButtonWrapper>
            <S.CancelButton onClick={props.onClickUpdateCancel}>
              취소하기
            </S.CancelButton>
            <S.EditButton
              id={props.el._id}
              onClick={props.handleSubmit(props.onClickUpdate)}
            >
              수정하기
            </S.EditButton>
          </S.EditButtonWrapper>
        </div>
      )}
    </S.CommentList>
  );
}
