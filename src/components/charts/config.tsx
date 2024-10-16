

export const COLOR_PROJECT = '#0a1172';
export const COLOR_HOLDERS = '#1338be';
export const COLOR_EXCHANGES = '#d1d1f6';
export const COLOR_DEFI = '#add8e6';
export const COLOR_GREY = '#d3d3d3';



export const constant = (numSamples:number, value:number) => {
	const amounts = [value];
	for (let i = 1; i <= numSamples; i += 1) {
		amounts.push(value);
	}
	console.log(amounts);
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
	console.log(amounts);
	return amounts;
};