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
    private meal: Meal
    private ticketCondition: Ticket_Condition
    constructor (bookingReferenceNumber: number, meal: Meal, ticketCondition: Ticket_Condition){
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.meal = meal;
        this.ticketCondition = ticketCondition;
    }
}