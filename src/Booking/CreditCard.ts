export class CreditCard {
    private firstName: string
    private lastName: string
    private CVV: number
    private expireDate: string
    constructor(firstName: string, lastName: string, CVV: number, expireDate: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.CVV = CVV
        this.expireDate = expireDate
    }
}