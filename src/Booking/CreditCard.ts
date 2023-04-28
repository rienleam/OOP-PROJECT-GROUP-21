import { Passenger } from "../Human/Passenger"

export class CreditCard {
    private firstName: string
    private lastName: string
    private CVV: number
    private expireDate: string
    private passenger: Passenger
    constructor(firstName: string, lastName: string, CVV: number, expireDate: string, passenger: Passenger) {
        this.firstName = firstName
        this.lastName = lastName
        this.CVV = CVV
        this.expireDate = expireDate
        this.passenger = passenger
    }
}