import { Flight } from "../Trip/Fight";
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
export enum returnTicket{
    TRUE,
    FLASE
}
export class Booking {
    public bookingReferenceNumber: number;
    private ticket: Ticket_Condition;
    private price: number;
    public trip: Trip
    private returnTicket:returnTicket = returnTicket.FLASE;
    constructor (bookingReferenceNumber: number,ticket: Ticket_Condition,trip:Trip , returnTickets:returnTicket) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.setPrice(ticket);
        this.trip = trip;
        this.returnTicket = returnTickets
    }
    setReturnTickets(returnTickets: returnTicket){
        this.returnTicket = returnTickets;
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
        return this.bookingReferenceNumber === other.bookingReferenceNumber 
        && this.ticket === other.ticket 
        && this.returnTicket === other.returnTicket;
    }
    isReturn(){
       return this.returnTicket
    }
    getTrip(){
        return this.trip
    }
    getReturnTicketsBooking(){
        if (this.returnTicket === returnTicket.FLASE){

            return false ;
        }else{
            return true ;
        }

    }
    // getFlightTrip(){
    //     this.getTrip().IsEqualFight()
    // }
}
