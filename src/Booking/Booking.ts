export enum Meal {
    VEGETARIAN,
    VEGAN,
    DAIRY_FREE,
    HALAL,
    HOSHER
}
export enum Ticket_Condition {
    ECONOMEY_CLASSIC,
    ECONOMEY_FLEX,
    BUSINESS_CLASS
}
export class Booking {
    private bookingReferenceNumber: number;
    private ticket: Ticket_Condition;
    private price: number;
    constructor (bookingReferenceNumber: number,ticket: Ticket_Condition) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.setPrice(ticket)
    }
    setPrice(ticket:Ticket_Condition) {
        if (ticket === Ticket_Condition.BUSINESS_CLASS ){
            this.price = 750;
        }
        else{
            this.price = 600;
        }
    }
    getPrice() {
        return this.price;
    }
}