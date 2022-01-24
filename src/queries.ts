import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
    subscription MySubscription {
        customers {
        dateOfBirth
        id
        name
        vip
        orders_aggregate {
            aggregate {
            sum {
                amount
            }
            }
        }
        }
    }`;


export const GET_ORDERS = gql`
subscription MySubscription2($customerID: Int!) {
    orders(where: {customerID: {_eq: $customerID}}) {
      amount
      id
      numberOfProducts
      orderDate
      customer {
        dateOfBirth
        id
        name
        vip
      }
    }
  }`;
