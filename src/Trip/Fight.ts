import { Aeroplane } from "../Aeroplan/Aeroplan";
import { Gate } from "../Airport/Gate";
import { Date } from "../DateTime/Date";
import { Schedule } from "../DateTime/Schedule";
import { Passenger } from "../Human/Passenger";

export class Flight {
    private flightReferenceNumber: string;
    private aeroplan: Aeroplane;
    private gate: Gate;
    private schedule: Schedule;

    constructor(flightReferenceNumber: string, aeroplan: Aeroplane, gate: Gate, schedule: Schedule) {
        this.flightReferenceNumber = flightReferenceNumber;
        this.aeroplan = aeroplan;
        this.gate = gate;
        this.schedule = schedule;
    }

    isEqual(other: Flight): boolean {
        return this.flightReferenceNumber === other.flightReferenceNumber
            && this.aeroplan === other.aeroplan
            && this.gate === other.gate
            && this.schedule === other.schedule
    }
    getAeroplan() {
        return this.aeroplan;
    }
    getPassengerOnSeat() {
        let passengers: Passenger[] = [];
        this.aeroplan.getAllSeat().forEach(seat => {
            if (seat.getPassenger() !== undefined) {
                passengers.push(seat.getPassenger());
            }
        });
        return passengers
    }

    // setPassengerToSeat(seatID: string, passenger: Passenger) {
    //     this.aeroplan.getAllAvailableSeat().forEach(seat => {
    //         if (seat.seatID === seatID && seat.checKAvailable()) {
    //             seat.setPassenger(passenger)
    //         }
    //     });
    //     return this;
    // }


}