import { Booking } from "../Booking/Booking";
import { CreditCard } from "../Booking/CreditCard";
import { FrequentFlyer } from "../Booking/FrequentFlyer";
import { Gender, Person } from "./Person";

export class Passenger extends Person {
    private creditCard: CreditCard;
    private frequentFlyer: FrequentFlyer;
    private bookings : Booking[] = [];

    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, gender: Gender){
        super(firstName, lastName, age, phoneNumber, gender)
    }
    addCreditCard(creditCard: CreditCard){
        this.creditCard = creditCard;
    }
    addFrequentFlyer(frequentFlyer: FrequentFlyer){
        this.frequentFlyer = frequentFlyer;
    }
    bookingTicket(booking:Booking){
        if (this.creditCard !== undefined && this.frequentFlyer !== undefined){
            if (this.frequentFlyer.getAwardPoint() >= 100){
                booking.setPrice((booking.getPrice()*5)/100)
                this.bookings.push(booking)
            }
        }

    }
    getCreditCard (){
        return this.creditCard;
    }
}

