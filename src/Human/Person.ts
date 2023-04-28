export enum Gender {
    MALE,
    FEMALE
}
export abstract class Person {
    private firstName: string;
    private lastName: string;
    private age: number;
    private phoneNumber: string;
    private gender: Gender;

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, gender: Gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.gender = gender;

    }

}