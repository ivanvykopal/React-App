export type Customer = {
    id: number;
    name: string;
    dateOfBirth: Date;
    vip: boolean;
    //totalAmount: number
}

export type Order = {
    id: number;
    orderDate: Date;
    amount: number;
    numberOfProducts: number;
}

