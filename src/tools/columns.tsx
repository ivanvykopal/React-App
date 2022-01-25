import { ColumnConfig } from "grommet";
import { ReactElement } from "react";
import { Checkmark, Close, Icon } from 'grommet-icons';
import { Customer, CustomerAmout, Order, } from './model'

function priceFormat(totalAmount: number): string {
  return totalAmount.toFixed(2) + ' €'
}

function isVip(data: Customer): ReactElement<Icon> {
  if (data.vip) {
    return <Checkmark />
  }
  return <Close />
}

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
      datum.dateOfBirth && new Date(datum.dateOfBirth).toLocaleDateString("sk-SK"),
    align: "center"
  },
  {
    property: 'vip',
    header: 'VIP',
    render: (data: Customer) => (
      isVip(data)
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
      datum.orderDate && new Date(datum.orderDate).toLocaleDateString("sk-SK"),
    align: "center"
  },
  {
    property: 'amount',
    header: 'Celková suma',
    render: (datum) => priceFormat(datum.amount),
    align: 'end'
  },
  {
    property: 'numberOfProducts',
    header: 'Počet produktov',
    align: 'end'
  },
];