import { Seat } from "../Aeroplan/Seat";
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
    // getReturnTicket(flight: Flight): number {
    //     let returnNumber: number = 0
    //     this.routes.forEach(route => {
    //         route.getFlight(flight).getAeroplan().getAllSeat().forEach(seat => {
    //             if (seat.getPassenger().getReturnedBooking()) {
    //                 returnNumber += 1;
    //             }
    //         });
    //     });
    //     return returnNumber;
    // }
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
    getAllEmployeesSalary(): number {
        let totalEmployeesSalary = 0;
        this.crews.forEach(eachCrew => {
            totalEmployeesSalary += eachCrew.getTotalSalary();
        });
        return totalEmployeesSalary;
    }
}

// let Airline1 = new AirlineCompany("Cambodia Airline");