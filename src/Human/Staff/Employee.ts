import { Gender, Person } from "../Person";

export abstract class Employee extends Person{
    private salary: number;
    private experience: number;

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, gender: Gender,salary:number,experience: number){
        super(firstName, lastName, age, phoneNumber, gender)
        this.experience = experience;
        this.salary = salary;
    }
}