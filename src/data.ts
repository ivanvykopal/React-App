import { Customer, Order } from './model'

export const customers: Customer[] = [
    {
        id: 1,
        name: 'Zakaznik1',
        dateOfBirth: new Date("1999-12-16"), 
        vip: true,
        totalAmount: 1000,
    },
    {
        id: 2,
        name: 'Zakaznik2',
        dateOfBirth: new Date("1968-01-20"), 
        vip: false,
        totalAmount: 2500,
    },
    {
        id: 3,
        name: 'Zakaznik3',
        dateOfBirth: new Date("1985-10-18"), 
        vip: false,
        totalAmount: 3000.75,
    },
];

export const orders: Order[] = [
    {
        id: 1,
        orderDate: new Date("2022-01-20"),
        amount: 4390.78,
        numberOfProducts: 8,
    },
    {
        id: 2,
        orderDate: new Date("2022-01-20"),
        amount: 4390.78,
        numberOfProducts: 8,
    },
    {
        id: 3,
        orderDate: new Date("2022-01-20"),
        amount: 4390.78,
        numberOfProducts: 8,
    },
    {
        id: 4,
        orderDate: new Date("2022-01-20"),
        amount: 4390.78,
        numberOfProducts: 8,
    },
    {
        id: 5,
        orderDate: new Date("2022-01-20"),
        amount: 4390.78,
        numberOfProducts: 8,
    },
]