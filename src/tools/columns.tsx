import { ColumnConfig } from "grommet";
import { Customer, CustomerAmout, Order, } from './model'
import { convertDate, convertTimestamp, isVip, priceFormat } from "./helpers";

export const customerColumns: ColumnConfig<CustomerAmout>[] = [
  {
    property: 'id',
    header: 'ID',
    primary: true,
  },
  {
    property: 'name',
    header: 'Meno',
    align: "start"
  },
  {
    property: 'dateOfBirth',
    header: 'Dátum narodenia',
    render: (datum) =>
      datum.dateOfBirth && convertDate(datum.dateOfBirth),
    align: "center"
  },
  {
    property: 'vip',
    header: 'VIP',
    render: (data: Customer) => (
      isVip(data.vip)
    )
  },
  {
    property: 'orders_aggregate.aggregate.sum.amount',
    header: 'Suma objednávok',
    render: (datum) => priceFormat(datum.orders_aggregate.aggregate.sum.amount),
    align: "end"
  }
];

export const orderColumns: ColumnConfig<Order>[] = [
  {
    property: 'id',
    header: 'ID',
    primary: true,
  },
  {
    property: 'orderDate',
    header: 'Dátum objednania',
    render: (datum) =>
      datum.orderDate && convertTimestamp(datum.orderDate),
    align: "center"
  },
  {
    property: 'numberOfProducts',
    header: 'Počet produktov',
    align: 'end'
  },
  {
    property: 'amount',
    header: 'Celková suma',
    render: (datum) => priceFormat(datum.amount),
    footer: priceFormat(1000),
    align: 'end'
  }
];