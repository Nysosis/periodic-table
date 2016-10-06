'use strict';

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
	yearDiscovered: number | string;
}

export interface ElementIndexer {
	[index: string]: AtomicElement;
}

export interface AtomicMassIndexer {
	[atomicMass: number]: AtomicElement;
}

export class PeriodicTable {

	public jsonFile: string;
	public csvFile: string;

	public all: () => AtomicElement[];
	public elements: ElementIndexer;
	public symbols: ElementIndexer;
	public numbers: AtomicMassIndexer;

	constructor(dataPath: string) {
		const data = require(dataPath) as AtomicElement[];

		this.all = () => { return data; };

		this.elements = data.reduce((agg, element) => {
			agg[element.name] = element;
			return agg;
		}, {});

		this.symbols = data.reduce((agg, element) => {
			agg[element.symbol] = element;
			return agg;
		}, {});

		this.numbers = data.reduce((agg, element) => {
			agg[element.atomicNumber] = element;
			return agg;
		}, {});
	}
};
