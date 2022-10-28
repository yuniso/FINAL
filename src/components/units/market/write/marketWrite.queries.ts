import { gql } from "@apollo/client";

export const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
      buyer {
        _id
        email
        name
        picture
      }
      seller {
        _id
        email
        name
        picture
      }
    }
  }
`;

export const UPDATE_USEDITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
      createdAt
      buyer {
        _id
        email
        name
        picture
      }
      seller {
        _id
        email
        name
        picture
      }
    }
  }
`;
