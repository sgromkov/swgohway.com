export type AlignmentCode = 'light' | 'dark';

export enum LogicValues {
    AND = 'and',
    OR = 'or',
}
export type Logic = LogicValues.AND | LogicValues.OR;

export interface SelectOption {
    title: string,
    code: string,
    selected?: boolean,
}

export interface Alignment {
    id: string,
    title: string,
    code: AlignmentCode,
}

export interface Faction {
    id: string,
    title: string,
    code: string,
}

export interface Role {
    id: string,
    title: string,
    code: string,
}

export interface ShipRole {
    id: string,
    title: string,
    code: string,
}

export interface Feature {
    title: string,
    code: string,
}

export interface Character {
    id: string,
    name: string,
    code: string,
    swgohggBaseId: string,
    image: string,
    power: number,
    description: string,
    alignment: Alignment,
    factions?: Faction[],
    role: Role,
    ability?: string,
    ship?: string,
    shipSlot?: number,
    activateShardCount: number,
    leader: boolean,
    fleetCommander: boolean,
    galacticLegend: boolean,
}

export interface Ship {
    id: string,
    name: string,
    code: string,
    swgohggBaseId: string,
    image: string,
    power: number,
    description: string,
    alignment: Alignment,
    factions?: Faction[],
    role: ShipRole,
    ability?: string,
    activateShardCount: number,
    cargoShip: boolean,
}
