export class Bag {
    private wigth:number;
    private referenceNumber:string;
    constructor(wight:number){
        this.wigth = wight;
    }
    addReferenceNumber(referenceNumber:string){
        this.referenceNumber = referenceNumber;
    }
}