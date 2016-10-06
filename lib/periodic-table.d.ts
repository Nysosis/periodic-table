export interface AtomicElement {
    atomicNumber: number;
    symbol: string;
    name: string;
    atomicMass: string;
    cpkHexColor: string;
    electronicConfiguration: string;
    electronegativity: number;
    atomicRadius: number;
    ionRadius: string;
    vanDelWaalsRadius: number;
    ionizationEnergy: number;
    electronAffinity: number;
    oxidationStates: string;
    standardState: string;
    bondingType: string;
    meltingPoint: number;
    boilingPoint: number;
    density: number;
    groupBlock: string;
    yearDiscovered: string;
}
export interface ElementIndexer {
    [index: string]: AtomicElement;
}
export interface AtomicMassIndexer {
    [atomicMass: number]: AtomicElement;
}
export declare class PeriodicTable {
    jsonFile: string;
    csvFile: string;
    all: () => AtomicElement[];
    elements: ElementIndexer;
    symbols: ElementIndexer;
    numbers: AtomicMassIndexer;
    constructor(dataPath: string);
}
