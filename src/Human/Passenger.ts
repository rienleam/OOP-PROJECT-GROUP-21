import { Booking } from "../Booking/Booking";
import { CreditCard } from "../Booking/CreditCard";
import { FrequentFlyer } from "../Booking/FrequentFlyer";
import { Flight } from "../Trip/Fight";
import { Gender, Person } from "./Person";

export class Passenger extends Person {
    private creditCard: CreditCard;
    private frequentFlyer: FrequentFlyer;
    public bookings : Booking[] = [];
    constructor(firstName: string, lastName: string, age: number, phoneNumber: string, gender: Gender) {
        super(firstName, lastName, age, phoneNumber, gender)
    }
    addCreditCard(creditCard: CreditCard) {
        this.creditCard = creditCard;
    }
    addFrequentFlyer(frequentFlyer: FrequentFlyer) {
        this.frequentFlyer = frequentFlyer;
    }
    bookingTicket(booking: Booking) {
        if (this.creditCard !== undefined && this.frequentFlyer !== undefined) {
            if (this.frequentFlyer.getAwardPoint() >= 100) {
                booking.setPrice((booking.getPrice() * 5) / 100)
                this.bookings.push(booking)
            }
        } else if (this.creditCard !== undefined) {
            this.bookings.push(booking);
        } else {
            return "You don't have credit card"
        }
    }
    getCreditCard() {
        return this.creditCard;
    }
    getFrequentFly() {
        return this.frequentFlyer
    }

    cancelBooking(other: Booking) {
        for (let i = 0; i < this.bookings.length; i++) {
            if (this.bookings[i].isEqual(other)) {
                this.bookings.splice(i, 1);
            }
        }
    }
    getReturnedBooking() {
        this.bookings.forEach(booking => {
            booking.getTrip()
        });
    }
}

