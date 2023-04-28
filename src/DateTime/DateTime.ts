export class DateTime extends Date {
    private hour: number
    private minute: number
    constructor(year:number, month:number, day:number,hour:number,minute:number){
        super(year, month, day)
        this.hour = hour;
        this.minute = minute;
    }
}