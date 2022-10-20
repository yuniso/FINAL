import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USEDITEM } from "./ProductDetail.queries";

export default function ProductDetailPage() {
  const router = useRouter();

  const [pickCount, setPickCount] = useState(0);
  const [userInfo, setUserInfo] = useState();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query._id },
  });

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  return <ProductDetailUI data={data} />;
}
