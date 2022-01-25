export interface Customer {
    id: number,
    name: string,
    dateOfBirth: Date,
    vip: boolean,
    totalAmount: number,
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

export interface CustomerAmout extends Customer {
    orders_aggregate: {
        aggregate: {
            sum: {
                amount: number
            }
        }
    }
}