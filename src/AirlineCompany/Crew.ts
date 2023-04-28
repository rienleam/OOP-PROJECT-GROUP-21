import { CoPilot } from "../Human/Staff/CoPilot"
import { FlightAttendant } from "../Human/Staff/FlightAttendant"
import { Pilot } from "../Human/Staff/Pilot"

export class Crew {
    private pilot: Pilot
    private coPilot: CoPilot
    private flightAttendant: FlightAttendant[] = []
    constructor (pilot: Pilot, coPilot: CoPilot, flightAttendant: FlightAttendant[]){
        this.pilot = pilot
        this.coPilot = coPilot
        this.flightAttendant = flightAttendant
    }
}