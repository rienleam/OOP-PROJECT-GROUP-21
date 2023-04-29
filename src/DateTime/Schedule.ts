
import { Crew } from "../AirlineCompany/Crew";
import { Flight } from "../Trip/Fight";
import { DateTime } from "./DateTime";

export class Schedule {
    private departureDate: DateTime;
    private arrivalDate: DateTime;
    private crew: Crew
    private flights: Flight[] = []
    constructor(departureDate: DateTime, arrivalDate: DateTime,crew:Crew){
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
        this.crew = crew;
    }
    compareDate (other:DateTime){
        if(this.departureDate.year && other.year && this.departureDate.month == other.month && this.departureDate.day == other.day) {
            return true;
        }
        return false;
    }
    getFlights (): number {
        let numberOfFlights: number = 0;
        numberOfFlights = this.flights.length;
        return numberOfFlights;
    }
}