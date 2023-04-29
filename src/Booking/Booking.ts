import { Trip } from "../Trip/Trip";

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
    constructor (bookingReferenceNumber: number,ticket: Ticket_Condition, returnTickets:returnTicket) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.setPrice(ticket);
        this.returnTicket = returnTickets

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
