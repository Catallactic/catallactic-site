
export const COLORS = {
	SUPPLY_PROJECT: '#0a1172',
	SUPPLY_HOLDERS: '#1338be',
	SUPPLY_EXCHANGES: '#d1d1f6',
	SUPPLY_DEFI: '#add8e6',
	SUPPLY_GREY: '#778899',

	DEMAND_SPECULATIVE: '#006727',
	DEMAND_CONSUMERS: '#248823',
	DEMAND_CARDS: '#25a032',
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

export const atan = (numSamples: number, multiplier: number, divider: number) => {
	const amounts = [0];
	for (let i = 1; i <= numSamples; i += 1) {
		amounts.push(multiplier * Math.atan(i / divider));
	}
	console.log('atan: ', amounts);
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