import { Passenger } from "../Human/Passenger";

export class Seat {
    private seatID: string
    private isUnavailable: boolean = false;
    private passenger: Passenger| undefined;
    constructor (seatID: string){
        this.seatID = seatID
    }
    checKAvailable(){
        if (this.passenger !== undefined){
            return "This seat is unavailable"
        }
        else{
            return "This seat is available"
        }
    }
    setPassenger(passenger: Passenger){
        if (this.isUnavailable === false){
            this.passenger = passenger;
            this.isUnavailable = true;
            return "Your booking is successfully"
        }
        else{
            return "This seat is unavailable"
        }
    }
    getPassenger(){
        return this.passenger;
    }
}