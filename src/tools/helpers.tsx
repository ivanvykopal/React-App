import { Checkmark, Close, Icon } from "grommet-icons";
import { ReactElement } from "react";

export function convertDate(date: Date): string {
    return new Date(date).toLocaleDateString("sk-SK");
}

export function isVip(vip: boolean): ReactElement<Icon> {
    if (vip) {
        return <Checkmark />
    }
    return <Close />
}

export function priceFormat(totalAmount: number): string {
    return totalAmount.toFixed(2) + ' €'
}

export function convertTimestamp(date: Date): string {
    return convertDate(date) + ' ' + new Date(date).toLocaleTimeString('sk-SK');
}