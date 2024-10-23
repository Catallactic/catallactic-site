
export const COLORS = {
	SUPPLY_PROJECT: '#0a1172',
	SUPPLY_HOLDERS: '#1338be',
	SUPPLY_EXCHANGES: '#d1d1f6',
	SUPPLY_DEFI: '#add8e6',
	SUPPLY_GREY: '#d3d3d3',

	DEMAND_SPECULATIVE: '#006727',
	DEMAND_CONSUMERS: '#248823',
	DEMAND_CARDS: '#25a032',

	PRICE: '#8B0000'
}

// **********************************************************************************************************************
// ***************************************************** basic plotting *************************************************
// **********************************************************************************************************************
export const constant = (numSamples:number, value:number) => {
	const amounts = [value];
	for (let i = 1; i <= numSamples; i += 1) {
		amounts.push(value);
	}
	console.log('constant: ', amounts);
	return amounts;
};

export const constantFrom = (numSamples:number, value:number, fromSample: number) => {
	const amounts = [value];
	for (let i = 1; i <= numSamples; i += 1) {
		amounts.push(i <= fromSample ? 0 : value);
	}
	console.log('constant: ', amounts);
	return amounts;
};

export const ramp = (numSamples:number, value:number) => {
	const amounts = [value];
	for (let i = 1; i <= numSamples; i += 1) {
		amounts.push(value);
	}
	console.log(amounts);
	return amounts;
};

export const vesting = (numSamples:number, givenOnTGE:number, cliffDelay:number, givenOnMax:number, steps:number) => {
	const amounts = [givenOnTGE];
	for (let i = 1; i <= numSamples; i += 1) {
		let data = 0;
		if(i <= cliffDelay) data = givenOnTGE;
		else if(i >= cliffDelay + steps) data = givenOnMax;
		else data = givenOnTGE + (i-cliffDelay) * (givenOnMax - givenOnTGE) / steps;
		amounts.push(data);
	}
	console.log('vesting: ', amounts);
	return amounts;
};

interface Coords {
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
	amounts.push(coords[coords.length-1].y);
	console.log('coordsToLinear: ', amounts);
	return amounts;
}

// **********************************************************************************************************************
// ************************************************** aggregated plotting ***********************************************
// **********************************************************************************************************************
export const atan = (numSamples: number, multiplier: number, divider: number) => {
	const amounts = [0];
	for (let i = 1; i <= numSamples; i += 1) {
		amounts.push(multiplier * Math.atan(i / divider));
	}
	console.log('atan: ', amounts);
	return amounts;
};

export const quadraticCurve = (numSamples: number, a: number, b: number, c: number) => {
	const amounts = [0];
	for (let i = 1; i <= numSamples; i += 1) {
		amounts.push(a * i * i + b * i + c);
	}
	console.log('quadraticCurve: ', amounts);
	return amounts;
};

// **********************************************************************************************************************
// ************************************************** aggregated plotting ***********************************************
// **********************************************************************************************************************
export const sumArrays = (...arrays: any[]) => {
  const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
  const result = Array.from({ length: n });
  return result.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
}
export const divideArrays = (dividerArray: any[], divisorArray: any[], multiplier: number) => {
	const amounts = [];
	for (let i = 0; i < dividerArray.length; i += 1) {
		console.log('divideArrays: ', dividerArray[i], divisorArray[i], multiplier * dividerArray[i] / divisorArray[i]);
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
// ****************************************************** Arrays ********************************************************
// **********************************************************************************************************************
// TGE
export const TGE_EXCHANGES = vesting(100, 20, 12, 40, 48);		// 40 in 20 steps with 12 delay + 20 initial
export const TGE_SEED = vesting(100, 0, 12, 10, 24);					// 10 in 24 steps with 12 delay
export const TGE_PRE = vesting(100, 4, 3, 40, 24);						// 40 in 24 steps with 3 delay + 4 initial
export const TGE_PUBLIC = vesting(100, 10, 3, 50, 12);				// 50 in 12 steps with 3 delay + 10 initial
export const TGE_PROJECT = vesting(100, 0, 3, 10, 12);				// 10 in 12 steps with 3 delay
export const CIRCULATING_SUPPLY = sumArrays(TGE_EXCHANGES, TGE_SEED, TGE_PRE, TGE_PUBLIC, TGE_PROJECT);

// SOLD
export const SOLD_SEED_TO_EXCHANGES = constantFrom(100, 10*0.35, 36);
export const SOLD_PRE_TO_EXCHANGES = constantFrom(100, 40*0.25, 27);
export const SOLD_PUBLIC_TO_EXCHANGES = constantFrom(100, 50*0.15, 15);
export const SOLD_EXCHANGES = sumArrays(TGE_EXCHANGES, SOLD_SEED_TO_EXCHANGES, SOLD_PRE_TO_EXCHANGES, SOLD_PUBLIC_TO_EXCHANGES);
export const SOLD_SEED = sumArrays(TGE_SEED, revertArray(SOLD_SEED_TO_EXCHANGES));
export const SOLD_PRE = sumArrays(TGE_PRE, revertArray(SOLD_PRE_TO_EXCHANGES));
export const SOLD_PUBLIC = sumArrays(TGE_PUBLIC, revertArray(SOLD_PUBLIC_TO_EXCHANGES));
export const SOLD_PROJECT = TGE_PROJECT;
export const SOLD_HOLDERS = sumArrays(SOLD_SEED, SOLD_PRE, SOLD_PUBLIC);

// TOKENS DEMAND
export const DEMAND_SPECULATIVE = coordsToLinear([{x:0,y:8},{x:3,y:6},{x:12,y:10},{x:15,y:12},{x:27,y:15},{x:27,y:12},{x:36,y:10},{x:60,y:12},{x:100,y:10}]);
export const DEMAND_CONSUMERS = coordsToLinear([{x:0,y:0},{x:3,y:0},{x:12,y:0},{x:15,y:2},{x:27,y:3},{x:27,y:3},{x:36,y:5},{x:60,y:6},{x:100,y:7}]);
export const DEMAND_CARDS = coordsToLinear([{x:0,y:0},{x:3,y:0},{x:12,y:0},{x:15,y:2},{x:27,y:3},{x:27,y:3},{x:36,y:5},{x:60,y:8},{x:100,y:10}]);
export const DEMAND = sumArrays(DEMAND_SPECULATIVE, DEMAND_CONSUMERS, DEMAND_CARDS);

// VC
export const VC_EXCHANGES = sumArrays(SOLD_EXCHANGES, revertArray(DEMAND));
export const VC_HOLDERS = sumArrays(SOLD_HOLDERS, DEMAND);
export const VC_PROJECT = SOLD_PROJECT;

// PHYSICAL DEMAND
// https://vishalchk2002.medium.com/
// https://vishalchk2002.medium.com/how-to-increase-profits-in-business-using-quadratic-equations-f3f82206b031
// https://vishalchk2002.medium.com/quadratic-equation-for-your-bakery-shop-for-profit-loss-calculation-f7d8e1629c81
// https://www.youtube.com/watch?v=CN62W2pnCHQ
//export const PHYSICAL_DEMAND = coordsToLinear([{x:0,y:0},{x:3,y:0},{x:12,y:0},{x:15,y:2},{x:27,y:3},{x:27,y:3},{x:36,y:5},{x:60,y:8},{x:70,y:16},{x:80,y:24},{x:90,y:38},{x:100,y:50}]);
export const PHYSICAL_DEMAND = quadraticCurve(100, 0.003, 0.1, 0.1);

// PRICE
export const PRICE_PROFILE = divideArrays(VC_EXCHANGES, DEMAND, 10);