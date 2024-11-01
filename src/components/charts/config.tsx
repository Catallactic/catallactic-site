import { constant, constantFrom,  quadraticCurve, quadraticRegression, revertArray, sumArrays, vesting, spotPriceCPMM, spotPriceCSMM, supplyCSMM, supplyCPMM, supplyCMMM, invariantSupplyCSMM, invariantSupplyCPMM, invariantSupplyCMMM, invariantPriceCSMM, invariantPriceCPMM } from "./maths/charts";

export const COLORS = {
	SUPPLY_PROJECT: '#0a1172',
	SUPPLY_HOLDERS: '#1338be',
	SUPPLY_EXCHANGES: '#0096FF',
	SUPPLY_DEFI: '#add8e6',
	SUPPLY_GREY: '#d3d3d3',

	DEMAND_SPECULATIVE: '#006727',
	DEMAND_CONSUMERS: '#248823',
	DEMAND_CARDS: '#25a032',

	PRICING: '#8B0000',
	PRICE_CS: '#F88379',
	PRICE_CP: '#AA4A44',
}

export const SCALE = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60, 61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];


// **********************************************************************************************************************
// ************************************************** Generic Data ******************************************************
// **********************************************************************************************************************
// INVARIANT SUPPLY
export const INVARIANT_SUPPLY_CS_20 = invariantSupplyCSMM(100, 20);
export const INVARIANT_SUPPLY_CP_200 = invariantSupplyCPMM(100, 200);
export const INVARIANT_SUPPLY_CM_20 = invariantSupplyCMMM(100, 20);

// INVARIANT PRICE
export const INVARIANT_PRICE_CS_100 = invariantPriceCSMM(100,100);
export const INVARIANT_PRICE_CP_200 = invariantPriceCPMM(100, 200);
export const INVARIANT_PRICE_CM_20 = invariantSupplyCMMM(100, 20);

// **********************************************************************************************************************
// ****************************************************** Arrays ********************************************************
// **********************************************************************************************************************
// TGE
export const VESTING_EXAMPLE = vesting(100, 30, 20, 100, 36)	// 50 in 12 steps with 3 delay + 10 initial
export const TOTAL_SUPPLY = constant(100, 150);
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
export const DEMAND_SPECULATIVE = quadraticRegression(100, [0, 3, 12, 15, 27, 36, 60, 100], [15, 12, 11, 8, 6, 4, 4, 2]);
export const DEMAND_CONSUMERS = quadraticRegression(100, [0, 3, 12, 15, 27, 36, 60, 100],  [0, 0, 0, 2, 3, 5, 6, 7]);
export const DEMAND_CARDS = quadraticRegression(100, [0, 3, 12, 15, 27, 36, 60, 100],  [0, 0, 0, 2, 3, 5, 8, 10]);
export const DEMAND = sumArrays(DEMAND_SPECULATIVE, DEMAND_CONSUMERS, DEMAND_CARDS);

// VC
export const VC_EXCHANGES = sumArrays(SOLD_EXCHANGES, revertArray(DEMAND));
export const VC_HOLDERS = sumArrays(SOLD_HOLDERS, DEMAND);
export const VC_PROJECT = SOLD_PROJECT;

// PHYSICAL DEMAND
export const PHYSICAL_DEMAND = quadraticCurve(100, 0.003, 0.19, 0.1);

// TOKEN SUPPLY
export const SUPPLY_CS_20 = supplyCSMM(100, VC_EXCHANGES, 20);
export const SUPPLY_CS_30 = supplyCSMM(100, VC_EXCHANGES, 30);
export const SUPPLY_CS_40 = supplyCSMM(100, VC_EXCHANGES, 40);
export const SUPPLY_CS_50 = supplyCSMM(100, VC_EXCHANGES, 50);
export const SUPPLY_CP_200 = supplyCPMM(100, VC_EXCHANGES, 200);
export const SUPPLY_CP_300 = supplyCPMM(100, VC_EXCHANGES, 300);
export const SUPPLY_CM_20 = supplyCMMM(100, VC_EXCHANGES, 20);
export const SUPPLY_CM_30 = supplyCMMM(100, VC_EXCHANGES, 30);

// SPOT PRICE
export const PRICE_PROFILE_CS_50 = spotPriceCSMM(100, VC_EXCHANGES, 50);
export const PRICE_PROFILE_CS_200 = spotPriceCSMM(100, VC_EXCHANGES, 200);
export const PRICE_PROFILE_CP_50 = spotPriceCPMM(100, VC_EXCHANGES, 50);
export const PRICE_PROFILE_CP_100 = spotPriceCPMM(100, VC_EXCHANGES, 100);
export const PRICE_PROFILE_CP_200 = spotPriceCPMM(100, VC_EXCHANGES, 200);
export const PRICE_PROFILE_CP_300 = spotPriceCPMM(100, VC_EXCHANGES, 300);
