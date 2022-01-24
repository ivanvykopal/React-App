import { ColumnConfig } from "grommet";
import { ReactElement } from "react";
import { Checkmark, Close, Icon } from 'grommet-icons';
import { Customer, Order, } from './model'

function priceFormat(totalAmount: number): string {
  return totalAmount.toFixed(2) + ' €'
}

const amountFormatter = new Intl.NumberFormat("sk-SK", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2
});

function isVip(data: Customer): ReactElement<Icon> {
  if (data.vip) {
    return <Checkmark />
  }
  return <Close />
}

export const customerColumns: ColumnConfig<Customer>[] = [
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
    property: 'totalAmount',
    header: 'Suma objednávok',
    render: (datum) => priceFormat(datum.totalAmount),
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