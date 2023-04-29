import { Route } from "../AirlineCompany/Route";
import { Passenger } from "../Human/Passenger";
import { Gate } from "./Gate";

export class Airport {
    private name: string
    private gates: Gate[]=[];
    private routes: Route[] = [];
    private passengers: Passenger[] = [];
    constructor (name: string, gate: Gate, route: Route) {
        this.name = name;
        this.gates.push(gate);
        this.routes.push(route);
    }
    getPassengerTripDetails (bookingReferenceNumber: number):void{
        this.passengers.forEach(eachPassenger =>{
            eachPassenger.bookings.forEach(eachBooking => {
                if (bookingReferenceNumber == eachBooking.bookingReferenceNumber){
                    return eachBooking;
                }
            });
        });
    }
}