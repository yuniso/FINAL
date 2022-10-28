import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketWritePage from "../../../../src/components/units/market/write/marketWrite.container";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      buyer {
        _id
        name
        picture
      }
      seller {
        _id
        name
        picture
      }
    }
  }
`;

export default function MarketEdit() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query._id },
  });

  return <MarketWritePage isEdit={true} data={data} />;
}
