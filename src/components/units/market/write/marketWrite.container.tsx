import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../commons/hooks/useAuth";
import MarketWriteUI from "./marketWrite.presenter";
import { CREATE_USEDITEM } from "./marketWrite.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("상품명을 작성해주세요."),
  remarks: yup.string().required("상품요약을 작성해주세요."),
  contents: yup.string().required("상품설명을 입력해주세요."),
  price: yup.number().required("판매 가격을 입력해주세요."),
});

export default function MarketWritePage() {
  const router = useRouter();

  const [tags, setTags] = useState([]);

  const [createUseditem] = useMutation(CREATE_USEDITEM);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickWrite = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            // tags: [...tags],
          },
        },
      });
      router.push("/market");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <MarketWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickWrite={onClickWrite}
    />
  );
}

useAuth;
