import { Passenger } from "../Human/Passenger"

export class FrequentFlyer {
    private awardPoint: number
    private memberID: string
    private passenger: Passenger
    constructor(awardPoint: number, memberID: string, passenger: Passenger) {
        this.awardPoint = awardPoint
        this.memberID = memberID
        this.passenger = passenger
    }
    addAwardPoint(other: number) {
        this.awardPoint += other;
    }
    getAwardPoint(): number {
        return this.awardPoint
    }
}