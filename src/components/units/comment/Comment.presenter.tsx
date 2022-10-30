import * as S from "./Comment.styles";
import { VscEdit } from "react-icons/vsc";
import { MdOutlineCancel } from "react-icons/md";
import { getDate } from "../../commons/libraries/getDate";

export default function CommentUI(props: any) {
  return (
    <S.CommentList>
      {!props.isEdit && (
        <div>
          <S.CommentUser>
            <S.UserName>{props.el.user.name}</S.UserName>
            <S.UserContents>{props.el.contents}</S.UserContents>
            <S.Date>{getDate(props.el.createdAt)}</S.Date>
            {props.el.user._id === props.el.user._id && (
              <S.Icon>
                <VscEdit
                  size={18}
                  onClick={props.onClickChange}
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
      )}
    </S.CommentList>
  );
}
