import { DateTime } from "../DateTime/DateTime";
import { Schedule } from "../DateTime/Schedule";
import { CoPilot } from "../Human/Staff/CoPilot";
import { FlightAttendant } from "../Human/Staff/FlightAttendant";
import { Pilot } from "../Human/Staff/Pilot";


export class Crew {
    private pilot:Pilot
    private coPilot:CoPilot
    private shedule:Schedule[] = [];
    private flightAttendant: FlightAttendant[] = [];
    constructor (pilot:Pilot, coPilot:CoPilot){
        this.pilot = pilot;
        this.coPilot = coPilot;
    }
    addSchedule(schedule:Schedule):void {
        this.shedule.push(schedule);
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

    getFlightHaveToJoin (pilot: Pilot ,date: DateTime){
        let numberOfFlights = 0;
        this.shedule.forEach(eachSchedule => {
            if (eachSchedule.compareDate(date) && this.pilot.comparePilot(pilot)) {
                numberOfFlights += eachSchedule.getFlights();
            }
        });
        return numberOfFlights;
    }

}