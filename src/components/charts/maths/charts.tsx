import { Polyfit } from "./polyfit";


// **********************************************************************************************************************
// ************************************************** arrays operations *************************************************
// **********************************************************************************************************************
export const sumArrays = (...arrays: any[]) => {
  const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
  const result = Array.from({ length: n });
  const amounts = result.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
	console.log('sumArrays: ', amounts);
	return amounts;
}
export const divideArrays = (dividerArray: any[], divisorArray: any[], multiplier: number) => {
	const amounts = [];
	for (let i = 0; i < dividerArray.length; i += 1) {
		amounts.push(multiplier * dividerArray[i] / divisorArray[i]);
	}
	console.log('divideArrays: ', amounts);
	return amounts;
}
export const revertArray = (array: any[]) => {
	const amounts = [];
	for (let i = 0; i < array.length; i += 1) {
		amounts.push(-1 * array[i]);
	}
	console.log('revertArray: ', amounts);
	return amounts;
}

// **********************************************************************************************************************
// ***************************************************** basic plotting *************************************************
// **********************************************************************************************************************
export const constant = (numSamples:number, value:number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i += 1) {
		amounts.push(value);
	}
	console.log('constant: ', amounts);
	return amounts;
};

export const constantFrom = (numSamples:number, value:number, fromSample: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i += 1) {
		amounts.push(i <= fromSample ? 0 : value);
	}
	console.log('constantFrom: ', amounts);
	return amounts;
};

export const ramp = (numSamples:number, value:number) => {
	const amounts = [];
	for (let i = 0; i <= numSamples; i++) {
		amounts.push(value);
	}
	console.log(amounts);
	return amounts;
};

export const vesting = (numSamples:number, givenOnTGE:number, cliffDelay:number, givenOnMax:number, steps:number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		let data = 0;
		if(i <= cliffDelay) data = givenOnTGE;
		else if(i >= cliffDelay + steps) data = givenOnMax;
		else data = givenOnTGE + (i-cliffDelay) * (givenOnMax - givenOnTGE) / steps;
		amounts.push(data);
	}
	console.log('vesting: ', amounts);
	return amounts;
};

export const atan = (numSamples: number, multiplier: number, divider: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(multiplier * Math.atan(i / divider));
	}
	console.log('atan: ', amounts);
	return amounts;
};

/*interface Coords {
	x: number;
	y: number;
}
export const coordsToLinear = (coords:Array<Coords>) => {
	const amounts = [];
	for (let i = 1; i < coords.length; i += 1) {
		let x1:number = coords[i-1].x;
		let y1:number = coords[i-1].y;
		let x2:number = coords[i].x;
		let y2:number = coords[i].y;

		for (let j=x1; j<x2; j++) {
			let data = y1+((y2-y1)*j/x2);
			amounts.push(data);
		}
	}
	//amounts.push(coords[coords.length-1].y);
	console.log('coordsToLinear: ', amounts);
	return amounts;
}*/

// f(x) = ax2 + bx + c
export const quadraticCurve = (numSamples: number, a: number, b: number, c: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(a * i * i + b * i + c);
	}
	console.log('quadraticCurve: ', amounts);
	return amounts;
};

export const quadraticRegression = (numSamples: number, xArray: any[], yArray: any[]) => {
	var poly = new Polyfit(xArray, yArray);
	var solver = poly.getPolynomial(2);

	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(solver(i));
	}
	console.log('quadraticRegression: ', amounts);
	return amounts;
}

// **********************************************************************************************************************
// ****************************************************** known charts **************************************************
// **********************************************************************************************************************
// CSMM
export const invariantSupplyCSMM = (numSamples: number, k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(k - i);
	}
	console.log('invariantSupplyCSMM: ',amounts);
	return amounts;
}
export const invariantPriceCSMM = (numSamples: number, k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(i / (k - i));
	}
	console.log('invariantPriceCSMM: ',amounts);
	return amounts;
}
export const supplyCSMM = (numSamples: number, supply: any[], k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(k - supply[i]);
	}
	console.log('supplyCSMM: ',amounts);
	return amounts;
}
export const spotPriceCSMM = (numSamples: number, supply: any[], k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(supply[i] / (k - supply[i]));
	}
	console.log('spotPriceCSMM: ',amounts);
	return amounts;
}

// CPMM
export const invariantSupplyCPMM = (numSamples: number, k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(k/i);
	}
	console.log('invariantSupplyCPMM: ',amounts);
	return amounts;
}
export const invariantPriceCPMM = (numSamples: number, k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(i * i / k);
	}
	console.log('invariantPriceCPMM: ',amounts);
	return amounts;
}
export const supplyCPMM = (numSamples: number, supply: any[], k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(k/supply[i]);
	}
	console.log('supplyCPMM: ',amounts);
	return amounts;
}
export const spotPriceCPMM = (numSamples: number, supply: any[], k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(supply[i] * supply[i] / k);
	}
	console.log('spotPriceCPMM: ',amounts);
	return amounts;
}

// CMMM
export const invariantSupplyCMMM = (numSamples: number, k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(k*k/i);
	}
	console.log('invariantSupplyCMMM: ',amounts);
	return amounts;
}
export const invariantPriceCMMM = (numSamples: number, k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(i * i / (k * k));
	}
	console.log('invariantPriceCMMM: ',amounts);
	return amounts;
}
export const supplyCMMM = (numSamples: number, supply: any[], k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(k*k/supply[i]);
	}
	console.log('supplyCMMM: ',amounts);
	return amounts;
}
export const spotPriceCMMM = (numSamples: number, supply: any[], k: number) => {
	const amounts = [];
	for (let i = 0; i < numSamples; i++) {
		amounts.push(supply[i] * supply[i] / (k * k));
	}
	console.log('spotPriceCMMM: ',amounts);
	return amounts;
}