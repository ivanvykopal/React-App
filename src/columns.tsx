import { ColumnConfig } from "grommet";
import { ReactElement } from "react";
import { Checkmark, Close, Icon } from 'grommet-icons';
import { Customer, } from './model'

function priceFormat(totalAmount: number): string {
  return totalAmount.toFixed(2)
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
  },
  {
    property: 'dateOfBirth',
    header: 'Dátum narodenia',
    render: (datum) =>
      datum.dateOfBirth && new Date(datum.dateOfBirth).toLocaleDateString("en-US"),
    align: "end"
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