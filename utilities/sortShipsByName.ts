import { Ship } from "../types";

export default function sortShipsByName(a: Ship, b: Ship) {
    return (a.name > b.name) ? 1 : -1;
}