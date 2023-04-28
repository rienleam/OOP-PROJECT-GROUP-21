import { Airport } from "../Airport/Airport"
import { DateTime } from "../DateTime/DateTime"

export class Route {
    private departureAirport: Airport;
    private arrivalAirport: Airport;
    private departureTime: DateTime;
    private arrivalTime: DateTime;
    constructor(departureAirport:Airport, arrivalAirport:Airport, departureTime:DateTime,arrivalTime: DateTime){
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }
}