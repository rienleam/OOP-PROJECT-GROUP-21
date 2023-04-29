import { Ticket_Condition } from "../Booking/Booking";
import { Passenger } from "../Human/Passenger";

export class Seat {
    private seatClass: Ticket_Condition;
    public seatID: string
    private isUnavailable: boolean = false;
    private passenger: Passenger | undefined;
    constructor(seatID: string, seatClass: Ticket_Condition) {
        this.seatClass = seatClass;
        this.seatID = seatID;
    }
    checKAvailable() {
        if (this.passenger !== undefined) {
            return false
        }
        else {
            return true
        }
    }
    setPassenger(passenger: Passenger) {
        if (this.isUnavailable === false) {
            this.passenger = passenger;
            this.isUnavailable = true;
        }
    }
    getPassenger() {
        return this.passenger;
    }
    cancelSeat() {
        this.passenger = undefined;
    }
    getSeatClass() {
        return this.seatClass;
    }

}