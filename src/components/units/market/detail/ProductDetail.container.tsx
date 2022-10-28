import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { withAuth } from "../../../commons/hooks/withAuth";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./ProductDetail.queries";

function ProductDetailPage() {
  const router = useRouter();

  const [pickCount, setPickCount] = useState(0);
  const [userInfo, setUserInfo] = useState();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query._id },
  });

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const onClickLike = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.productId },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return <ProductDetailUI data={data} onClickLike={onClickLike} />;
}

export default withAuth(ProductDetailPage);
