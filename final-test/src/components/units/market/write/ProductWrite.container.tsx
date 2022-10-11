import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USEDITEM } from "./ProductWrite.queries";
import { accessTokenState } from "../../../../commons/testStore" 

export default function ProductWritePage() {
  const router = useRouter()
  const [assessToekn, setAccessToken] = useRecoilState(accessTokenState)

  const {register, handleSubmit} =  useForm({mode: "onChange"})

  const [createUseditem] = useMutation(CREATE_USEDITEM)

  // 등록하기
  const onClickCreate = async(data: any) => {
    await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contests,
          price: Number(data.price),
          tags: data.tags?.split,
        }
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_USEDITEMS,
      //   },
      // ],
    })
    router.push("/market/");
  }

  return <ProductWriteUI onClickCreate={onClickCreate} register={register}/>;
}
