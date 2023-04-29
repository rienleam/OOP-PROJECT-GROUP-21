import { Booking } from "../Booking/Booking";
import { Bag } from "./Bag";
import { Flight } from "./Fight";

export class Trip {
    private departurePlace: string;
    private arrivalPlace: string;
    private flights: Flight[] = [];
    private bags: Bag[] = [];
    
    constructor(departurePlace:string, arrivalPlace:string) {
        this.departurePlace = departurePlace;
        this.arrivalPlace = arrivalPlace;
    }

    addFlight(...flight:Flight[]) {
        this.flights.push(...flight)
    }
    addBag( ...bag: Bag[]) {
        this.bags.push(...bag)
    }
    IsEqualFight(other:Flight):Flight| undefined{
        let result:Flight| undefined
        this.flights.forEach(flight => {
            if (flight.isEqual(other)){
                result = flight
            }
        });
        return result
    }
}

