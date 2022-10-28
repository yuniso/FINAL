import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Upload01UI(props: IUploads01UIProps) {
  return (
    <div>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          +<span>Upload</span>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </div>
  );
}
