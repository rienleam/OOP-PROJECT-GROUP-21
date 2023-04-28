import { Gender, Person } from "./Person";

export class Passenger extends Person {
    private creditCard: string;
    private frequentFlyer: boolean;

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, gender: Gender,creditCard: string, frequentFlyer: boolean){
        super(firstName, lastName, age, phoneNumber, gender)
        this.creditCard = creditCard;
        this.frequentFlyer = frequentFlyer;
    }
}