import { Aeroplane } from "./Aeroplan/Aeroplan";
import { Seat } from "./Aeroplan/Seat";
import { Crew } from "./AirlineCompany/Crew";
import { Airport } from "./Airport/Airport";
import { Gate } from "./Airport/Gate";
import { Ticket_Condition } from "./Booking/Booking";
import { DateTime } from "./DateTime/DateTime";
import { Schedule } from "./DateTime/Schedule";
import { Gender } from "./Human/Person";
import { CoPilot } from "./Human/Staff/CoPilot";
import { FlightAttendant } from "./Human/Staff/FlightAttendant";
import { Pilot } from "./Human/Staff/Pilot";
import { Flight } from "./Trip/Fight";

//create Gates
let gate1 = new Gate("1A");
let gate2 = new Gate("2A");
let gate3 = new Gate("3A");
let gate4 = new Gate("4A");
//crews
let Pilot1 = new Pilot("Socheat", "Lun", 20, "0969293520", Gender.MALE, 1000, 2)
let CoPilot1 = new CoPilot("Mr", "A", 20, "0969293520", Gender.MALE, 850, 2)
let flightAttendant1 = new FlightAttendant("Sreypich", "Pat", 20, "0969293520", Gender.FEMALE, 700, 2)
let flightAttendant2 = new FlightAttendant("Sreynak", "Kun", 20, "0969293520", Gender.FEMALE, 700, 2)
let flightAttendant3 = new FlightAttendant("Ranny", "Yem", 20, "0969293520", Gender.FEMALE, 700, 2)

let crew1 = new Crew(Pilot1, CoPilot1)
crew1.addFlightAttendant(flightAttendant1, flightAttendant2, flightAttendant3)
// Date Time
let departureDate1 = new DateTime(2023, 9, 21, 3, 30)
let arrivalDate1 = new DateTime(2023, 9, 22, 10, 30)
let departureDate2 = new DateTime(2023, 9, 30, 8, 30)
let arrivalDate2 = new DateTime(2023, 10, 15, 1, 0)
// schedude time
let schedudeTime1 = new Schedule(departureDate1,arrivalDate1,crew1)

// create seats 
let seat1 = new Seat("A001",Ticket_Condition.BUSINESS_CLASS)
let seat2 = new Seat("A002",Ticket_Condition.BUSINESS_CLASS)
let seat3 = new Seat("A003",Ticket_Condition.BUSINESS_CLASS)
let seat4 = new Seat("A004",Ticket_Condition.ECONOMEY_CLASSIC)
let seat5 = new Seat("A005",Ticket_Condition.ECONOMEY_CLASSIC)
let seat6 = new Seat("A006",Ticket_Condition.ECONOMEY_CLASSIC)
let seat7 = new Seat("A007",Ticket_Condition.ECONOMEY_FLEX)
let seat8 = new Seat("A008",Ticket_Condition.ECONOMEY_FLEX)
let seat9 = new Seat("A009",Ticket_Condition.ECONOMEY_FLEX)

// create Aeroplane 
let aeroplan1 = new Aeroplane("AOV6064")
aeroplan1.addSeat(seat1,seat2,seat3,seat3,seat4,seat5,seat6,seat7,seat8,seat9)

//create Flight 
let Flight1 = new Flight("CA6062",aeroplan1,gate1,schedudeTime1)

//Route 



// create Airports
// let airport1 = new Airport()