import { Route } from "../AirlineCompany/Route";
import { Gate } from "./Gate";

export class Airport {
    private name: string
    private gate: Gate
    private route: Route
    constructor (name: string, gate: Gate, route: Route) {
        this.name = name;
        this.gate = gate;
        this.route = route;
    }
}