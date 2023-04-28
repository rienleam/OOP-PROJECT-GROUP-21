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
    constructor (bookingReferenceNumber: number){
        this.bookingReferenceNumber = bookingReferenceNumber;
    }
}