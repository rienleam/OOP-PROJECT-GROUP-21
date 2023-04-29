import { Gender } from "../Person";
import { Employee } from "./Employee";
export enum Skill{
    FLIGHT_PLANNING,
    AIR_TRAFFIC_CONTROL,
    CUSTOMER_SERVICE,


}
export class Pilot extends Employee{
    private skill: Skill = Skill.FLIGHT_PLANNING;
    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, gender: Gender,salary:number,experience: number){
        super(firstName, lastName, age, phoneNumber, gender,salary,experience)
    }
    getSalary():number{
        return this.salary;
    }
}