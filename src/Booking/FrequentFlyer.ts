export class FrequentFlyer {
    private awardPoint: number
    private memberID: string
    constructor(awardPoint: number, memberID: string) {
        this.awardPoint = awardPoint
        this.memberID = memberID
    }
    addAwardPoint(other: number) {
        this.awardPoint += other;
    }
    getAwardPoint(): number {
        return this.awardPoint
    }
}