

export const COLOR_PROJECT = '#0a1172';
export const COLOR_HOLDERS = '#1338be';
export const COLOR_EXCHANGES = '#d1d1f6';
export const COLOR_DEFI = '#add8e6';
export const COLOR_GREY = '#d3d3d3';

export const vesting = (numSamples:number, numTokensTGE:number, numTokensCliff:number, numTokensTotal:number, period:number) => {
	const amounts = [numTokensTGE];
	for (let i = 1; i <= numSamples; i += 1) {
		let data = 0;
		if(i <= numTokensCliff) data = numTokensTGE;
		else if(i >= numTokensCliff + period) data = numTokensTotal;
		else data = numTokensTGE + (i-numTokensCliff) * (numTokensTotal - numTokensTGE) / period;
		amounts.push(data);
	}
	console.log(amounts);
	return amounts;
};
