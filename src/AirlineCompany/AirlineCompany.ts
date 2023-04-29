import { Booking } from "../Booking/Booking";
import { Passenger } from "../Human/Passenger";
import { Crew } from "./Crew";
import { Route } from "./Route";

export class AirlineCompany {
    private name: string
    private routes: Route[] = [];
    private crews: Crew[] = [];
    constructor (name: string) {
        this.name = name;
    }

    addRoute(... route:Route[]){
        this.routes.push(... route);
    }
    addCrew(...crew:Crew[]){
        this.crews.push(... crew);
    }
}