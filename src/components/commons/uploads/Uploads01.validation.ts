import { Modal } from "antd";

export function checkValidationImages(file: File | undefined) {
  if (!file?.size) {
    Modal.error({ content: "파일이 존재하지 않습니다." });
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일이 용량이 너무 큽니다.(5MB 제한)" });
    return false;
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능",
    });
    return false;
  }
  return file;
}
