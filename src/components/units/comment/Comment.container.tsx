import { useMutation } from "@apollo/client";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FETCH_USEDITEM_QUESTION } from "./Comment.queries";
import CommentUI from "./Comment.presenter";
import {
  DELETE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from "./Comment.queries";

export default function CommentPage(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

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
    } catch (error) {}
  };

  const onClickUpdate = async (data: any, event: any) => {
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: event.target._id,
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
        },
      });
      setIsEdit(false);
    } catch (error) {}
  };

  const onClickChange = () => {
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
      onClickChange={onClickChange}
      onClickUpdateCancel={onClickUpdateCancel}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}
