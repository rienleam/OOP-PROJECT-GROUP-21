import { Crew } from "./Crew";
import { Route } from "./Route";

export class AirlineCompany {
    private name: string
    private route: Route
    private crew: Crew
    constructor (name: string, route: Route, crew:Crew) {
        this.name = name;
        this.route = route;
        this.crew = crew;
    }
}