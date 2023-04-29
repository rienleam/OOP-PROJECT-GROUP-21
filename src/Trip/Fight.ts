import { Aeroplan } from "../Aeroplan/Aeroplan";
import { Gate } from "../Airport/Gate";
import { Schedule } from "../DateTime/Schedule";

export class Flight {
    private flightReferenceNumber: string;
    private aeroplan:Aeroplan;
    private gate:Gate;
    private schedule:Schedule;

    constructor(flightReferenceNumber:string,aeroplan:Aeroplan,gate:Gate,schedule:Schedule) {
        this.flightReferenceNumber = flightReferenceNumber;
        this.aeroplan = aeroplan;
        this.gate = gate;
        this.schedule = schedule;
    }

    isEqual(other:Flight):boolean {
        return this.flightReferenceNumber === other.flightReferenceNumber 
        && this.aeroplan === other.aeroplan 
        && this.gate === other.gate 
        && this.schedule === other.schedule
    }
    getAeroplan(){
        return this.aeroplan;
    }
    getPassengerOnSeat(){
        this.aeroplan.getSeat().forEach(seat => {
            seat.getPassenger()
        });
    }


}