import { Gate } from "../Airport/Gate";
import { Meal } from "../Aeroplan/Seat";
import { Booking } from "../Booking/Booking";
import { Passenger } from "../Human/Passenger";
import { Bag } from "./Bag";
import { Flight } from "./Fight";

export class Trip {
    private departurePlace: string;
    private arrivalPlace: string;
    public flights: Flight[] = [];
    private bags: Bag[] = [];
    private bookings: Booking[] = [];

    constructor(departurePlace: string, arrivalPlace: string) {
        this.departurePlace = departurePlace;
        this.arrivalPlace = arrivalPlace;
    }

    addBooking(...booking: Booking[]) {
        this.bookings.push(...booking);
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
    setPassengerToSeat(seatID: string, passenger: Passenger,meal:Meal) {
        this.flights.forEach(flight => {
            flight.getAeroplan().getAllAvailableSeat().forEach(seat => {
                if (seat.seatID === seatID && seat.checKAvailable()) {
                    seat.setPassenger(passenger,meal);
                }
            });
        });
        return this;
    }
}

