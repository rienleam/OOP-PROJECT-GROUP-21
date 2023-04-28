import { Gender } from "../Person";
import { Employee } from "./Employee";
import { Skill } from "./Pilto";

export class FlightAttendant extends Employee{
    private skill: Skill = Skill.CUSTOMER_SERVICE;
    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, gender: Gender,salary:number,experience: number){
        super(firstName, lastName, age, phoneNumber, gender,salary,experience)
    }
}