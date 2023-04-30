import { Aeroplane } from "./Aeroplan/Aeroplan";
import { Meal, Seat } from "./Aeroplan/Seat";
import { AirlineCompany } from "./AirlineCompany/AirlineCompany";
import { Crew } from "./AirlineCompany/Crew";
import { Route } from "./AirlineCompany/Route";
import { Airport } from "./Airport/Airport";
import { Gate } from "./Airport/Gate";
import { Booking, Ticket_Condition, returnTicket } from "./Booking/Booking";
import { CreditCard } from "./Booking/CreditCard";
import { FrequentFlyer } from "./Booking/FrequentFlyer";
import { DateTime } from "./DateTime/DateTime";
import { Schedule } from "./DateTime/Schedule";
import { Passenger } from "./Human/Passenger";
import { Gender } from "./Human/Person";
import { CoPilot } from "./Human/Staff/CoPilot";
import { FlightAttendant } from "./Human/Staff/FlightAttendant";
import { Pilot } from "./Human/Staff/Pilot";
import { Flight } from "./Trip/Fight";
import { Trip } from "./Trip/Trip";

// //create Gates
// let gate1 = new Gate("1A");
// let gate2 = new Gate("2A");
// let gate3 = new Gate("3A");
// let gate4 = new Gate("4A");
// //crews
// let Pilot1 = new Pilot("Socheat", "Lun", 20, "0969293520", Gender.MALE, 1000, 2)
// let CoPilot1 = new CoPilot("Mr", "A", 20, "0969293520", Gender.MALE, 850, 2)
// let flightAttendant1 = new FlightAttendant("Sreypich", "Pat", 20, "0969293520", Gender.FEMALE, 700, 2)
// let flightAttendant2 = new FlightAttendant("Sreynak", "Kun", 20, "0969293520", Gender.FEMALE, 700, 2)
// let flightAttendant3 = new FlightAttendant("Ranny", "Yem", 20, "0969293520", Gender.FEMALE, 700, 2)

// let crew1 = new Crew(Pilot1, CoPilot1)
// crew1.addFlightAttendant(flightAttendant1, flightAttendant2, flightAttendant3)

// // Date Time
// let departureDate1 = new DateTime(2023, 9, 21, 3, 30)
// let arrivalDate1 = new DateTime(2023, 9, 22, 10, 30)
// let departureDate2 = new DateTime(2023, 9, 30, 8, 30)
// let arrivalDate2 = new DateTime(2023, 10, 15, 1, 0)
// // schedude time
// let schedudeTime1 = new Schedule(departureDate1,arrivalDate1,crew1)
// crew1.addSchedule(schedudeTime1);
// // create passenger
// let passenger1 = new Passenger("Socheat","lun",20,"0199455",Gender.MALE)
// let passenger2 = new Passenger("Mr","Alone",20,"0199455",Gender.MALE)
// let passenger3 = new Passenger("Monika","Tep",20,"0199455",Gender.MALE)
// // create seats 
// let seat1 = new Seat("A001",Ticket_Condition.BUSINESS_CLASS)
// let seat2 = new Seat("A002",Ticket_Condition.BUSINESS_CLASS)
// let seat3 = new Seat("A003",Ticket_Condition.BUSINESS_CLASS)
// let seat4 = new Seat("A004",Ticket_Condition.ECONOMEY_CLASSIC)
// let seat5 = new Seat("A005",Ticket_Condition.ECONOMEY_CLASSIC)
// let seat6 = new Seat("A006",Ticket_Condition.ECONOMEY_CLASSIC)
// let seat7 = new Seat("A007",Ticket_Condition.ECONOMEY_FLEX)
// let seat8 = new Seat("A008",Ticket_Condition.ECONOMEY_FLEX)
// let seat9 = new Seat("A009",Ticket_Condition.ECONOMEY_FLEX)

// // create Aeroplane 
// let aeroplan1 = new Aeroplane("AOV6064")
// aeroplan1.addSeat(seat1,seat2,seat3,seat3,seat4,seat5,seat6,seat7,seat8,seat9)
// // create airport
// let airport1 = new Airport("Cambodia Airport")
// let airport2 = new Airport("UK Airport")
// //create Flight 
// let flight1 = new Flight("CA6062",aeroplan1,gate1,schedudeTime1)
// let flight2 = new Flight("CA6856",aeroplan1,gate2,schedudeTime1)
// let flight3 = new Flight("CA9475",aeroplan1,gate3,schedudeTime1)

// //create Trip 
// let trip1 = new Trip("Cambodia","UK")
// trip1.addFlight(flight1)
// trip1.addFlight(flight2)
// trip1.addFlight(flight3)

// trip1.addFlight(flight1)
// trip1.setPassengerToSeat("A001",passenger1,Meal.DAIRY_FREE)
// trip1.setPassengerToSeat("A002",passenger2,Meal.HALAL)

// // create booking
// let booking1 = new Booking(860767,Ticket_Condition.ECONOMEY_FLEX,returnTicket.TRUE);
// let booking2 = new Booking(860767,Ticket_Condition.BUSINESS_CLASS,returnTicket.TRUE);

// // create credit card
// let card1 = new CreditCard("12344",459,"5/24")
// //create frequentflyer
// let frequentflyer1 = new FrequentFlyer(100,"PS001")
// passenger1.addCreditCard(card1)
// passenger1.addFrequentFlyer(frequentflyer1)
// passenger1.bookingTicket(booking1)
// passenger2.addCreditCard(card1)
// passenger2.addFrequentFlyer(frequentflyer1)
// passenger2.bookingTicket(booking2)

// // create route 
// let route1 = new Route(airport2,airport1)
// route1.addFlight(flight1)
// //Airline company
// let Airline = new AirlineCompany("Cambodia Airline")
// Airline.addCrew(crew1)
// Airline.addRoute(route1)


// // console.log(Airline.getReturnTicket(flight1));
// // console.log(Airline.getReturnTicket(flight1));
// // console.log(route1);
// schedudeTime1.addFlight(flight1);

// // console.log(crew1.getFightHaveToJoin(Pilot1, departureDate1));

// // test userstory 6
// // console.log(passenger1.getWaitingGate(860767));


// // test second part
// // crews
// let Pilot1 = new Pilot("Socheat", "Lun", 20, "0969293520", Gender.MALE, 1000, 2)
// let CoPilot1 = new CoPilot("Mr", "A", 20, "0969293520", Gender.MALE, 850, 2)
// let flightAttendant1 = new FlightAttendant("Sreypich", "Pat", 20, "0969293520", Gender.FEMALE, 700, 2)
// let flightAttendant2 = new FlightAttendant("Sreynak", "Kun", 20, "0969293520", Gender.FEMALE, 700, 2)
// let flightAttendant3 = new FlightAttendant("Ranny", "Yem", 20, "0969293520", Gender.FEMALE, 700, 2)

// let crew1 = new Crew(Pilot1, CoPilot1)
// crew1.addFlightAttendant(flightAttendant1, flightAttendant2, flightAttendant3)
// //Airline company
// let Airline = new AirlineCompany("Cambodia Airline")
// Airline.addCrew(crew1)
// console.log(Airline.getAllEmployeesSalary());

