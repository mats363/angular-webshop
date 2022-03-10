import { FormGroup } from "@angular/forms";
import { IMovie } from "./IMovie";


export interface IOrder {
    id: number;
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: string;
    orderRows: [
        {
            productId: number;
            product: any;
            amount: number;
        }

    ]
}

