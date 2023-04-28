export abstract class Date {
    private year: number;
    private month: number;
    private day: number;
    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
}