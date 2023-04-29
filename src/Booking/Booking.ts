import { Trip } from "../Trip/Trip";

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
    public bookingReferenceNumber: number;
    private ticket: Ticket_Condition;
    private price: number;
    public trip: Trip
    private returnTickets?:boolean = false
    constructor (bookingReferenceNumber: number,ticket: Ticket_Condition, returnTickets?:boolean) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.setPrice(ticket)
        this.returnTickets = true;
    }
    setReturnTickets(returnTickets: boolean){
        this.returnTickets = returnTickets;
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
    isEqual(other:Booking){
        return this.bookingReferenceNumber === other.bookingReferenceNumber && this.ticket === other.ticket && this.returnTickets === other.returnTickets
    }
}
