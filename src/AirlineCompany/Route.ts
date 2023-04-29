import { Airport } from "../Airport/Airport"

export class Route {
    private departureAirport: Airport;
    private arrivalAirport: Airport;
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
}