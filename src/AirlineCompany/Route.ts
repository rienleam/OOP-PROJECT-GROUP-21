import { Airport } from "../Airport/Airport"
import { Flight } from "../Trip/Fight";

export class Route {
    private departureAirport: Airport;
    private arrivalAirport: Airport;
    private flights:Flight[] = [];
    constructor(departureAirport:Airport, arrivalAirport:Airport){
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
    }
    getDepartureAirport (){
        return this.departureAirport
    }
    getArrivalAirport (){
        return this.arrivalAirport
    }
    addFlight(...flight:Flight[]){
        this.flights.push(...flight);
    }
    getFlight(other:Flight):Flight| undefined{
        let reult: Flight| undefined
        this.flights.forEach(flight => {
            if(flight.isEqual(other)){
                reult = flight;
            }
        });
        return reult
    }
    
}