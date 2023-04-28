export class Route {
    private departureAirport: string
    private arrivalAirport: string
    private duration: number
    constructor(departureAirport:string, arrivalAirport:string, duration:number){
        this.departureAirport = departureAirport
        this.arrivalAirport = arrivalAirport
        this.duration = duration
    }
}