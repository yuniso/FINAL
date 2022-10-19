import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      tags
      price
      seller {
        name
      }
      name
      images
    }
  }
`;

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      tags
      price
      seller {
        name
      }
      name
      images
    }
  }
`;
