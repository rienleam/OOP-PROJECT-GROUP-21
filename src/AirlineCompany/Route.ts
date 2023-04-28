import { Flight } from "../Trip/Fight"

export class Route {
    private departureAirport: string
    private arrivalAirport: string
    private duration: number
    private flight: Flight[] = []
    constructor(departureAirport:string, arrivalAirport:string, duration:number, flight:Flight[]) {
        this.departureAirport = departureAirport
        this.arrivalAirport = arrivalAirport
        this.duration = duration
        this.flight = flight
    }
}