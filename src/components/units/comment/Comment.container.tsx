import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FETCH_USEDITEM_QUESTION } from "./Comment.queries";
import CommentUI from "./Comment.presenter";
import {
  DELETE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from "./Comment.queries";
import { FETCH_USER_LOGGED_IN } from "../user/login/login.queries";
import { Modal } from "antd";

export default function CommentPage(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (props.el !== undefined) {
      reset({
        contents: props.el.contents,
      });
    }
  }, [props.el]);

  const onClickDelete = async (event: MouseEvent<HTMLElement>) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION,
            variables: {
              useditemId: props.useditemId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: any, event: any) => {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id,
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
        },
      });
      setIsEdit(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickEditChange = () => {
    setIsEdit(true);
  };

  const onClickUpdateCancel = () => {
    setIsEdit(false);
  };

  return (
    <CommentUI
      isEdit={isEdit}
      el={props.el}
      LoginUserId={props.LoginUserId}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      onClickEditChange={onClickEditChange}
      onClickUpdateCancel={onClickUpdateCancel}
      handleSubmit={handleSubmit}
      register={register}
      data={data}
    />
  );
}
