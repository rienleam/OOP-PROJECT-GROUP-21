
import { Crew } from "../AirlineCompany/Crew";
import { DateTime } from "./DateTime";

export class Schedule {
    private departureDate: DateTime;
    private arrivalDate: DateTime;
    private crew: Crew
    constructor(departureDate: DateTime, arrivalDate: DateTime,crew:Crew){
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
        this.crew = crew;
    }


}