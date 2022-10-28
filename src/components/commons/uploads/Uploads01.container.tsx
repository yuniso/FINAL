import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { IUploads01Props } from "./Uploads01.types";
import { checkValidationImages } from "./Uploads01.validation";
import Uploads01UI from "./Uploads01.presenter";
import { Modal } from "antd";

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImages(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
      console.log(result);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
