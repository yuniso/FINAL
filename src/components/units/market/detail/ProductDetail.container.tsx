import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { withAuth } from "../../../commons/hooks/withAuth";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./ProductDetail.queries";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTION,
} from "../../comment/Comment.queries";

function ProductDetailPage() {
  const router = useRouter();

  const [pickCount, setPickCount] = useState(0);
  const [LoginUser, setLoginUser] = useState();

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query._id },
  });

  const { data: Comment } = useQuery(FETCH_USEDITEM_QUESTION, {
    variables: {
      useditemId: router.query._id,
    },
  });

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("userInfo") as string));
  }, []);

  const onClickLike = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query._id },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: router.query._id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickCommentCreate = async (data: any) => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: router.query._id,
          createUseditemQuestionInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION,
            variables: {
              useditemId: router.query._id,
            },
          },
        ],
      });
      reset({
        contents: "",
      });
    } catch (error) {}
  };

  return (
    <ProductDetailUI
      data={data}
      onClickLike={onClickLike}
      Comment={Comment}
      onClickCommentCreate={onClickCommentCreate}
      register={register}
      handleSubmit={handleSubmit}
      LoginUser={LoginUser}
      useditemId={router.query._id}
    />
  );
}

export default withAuth(ProductDetailPage);
