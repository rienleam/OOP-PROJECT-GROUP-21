
import { Ticket_Condition } from "../Booking/Booking";
import { Passenger } from "../Human/Passenger";
export enum Meal {
    VEGETARIAN = "vegetarian",
    VEGAN = "vegan",
    DAIRY_FREE = "dairy_free",
    HALAL = "halal",
    HOSHER = "hosher"
}
export class Seat {
    private seatClass: Ticket_Condition;
    public seatID: string
    private isUnavailable: boolean = false;
    private passenger: Passenger | undefined;
    private meal? : Meal
    constructor(seatID: string, seatClass: Ticket_Condition,meal?: Meal) {
        this.seatClass = seatClass;
        this.seatID = seatID;
        this.meal = meal;
    }
    checKAvailable() {
        if (this.passenger !== undefined) {
            return false
        }
        else {
            return true
        }
    }
    setPassenger(passenger: Passenger,meal:Meal) {
        if (this.isUnavailable === false) {
            this.passenger = passenger;
            this.meal = meal;
            this.isUnavailable = true;
        }
    }
    getPassenger() {
        return this.passenger;
    }
    cancelSeat() {
        this.passenger = undefined;
    }
    getSeatClass() {
        return this.seatClass;
    }
    getMeal(){
        return this.meal;

    }

}