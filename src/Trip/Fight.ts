import { Aeroplan } from "../Aeroplan/Aeroplan";
import { Route } from "../AirlineCompany/Route";
import { Gate } from "../Airport/Gate";
import { Schedule } from "../DateTime/Schedule";

export class Flight {
    private flightReferenceNumber: string;
    private aeroplan:Aeroplan;
    private gate:Gate;
    private schedule:Schedule;
    private route:Route

    constructor(flightReferenceNumber:string,aeroplan:Aeroplan,gate:Gate,schedule:Schedule,route:Route) {
        this.flightReferenceNumber = flightReferenceNumber;
        this.aeroplan = aeroplan;
        this.gate = gate;
        this.schedule = schedule;
        this.route = route;
    }
}