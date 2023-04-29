import { Passenger } from "../Human/Passenger";
import { Seat } from "./Seat"

export class Aeroplane {
    private registrationNumber: string
    private seats: Seat[] = [];
    constructor(registrationNumber: string) {
        this.registrationNumber = registrationNumber
    }
    addSeat(...seat: Seat[]){
        this.seats.push(...seat)
    }
    getAllSeat() {
       return this.seats
    }
    getAllAvailableSeat() {
        let availableSeat: Seat[] = [];
        this.seats.forEach(seat => {
            if(seat.checKAvailable() === true){
                availableSeat.push(seat)
            }
        });
        return availableSeat
    }
    
}