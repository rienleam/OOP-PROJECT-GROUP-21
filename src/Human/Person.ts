export enum Gender {
    MALE,
    FEMALE
}
export abstract class Person {
    protected firstName: string;
    protected lastName: string;
    protected age: number;
    protected phoneNumber: string;
    protected gender: Gender;
    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, gender: Gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.gender = gender;

    }

}