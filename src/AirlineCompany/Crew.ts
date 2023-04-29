import { CoPilot } from "../Human/Staff/CoPilot";
import { FlightAttendant } from "../Human/Staff/FlightAttendant";
import { Pilot } from "../Human/Staff/Pilot";


export class Crew {
    getSalary() {
        throw new Error("Method not implemented.");
    }
    private pilot:Pilot
    private coPilot:CoPilot
    private flightAttendant: FlightAttendant[] = [];
    constructor (pilot:Pilot, coPilot:CoPilot){
        this.pilot = pilot;
        this.coPilot = coPilot;
    }
    addFlightAttendant(...flightAttendant:FlightAttendant[]){
        this.flightAttendant.push(...flightAttendant);
    }
    getTotalSalary (): number{
        let totalEmployeesSalary = 0;
        totalEmployeesSalary += this.pilot.getSalary();
        totalEmployeesSalary += this.coPilot.getSalary();
        this.flightAttendant.forEach(eachFlightAttendant => {
            totalEmployeesSalary += eachFlightAttendant.getSalary();
        });
        return totalEmployeesSalary;
    }
}