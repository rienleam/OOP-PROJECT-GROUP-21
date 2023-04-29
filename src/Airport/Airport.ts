import { Route } from "../AirlineCompany/Route";
import { Passenger } from "../Human/Passenger";
import { Gate } from "./Gate";

export class Airport {
    private name: string
    private gates: Gate[]=[];
    private routes: Route[] = [];
    private passengers: Passenger[] = [];
    constructor (name: string) {
        this.name = name;
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
    addGate(...gate: Gate[]){
        this.gates.push(...gate);
    }
    addRoutes(...routes: Route[]){
        this.routes.push(...routes);
    }
    getDetail(bookingReferenceNumber:string){}
}