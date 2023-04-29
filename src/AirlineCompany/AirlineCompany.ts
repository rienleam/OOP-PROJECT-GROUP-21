import { Flight } from "../Trip/Fight";
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
    getReturnFlight(flight:Flight): Flight| undefined{
        let reult: Flight| undefined;
        this.routes.forEach(route => {
            reult = route.getFlight(flight)
        });
        return reult;
    }
    getReturnTicket(){
        // if(this.getReturnFlight())
    }
    getAllEmployeesSalary (): number{
        let totalEmployeesSalary = 0;
        this.crews.forEach(eachCrew => {
            totalEmployeesSalary += eachCrew.getTotalSalary();
        });
        return totalEmployeesSalary;
    }
}

// let Airline1 = new AirlineCompany("Cambodia Airline");