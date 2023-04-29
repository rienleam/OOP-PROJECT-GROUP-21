import { Passenger } from "../Human/Passenger"

export class CreditCard {
    private cardNumber: string;
    private CVV: number
    private expireDate: string
    constructor(cradNumber:string,CVV: number, expireDate: string) {
        this.cardNumber = cradNumber;
        this.CVV = CVV
        this.expireDate = expireDate
    }
}