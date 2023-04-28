import { Route } from "../AirlineCompany/Route";
import { Gate } from "./Gate";

export class Airport {
    private name: string
    private gates: Gate[]=[];
    private routes: Route[] = [];
    constructor (name: string, gate: Gate, route: Route) {
        this.name = name;
        this.gates.push(gate);
        this.routes.push(route);
    }
}