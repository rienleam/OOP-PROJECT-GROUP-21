import { Booking } from "../Booking/Booking";
import { Bag } from "./Bag";
import { Flight } from "./Fight";

export class Trip {
    public flights: Flight[] = [];
    private bags: Bag[] = [];
    private booking:Booking;

    constructor(booking:Booking) {
        this.booking = booking;
    }

    addFlight(...flight:Flight[]) {
        this.flights.push(...flight)
    }
    addBag( ...bag: Bag[]) {
        this.bags.push(...bag)
    }
}

