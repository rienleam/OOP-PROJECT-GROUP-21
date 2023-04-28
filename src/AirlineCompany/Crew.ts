import { CoPilot } from "../Human/Staff/CoPilot";
import { FlightAttendant } from "../Human/Staff/FlightAttendant";
import { Pilot } from "../Human/Staff/Pilto";

export class Crew {
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
}