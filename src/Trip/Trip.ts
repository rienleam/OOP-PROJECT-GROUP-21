import { Booking } from "../Booking/Booking";
import { Passenger } from "../Human/Passenger";
import { Bag } from "./Bag";
import { Flight } from "./Fight";

export class Trip {
    private departurePlace: string;
    private arrivalPlace: string;
    private flights: Flight[] = [];
    private bags: Bag[] = [];

    constructor(departurePlace: string, arrivalPlace: string) {
        this.departurePlace = departurePlace;
        this.arrivalPlace = arrivalPlace;
    }

    addFlight(...flight: Flight[]) {
        this.flights.push(...flight)
    }
    addBag(...bag: Bag[]) {
        this.bags.push(...bag)
    }
    IsEqualFight(other: Flight): boolean {
        let result: boolean
        this.flights.forEach(flight => {
            if (flight.isEqual(other)) {
                result = true
            }
        });
        return result
    }
    getFlight() {
        this.flights.forEach(flight => {
            flight.getAeroplan().getAllSeat().forEach(seat => {
                if (seat.checKAvailable()) {

                }
            });
        });
    }
    setPassengerToSeat(seatID: string, passenger: Passenger) {
        this.flights.forEach(flight => {
            flight.getAeroplan().getAllAvailableSeat().forEach(seat => {
                if (seat.seatID === seatID && seat.checKAvailable()) {
                    seat.setPassenger(passenger)
                }
            });
        });
        return this;
    }
}

