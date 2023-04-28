import { Gender } from "../Person";
import { Employee } from "./Employee";
import { Skill } from "./Pilot";

export class CoPilot extends Employee{
    private skill: Skill = Skill.AIR_TRAFFIC_CONTROL;
    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, gender: Gender,salary:number,experience: number){
        super(firstName, lastName, age, phoneNumber, gender,salary,experience)
    }
}