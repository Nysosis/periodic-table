"use strict";

import pt = require("./index");

let atomicMass = (formula: string) => {
	return formula
		.split(' ')
		.map(x => x.trim())
		.reduce((list, x) => {
			let firstDigit = x.search(/\d/);
			list.push(firstDigit !== -1
				? [parseInt(x.slice(firstDigit), 10), x.slice(0, firstDigit)]
				: [1, x]);
			return list;
		}, [] as [number, string][])
		.reduce((sum, vector) => {
			return sum + (vector[0] * parseFloat(pt.symbols[vector[1]].atomicMass.split('(')[0]));
		}, 0);
};

export { atomicMass }
