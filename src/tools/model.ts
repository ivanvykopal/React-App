export interface Customer {
  id: number,
  name: string,
  dateOfBirth: Date,
  vip: boolean,
  totalAmount?: number,
}

export interface Order {
  id: number,
  orderDate: Date,
  amount: number,
  numberOfProducts: number,
  customerID?: number,
}

export interface CustomerOrder extends Order {
  customer: Customer
}

export interface CustomerAmount extends Customer {
  orders_aggregate: {
    aggregate?: {
      sum?: {
        amount?: number | null | undefined
      }
      | null | undefined
    } | null | undefined
  }
}

export default interface FilterProps {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  date: string,
  setDate: React.Dispatch<React.SetStateAction<string>>,
}