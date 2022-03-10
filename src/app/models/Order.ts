import { IOrderRow } from "./IOrderRow";

export class Order {
    id: number = 0;
    companyId: number = 23;
    created: Date;
    createdBy: string;
    paymentMethod: string = 'PayPal';
    totalPrice: number;
    status: number = 0;
    orderRows: IOrderRow[] = [];

    constructor(
        created: Date,
        createdBy: string,
        totalPrice: number,
        orderRows: IOrderRow[]
    ) {
        this.created = created;
        this.createdBy = createdBy;
        this.totalPrice = totalPrice;
        this.orderRows = orderRows;
    }
}