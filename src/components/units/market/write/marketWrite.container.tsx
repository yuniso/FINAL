import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import MarketWriteUI from "./marketWrite.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./marketWrite.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { accessTokenState, isEditState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { withAuth } from "../../../commons/hooks/withAuth";
import { FETCH_USEDITEMS } from "../list/marketList.queries";
import { Contents } from "../detail/ProductDetail.styles";

const schema = yup.object({
  name: yup.string().required("상품명을 작성해주세요."),
  remarks: yup.string().required("상품요약을 작성해주세요."),
  contents: yup.string().required("상품설명을 입력해주세요."),
  price: yup
    .number()
    .required("판매 가격을 입력해주세요.")
    .typeError("숫자만 입력해주세요"),
});

function MarketWritePage(props: any) {
  useEffect(() => {
    if (props.data !== undefined) {
      if (props.data?.fetchUseditem.images?.length) {
        setFileUrls([...props.data.fetchUseditem.images]);
      }
      reset({
        name: props.data.fetchUseditem.name,
        remarks: props.data.fetchUseditem.remarks,
        contents: props.data.fetchUseditem.contents,
        tags: props.data.fetchUseditem.tags,
        price: props.data.fetchUseditem.price,
        useditemAddress: {
          zipcode: props.data.fetchUseditem.useditemAddress?.zipcode,
          address: props.data.fetchUseditem.useditemAddress?.address,
          addressDetail:
            props.data.fetchUseditem.useditemAddress?.addressDetail,
        },
      });
    }
    setIsEdit(true);
  }, [props.data]);

  const router = useRouter();

  const [IsModalVisible, setIsModalVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);

  const { register, handleSubmit, formState, setValue, trigger, reset } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const fileRef = useRef(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const { ref, ...rest } = register("images");

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setValue("useditemAddress.address", data.address);
    trigger("useditemAddress.address");
    setValue("useditemAddress.zipcode", data.zonecode);
    trigger("useditemAddress.zipcode");

    setIsOpen(false);
  };

  const onClickWrite = async (data: any) => {
    await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: data.price,
          tags: data.tags,
          useditemAddress: {
            zipcode: data.useditemAddress.zipcode,
            address: data.useditemAddress.address,
            addressDetail: data.useditemAddress.addressDetail,
          },
          images: [...fileUrls],
        },
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEMS,
        },
      ],
    });
    console.log("등록");
    router.push("/market/");
  };

  const onClickUpdate = async (data: any) => {
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
          },
          useditemId: router.query._id,
        },
      });
      router.push(`/market/${result.data?.updateUseditem._id}`);
      Modal.success({ content: "수정되었습니다." });
    } catch (error: any) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickCancel = () => {
    router.push("/");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <MarketWriteUI
      isEdit={props.isEdit}
      data={props.data}
      ref={ref}
      rest={rest}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      fileRef={fileRef}
      onClickUpload={onClickUpload}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      isActive={isActive}
      isOpen={isOpen}
      zipcode={zipcode}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}

export default withAuth(MarketWritePage);
