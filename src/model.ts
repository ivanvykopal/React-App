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
}

export interface HeadProperty {
    text: string
}

