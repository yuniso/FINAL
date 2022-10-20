import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import MainUI from "./main.presenter";
import { FETCH_USEDITEMS } from "./main.queries";

export default function MainPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    router.push(`/market/${event.target._id}`);
  };

  return <MainUI data={data} onClickMoveToDetail={onClickMoveToDetail} />;
}
