import { Meal, Seat } from "../Aeroplan/Seat";
import { DateTime } from "../DateTime/DateTime";
import { Pilot } from "../Human/Staff/Pilot";
import { Flight } from "../Trip/Fight";
import { Crew } from "./Crew";
import { Route } from "./Route";

export class AirlineCompany {
    private name: string
    private routes: Route[] = [];
    private crews: Crew[] = [];
    constructor(name: string) {
        this.name = name;
    }

    addRoute(...route: Route[]) {
        this.routes.push(...route);
    }
    addCrew(...crew: Crew[]) {
        this.crews.push(...crew);
    }
    getReturnTicket(flight: Flight):number {
        
        let returnNumber:number = 0;
        for (let route of this.routes){
            let seats = route.getFlight(flight).getAeroplan().getAllSeat()
            for(let seat of seats){
                if(seat.getPassenger() !== undefined){
                    if (seat.getPassenger().getReturnedBooking() == true){
                        returnNumber+=1
                    }
                }
            }
        }
        return returnNumber
    }
    getAllMeal(flight: Flight){
        let meals : Meal[] = [];
        for (let route of this.routes){
            let seats = route.getFlight(flight).getAeroplan().getAllSeat()
            for(let seat of seats){
                if(seat.getPassenger() !== undefined){
                    meals.push(seat.getMeal())
                }
            }
        }
        return meals
    }
    getAllEmployeesSalary(): number {
        let totalEmployeesSalary = 0;
        this.crews.forEach(eachCrew => {
            totalEmployeesSalary += eachCrew.getTotalSalary();
        });
        return totalEmployeesSalary;
    }

    getAllFlightHaveToJoin(pilot: Pilot ,date: DateTime): number{
        let numberOfFlights:number = 0
        this.crews.forEach(eachCrew => {
            numberOfFlights += eachCrew.getFlightHaveToJoin(pilot, date);
        });
        return numberOfFlights;
    }

}

// let Airline1 = new AirlineCompany("Cambodia Airline");