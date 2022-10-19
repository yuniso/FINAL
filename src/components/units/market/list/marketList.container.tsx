import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import MarketListUI from "./marketList.presenter";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./marketList.queries";

export default function MarketListPage() {
  const router = useRouter();

  const { data: bestItems } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);
  const { data: usedItems } = useQuery(FETCH_USEDITEMS);

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) return;
    router.push(`/products/${event.target.id}`);
  };

  return (
    <MarketListUI
      bestItems={bestItems}
      usedItems={usedItems}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
