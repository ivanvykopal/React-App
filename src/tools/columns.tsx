import { ColumnConfig } from "grommet";
import { Customer, CustomerAmount, Order, } from './model'
import { convertDate, convertPrice, convertTimestamp, isVip, priceFormat } from "./helpers";

export const customerColumns: ColumnConfig<CustomerAmount>[] = [
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
    render: (element) => convertPrice(element),
    align: "end"
  }
];

export function creteOrderColumns(total: number): ColumnConfig<Order>[] {
  return [
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
      footer: priceFormat(total),
      align: 'end'
    }
  ];
}