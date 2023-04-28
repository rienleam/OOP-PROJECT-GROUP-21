import { Seat } from "./Seat"

export class Aeroplan {
    private registrationNumber: string
    private seat: Seat
    constructor(registrationNumber: string, seat: Seat) {
        this.registrationNumber = registrationNumber
        this.seat = seat
    }
}