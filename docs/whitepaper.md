---
sidebar_position: 1
title: Whitepaper
---

import LineTradeFunctionInvariants from '@site/src/components/charts/LineTradeFunctionInvariants';
import LineTradeFunctionSpotPrice from '@site/src/components/charts/LineTradeFunctionSpotPrice';
import LineEstimateTotalSupplyChart from '@site/src/components/charts/LineEstimateTotalSupplyChart';
import LineEstimateCirculatingSupplyStaticExDemandChart from '@site/src/components/charts/LineEstimateCirculatingSupplyStaticExDemandChart';
import LineEstimateCirculatingSupplyDynamicExDemandChart from '@site/src/components/charts/LineEstimateCirculatingSupplyDynamicExDemandChart';
import LineEstimateTotalCryptoDemandChart from '@site/src/components/charts/LineEstimateTotalCryptoDemandChart';
import LineEstimateCirculatingSupply from '@site/src/components/charts/LineEstimateCirculatingSupply';
import LineEstimatePriceEvolutionChart from '@site/src/components/charts/LineEstimatePriceEvolutionChart';
import LineEstimateExchangesInitilizationChart from '@site/src/components/charts/LineEstimateExchangesInitilizationChart';
import LineEstimateValueCaptureEventChart from '@site/src/components/charts/LineEstimateValueCaptureEventChart';
import LineParametrizationChart from '@site/src/components/charts/LineParametrizationChart';
import LineParametrizationVestingChart from '@site/src/components/charts/LineParametrizationVestingChart';
import LineReleaseScheduleChart from '@site/src/components/charts/LineReleaseScheduleChart';
import LineSupplyProfileChart from '@site/src/components/charts/LineSupplyProfileChart';
import LineSupplyCompositionChart from '@site/src/components/charts/LineSupplyCompositionChart';
import LineStageValueCaptureChart from '@site/src/components/charts/LineStageValueCaptureChart';
import LineStageValueReleaseChart from '@site/src/components/charts/LineStageValueReleaseChart';
import LineVestingSchedulesChart from '@site/src/components/charts/LineVestingSchedulesChart';
import DoughnutTokenAllocationConceptsChart from '@site/src/components/charts/DoughnutTokenAllocationConceptsChart';
import DoughnutInitialTokenAllocationChart from '@site/src/components/charts/DoughnutInitialTokenAllocationChart';
import DoughnutProjectAllocationChart from '@site/src/components/charts/DoughnutProjectAllocationChart';
import DoughnutFundingAllocationChart from '@site/src/components/charts/DoughnutFundingAllocationChart';
import DoughnutNegotiationAllocationChart from '@site/src/components/charts/DoughnutNegotiationAllocationChart';
import DoughnutConsolidatedTokenAllocationChart from '@site/src/components/charts/DoughnutConsolidatedTokenAllocationChart';
import DoughnutUnderlyingAssetPaymentsChart from '@site/src/components/charts/DoughnutUnderlyingAssetPaymentsChart';
import DoughnutOperationsAllocationChart from '@site/src/components/charts/DoughnutOperationsAllocationChart';

import '@site/src/css/papers.css';

:::note
`(Please, be aware that, whereas this whitepaper already gives an idea of what a CryptoCommodity is, still is a work in progress)`
:::

## Abstract
---

The following whitepaper proposes a novel kind of token, CryptoCommodity. CryptoCommodity tokens are representative money in electronic form that represent the intrinsic value of an underlying asset. They do not provide a measure of this intrinsic value. Instead, CryptoCommodity tokens expose the intrinsic value to the consumer and rely on a built-in price formation mechanism to capture the marginal utility of the asset. Currencies forming their own prices deliver the true foundation for a decentralization in value, as a core principle in the blockchain industry. Additionally, forming its own prices is an empowering factor for the real economy. Once the intrinsic value is captured CryptoCommodity tokens include a stabilization mechanism in order to function as a cryptocurrency and deliver currency-related features.

This work describes what CryptoCommodities are and how they work, what their stages are, the utilities, requirements, challenges, distribution mechanisms and opportunities they provide for issuers, adopters and society as a whole.

Introduction should not be and issue as CryptoCommodities are designed with the purpose of benefiting issuers: (1) Issuers can carry out fundraising rounds to launch their real economy project. (2) Issuers can include transaction taxes balanced with their reputation (3) Issuers can also profit by providing DeFi services to the community. (4) Minting new tokens beyond the stabilization mechanism is a sale in itself (as long as the issuer keeps the required collateral) (5) Underlying market can share CryptoCommodity tokens with regular means of payment enabling incremental adoption.

This project aims to provide direction to a real world crypto industry, as we think it diverted from the original blockchain principles. We do not get too deep in implementation as we think is easy to do the things right, but is very uncommon to do the right things. This whitepaper looks for to do the right things. The whitepaper aims to open a debate by presenting an overview of ideas for creating CryptoCommodity tokens. We are aware that every single aspect of this process must be validated and benchmarks must be created. The work is released under “Open Source” license to encourage contributions.

Based on this document, the initial design of the CYGAS token has been prepared, as defined by “The GasClick Project” (gasclick.net), with the aim of creating a 'Body of Knowledge' for future developments built under the same principles. CYGAS will be pilot implementation for the CryptoCommodity model, in order to define, improve and further elaborate the design. Furthermore, for the first stage of value capture, the token will be a “Utility Token”, so there will be enough time to understand the value release stage, which is where the stabilization mechanism takes place. The CryptoCommodity implementation can also be updated to adapt to new discoveries and challenges.

## Keywords
---

representative money, cryptocurrencies, cryptocommodities, stablecoins, price formation, stabilization mechanism, tokenomics, private currencies, currency competition, cantillon effects, monetary theory

<!-- truncate -->

<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>

## 1. A Review on Value
---


From its origins in medieval times, the historical evolution of the value debate became locked into a centuries old dialectical conflict between the objective and subjective approaches. This study has traced the waves of value theories which oscillated back and forth towards each approach, until Walras and Marshall accommodated both rivaling approaches of value within their separate General and Partial Equilibrium frameworks.

<div style={{textAlign: 'center'}}>
	<img src="/img/theory-of-value.png" width="80%"></img>
</div>


### 1.1. Intrinsic Value

Intrinsic value theories started as early as 1600s; natural value by W. Petty (1623-1687); value based on land and labor, R. Cantillon (1680-1734); value and market price, N. Barbon (1640-1698); objective value, intrinsic value, A. Smith (1723-1790); value driven by labor, K. Marx (1818-1883) and D. Ricardo (1772-1823).

An intrinsic theory of value (also called theory of objective value) is any theory of value which holds that the value of an object or a good or service is intrinsic, meaning that it has in itself and can be estimated using objective measures. The theories of the classical school of economics look to the <b>process of producing an item, and the costs involved in that process, as a measure of the item's intrinsic value</b>.


### 1.2. Marginal Revolution

Marginalism as a formal theory can be attributed to the work of three economists, W. Jevons (1835-1882) in England, C. Menger (1840-1921) in Austria, and Walras in Switzerland.  William Stanley Jevons first proposed the theory in articles in 1863 and 1871. Carl Menger presented the theory in 1871. Menger explained why individuals use marginal utility to decide amongst trade-offs. Léon Walras introduced the theory in Éléments d'économie politique pure published in 1874. Walras was able to articulate the utility maximization of the consumer far better than Jevons and Menger by assuming that utility was linked to the consumption of each good. <b>Marginal utility focused on the value that the consumer received from the good when determining its value</b>.


### 1.3. Value as Supply and Demand

Although the Marginal Revolution flowed from the work of Jevons, Menger and Walras, their work might have failed to enter the mainstream were it not for a second generation of economists. In England, the second generation were exemplified by Philip Wicksteed, by William Smart, and by Alfred Marshall; in Austria by Eugen Böhm von Bawerk and by Friedrich von Wieser; in Switzerland by Vilfredo Pareto; and in America by Herbert Joseph Davenport and by Frank A. Fetter.

Alfred Marshall (1842-1924) (Daraban, 2016) amalgamated the best of classical analysis with the new tools of the marginalists in order to <b>explain value in terms of supply and demand</b>. He acknowledged that the study of any economic concept, like value, is hindered by the interrelativeness of the economy and varying time effects. As a result, Marshall used a partial equilibrium framework, in which most variables are kept constant, in order to develop his analysis on the theory of value.

<div style={{textAlign: 'center'}}>
	<img src="/img/Supply-and-Demand-Curve.webp" width="40%"></img>
</div>



<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>



## 2. CryptoCommodity
---

CryptoCommodities are representative money in electronic form. As representative money, they represents the intrinsic value of the underlying asset. CryptoCommodities do not aim to provide a measurement of this intrinsic value but, instead, they rely in a price formation mechanism to capture the marginal utility of the asset.

CryptoCommodities are a specialization of Utility Tokens built on top of a fungible asset, that add a stabilization mechamism once value is captured, to create a Currency Token.

### 2.1. The Underlying Asset

To understand a CryptoCommodity lets first examine how a regular RWA stablecoin works. A regular RWA stablecoin is backed by an asset, typically a physical asset. This asset has an unknown intrinsic value. By binding 1-to-1 the supply of the stablecoin to the RWA stock as collateral, the stablecoin is able to capture the intrinsic value of the asset. However, the stablecoin knowns nothing about the marginal utility that the RWA will produce on consumers. Therefore, the stablecoin is unable to form its own price and this must be borrowed from an external source, typically an internaciobal RWA market. There are some consequences of this fact: first, according to regulations, the stablecoin must be collateralized from inception and, therefore, only issuers with enough collateral can issue an stablecoin. Secondly, as the value is provided from inception, issuers do not have a chance to fundraise. Also, issuers, must custody and, potentially, redeem the asset incurring in high operating expenses. Since the price is borrowed from a fiat source, this configuration typically creates a fiat-bound currency, and decentralization in value is compromissed. Similar features apply to stablecoins bound to currencies, either fiat or not fiat.

A CryptoCommodity is also an stablecoin but improves this process at several levels. A CryptoCommodity also binds to an asset, but it does through an utility working as proxy. The bound utility helps by providing a marginal utility when exposed to consumers. The utility must be an off-chain utility, typically a real world utility.

But there is more. As an utility-proxied asset is one time event, meaning that when the utility is satisfied, the asset is consumed, is not possible to bind permanently to make an offer. By binding to this kind of asset, the CryuptoCommodity would have an continuously-growing supply. And this is not something that we want because the quality of the CrtypcCommodity would be far from optimal. In order to overcome this issue, the definition can be adapted to a "repeating utility-proxied asset", that is something that the issuer will be always able to provide periodically. Iin order to make the marginal utility quantifiable, the repeatability period must cover a known timespan where the utility provides value to the consumer, e.g. a gas cylinder provides value for one month at a cost of $16. This means that the marginal utility for consumers is $16 per month.

<div style={{textAlign: 'center'}}>
	<img src="/img/underlaying_asset.svg" width="40%"></img>
</div>
<br/>


### 2.2. Binding Asset to CryptoCommodity

Once the underlying asset id defined, we are reaady to bind this asset to the CryptoCommodity. The mission of the underlaying asset is to provide value to the CrytoCommodity. In sucha a way that the CryptoCommodit becomes representative of the compromissed unit of underlying asset.

<div style={{textAlign: 'center'}}>
	<img src="/img/underlaying_asset_bound.svg" width="60%"></img>
</div>
<br/>

### 2.3. Exposing Intrinsic Value

So, for a CryptoCommodity backed by this composed asset exposed in a exchange, the marginal utility will be converted into a price with the exchamnge price formation mechanism. 

<div style={{textAlign: 'center'}}>
	<img src="/img/underlaying_asset_exposed.svg" width="100%"></img>
</div>
<br/>

The price is formed in the internal ecosystem of the CryptoCommodity so not access to external price sources (e.g. Oracles) or manual supply manipualtion is required. Also, no dependency on external systems. A CryptoCommodity is an autonomous currency and is not boud to any other system, e.g. not bound to fiat. This fact is a foundation for real value decentralization.

The price formation is dynamic, which means, is in a continual revision. The purchasing power of the currency will growth in relation to other currencies as long the issuer is providing incremental value to the society. If the provider denies to provide value, the CryptoCommodity value will fall, and its purchasing power will be reduced. As a consequence consumers will prefer other currencies. This will encourage the issuer to provide the best practies and a environment of wealth.

### 2.4. CryptoCommodity Peg

As a Stablecoin, a CryptoCommodity value has a natural built-in stability. This stability is borrowed from the underlying asset.

Economic history and literature are rich with schemes to peg the price of the currency to a price index or price index derivative, in order to provide price stability: monometallic (gold) standards, bimetallism, and later the symmetallism proposed by Marshall (1886, 1887a, 1887b) and Edgeworth (1895); the “fixed value of bullion” standard proposed by Williams (1892); Fisher's compensated dollar (1911, 1913a, 1913b, 1913c, 1913d, 1914, and 1920); the Commodity Reserve Currency scheme suggested by Goudriaan (1932), B. Graham (1937, 1944), F. D. Graham (1942), and revisited by Friedman (1951); Hall's (1982) ANCAP basket; the proposal by Miles (1984) and Sumner (1989, 1991, 1995) to use futures contracts, Kevin Dowd’s (1994) quasi-futures contract, and later Dowd’s (1999) price index option. For a review of this literature the reader is referred to Dowd (1996, Chapter 14). [38]

Since blockchain advent, the cryptocurrency landscape is rich in fiat backed stablecoins, either pegged to a fiat currency (USDT, USDC, BUSD, FRAX, MIM, Pax Dollar, USDJ, Gemini USD, USDP,Palau, FDUSD, PYUSD, Real USD, TrueUSD, ZUSD, DAI, CUSD, USDD, USB, USDe, Raft, eUSD, TerraUSD, Fei, EUROCEUROe, GBPT, XSGD, IDRT, BIDR, BRZ, DRAM, MXNT, MXNC), pegged to a commodity (PAXG,GLD, MCAU, AABBG, NNN, AWG, PMGT, CTLX, XAUT, DGX, CACHE, RBZ GBDTRBZ ZiG, GODL, SLVT, CRUDE,PDX, PTR, FIX, GEM, BANANA, SOYA, CORA, WHEA, SOYB, CORB, XCORN XSOY, XWHEAT, XRICE) or pegged to another cryptocurrency (frxETH). They all peg their price to the price formed  in an external market. The price formation mechanism is external to the stablecoin ecosystem. This price needs to be captured from the external source and set into the cryptocurrency with an stabilization mechanism that implies to manage the supply. Either if the price manually set by the stablecoin issuer, or the smart contract has a built-in access with Oracles, the stablecoins will inherit the centralization feature of the price formation source. Unfortunately this is against blockchain decentralization principles. [49]

A CryptoCommodity is different animal to fiat backed stablecoins. A Cryptocommodity is bound to the intrinsic value of the underlying asset. There is not need of quantification of this intrinsic value. Instead, a Cryptocommodity exposes the asset intrinsic value (whichever its quantity) to form its price according to the marginal utility of the underlaying market as perceived by the consumer. The price formation is, therefore, internal to the CryptoCommodity ecosystem. As a consequence, a Cryptocommodity is decoupled from any external monetary system, fiat or not fiat, creating an autonomous ecosystem. A CryptoCommodity delivers the foundation for a true value decentralization.

### 2.5. Collateral

No stablecoin had been invented that is both hard pegged to a stable physical asset with intrinsic utility and fully decentralized. In this context, “hard pegged” means that each token issued is directly exchangeable for a specified quantity of a physical asset [57]. Murialdo and Belof presented E-Stablecoin, a cryptocurrency that is both fully decentralized and fully collateralized by a physical asset with stable value and intrinsic utility (electricity) [57].

CryptoCommodity follows a similar approach. In CryptoCommodity Framework, the underlying asset is a asset proxied by an utility. The collateral is the utility, which means typically a service. At the heart of any stablecoin is its balance sheet which must be balanced.

<div style={{textAlign: 'center'}}>
	<img src="/img/cryptocommodity_balance_sheet.svg" width="40%"></img>
</div>

The balance sheet of the CryptoCommodity issuer woudl probably be audited and publicly disclosed, including any signed contracts or agreements with providers. The CryptoCommodity does not need to be collateralized at 100%. Instead, it can be collateralized at a ratio and leave market forces and reputation adjusting the price of the CryptoCommodity units.

A CryptoCommodity system is naturally collateralized by the asset service in the underlying market. At any moment, the issuer can redeem the holder as a regular consumer of the underlying asset utility. According to IMF: 

> a viable commodity standard does not require the redemption of money for the specific commodities defining the ultimate unit of account. This greatly simplifies and reduces the cost of operating such a system.".

In order to assess compliance requirements, the redeemability features must be considered. According to IMF:

> Stablecoins denominated in a monetary unit of account and offering redemption into cash on demand—that will likely be used for payments—should be fully backed in perfectly safe and liquid
assets. [46]

This is not the case for CryptoCommodities as they are redeemable by the proxied utility, not by cash.

>  Stablecoins offering redeemability within an elapsed time may be backed with safe but less liquid assets [46]

Depends on the kind of asset service, collateral could be just a provision guarantee with a service provider.

### 2.6. Redeemability

The issuer must proof the ability of delivering the compromissed utility for the covered collaterization ratio. This must be in a contract





<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>



## 3. CryptoCommodity as Quality Money
---

In this section we will discuss the requirements that enable CryptoCommodity to fulfill its main functions, namely to serve as a medium of exchange, as a store of wealth, and unit of  account. That is to increase its demand.

### 3.1. CryptoCommodity Functions

CryptoCommodities capture the underlying asset economic value to create a <b>medium of exchange</b>. CryptoCommodities is optimized as a medium of exchange. Additional functions of money can be delivered but they are not the main goal of the token.

CryptoCommodities <b>purchasing power</b> is borrowed from the marginal utility of the underlying asset. They can be used as medium of exchange for the underlying asset or for any other asset in a relation of the price of this other asset and the marginal utility captured from the underlyting asset.

As a Medium of Exchange, CryptoCommodities are designed to be part of a suitable <b>price system</b> which enables economic activity. [...]

By capturing intrinsic value, CryptoCommodities have the potential to become a <b>store of value</b>. The degree of trust would be proportional to the collateral held by the issuer.

Additionally, a CryptoCommodity can be used as a <b>unit of account</b> for the underlying asset.

CryptoCommodities do not aim to be become a <b>monetary standard</b>. Instead CryptoCommodities are born with the vocation to participate in private currency competition. As a consequence, they can be priced in any coexisting monetary standard, no matter if this is a legal tender or a social agreement. Their mission is to represent the value of the underlaying asset and ignore any aspect external to the underlying asset.

### 3.2. The ideal underlying asset

To be eligible as underlaying asset within the CryptoCommodities framework, the asset must be fungible. It can be of any nature, physical, natural, digital and there must some kind of service provided for the asset, as purchase or rent. 

<div style={{overflowX : 'auto'}}>
	<table>
		<tbody>
			<tr>
				<td rowSpan={3}>Product</td>
				<td>Natural Resources</td>
				<td></td>
			</tr>
			<tr>
				<td>Physical Assets</td>
				<td></td>
			</tr>
			<tr>
				<td>Digital Assets</td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>
<br/>

Despite a value capture mechanism can be applied to any other assets than commodities, some requirements made commodities specially suitable.

Additionally, the price is formed in the basis of a service. Some services that are suitable include:

<div style={{overflowX : 'auto'}}>
	<table>
		<tbody>
			<tr>
				<td rowSpan={2}>Service</td>
				<td>Acquisition</td>
				<td></td>
			</tr>
			<tr>
				<td>Rent</td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>
<br/>

### 3.3. CryptoCommodity vs Stablecoin

The only Token Model that has the purpose to become a currency today is the Stablecoin. Find below differences between CryptoCommodity and Stablecoin.

|                                 | Stablecoin                                        | CryptoCommodity                                                               |
| :-------------------------------| :-------------------------------------------------| :-----------------------------------------------------------------------------|
| Backed by                       | Physical, digital, financial asset                | Underlying market of fungible physical or digital asset                       |
| Collateralized by               | Multiple                                          | Underlying market of fungible physical or digital asset                       |
| Collateral Size                 | 100% by law                                       | Configurable by issuer                                                        |
| Price Formation                 | Pegged to Fiat Price of asset in external market  | Pegged to economic value of asset in underlying market. Decoupled from fiat   |
| Scope                           | Mostly Global														          | Local or Global                                                               |
| Value Decentralized?            | No, pegged to fiat prices with Oracles				    | Yes, forms its own price                                                      |
| Process Decentralized?          | No, manual stabilization					                | Yes, built-in automated stabilization                                         |
| Decisions Decentralized?        | No, opaque decisions  			   		                | Yes, releasing to the community when possible                                 |
| Disclosures  										| No                                                | Yes, full disclosure                                                          |
| Allows project funding?         | No                                                | Yes                                                                           |
| Collateral on inception needed? | Yes                                               | No                                                                            |
| Provides credit? 				        | Yes, with social risk                             | Yes, with private risk                                                        |


<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>


## 4. CryptoCommodity Ecosystem

CryptoCommodity is built on a fungible asset that can be extracted, manufactured and/or transformed, commercialized and/or serviced. A CryptoCommodity has a built-in stabilization mechamism, in coordination with the exchange, to capture the value of the asset from the upderlying  market. As a consequence, a CryptoCommodity includes a price formation within its ecosystem. 

<div style={{textAlign: 'center'}}>
	<img src="/img/ecosystem_before.svg" width="80%"></img>
</div>
<br/>

The value extracted from the undelying asset by the CryptoCommodity issuer will be delivered to the society in the form of DeFi Services.

### 4.1. CryptoCommodity Scope

CryptoCommodities are designed to be applied in both, local or international scopes, as long as there is enough supply in the scope of application. CryptoCommodities promote an atmosphere of investment and entrepreneurship to empower citizens to solve their own problems.


<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>






## 5. The CryptoCommodity Value Chain
---

In this section we will review what is the lifecycle of a CryptoCommodity and how can interact with the different actors of the society. We also discuss how it can benefit each party.

### 5.1. CryptoCommodity Lifecycle

A CryptoCommodity takes economic value from nature and delivers to the adopting society. A CryptoCommodity builds a well-oiled ecosystem where a network of participants fulfills their objectives and meets specific needs to ensure seamless operations. All the particicipants are coordinated within the CryptoCommodity ecosystem and it must be designed as a sustainable system.

<div style={{textAlign: 'center'}}>
	<img src="/img/token_value_chain2.svg" width="100%"></img>
</div>

All the requirements described must be particularized for each stage of the CryptoCommodity Value Chain. for example, the compliance in the funding stage is not the same as the compiance in the distribution stage. In this section we will explore every funding stage and discuss requirements and opportunities.


### 5.2. Supply Profile

Supply Management is a critical aspect in the CryptoCommodity lifecycle as it is part of the setting required to deliver its features. There are several stages involved in the lifecycle of a CryptoCommodity.

* <b>Funding Rounds</b>. The process starts with an optional funding period. This period is dedicated to create one or multiple funding rounds by the issuing team and raise funds from investors to fund the project. This is an optional step.


* <b>Token Generation Event</b>. Once fuding rounds are finished, the Token Generation Event (TGE) happens. In this one time ocurring event, the initial supply is first added to the CryptoCommodity with the initial allocations as described later. The TGE timing is defined by the CryptoCurrency issuer in the schedule and roadmap.


* <b>Value Capture</b>. After the TGE, the project activities will push up the price of the token whereas it captures the value of the underlying asset. During this stage, the more benefitial profile for the token is this of a gold standard because it will allow a quick growth of the value for investors,


* <b>Value Capture Event</b>. When the demand of the asset utility on the underlying market matches the supply, it is considered that the value has been captured. This is called Value Capture Event (VCE). The VCE is a equilibrium point, and therefore, its timing can be estimated, can also be advanced or delayed by tuning the demand but cannot be precised beforehand.


* <b>Value Delivery</b>. After the Value Capture Event. the stabilization mechanism guarantees that the value of the underlying asset is maintained. This is the permanent regime where the token is focused in value delivery. During this period the DeFi Services take place.

<LineSupplyProfileChart/>
<br/>

A CryptoCommodity borrows the features of both a Utility Token, before the Value Capture, and a Stablecoin on Tokens Release. This means that tokenomics for a CryptoCommodity must merge and align best practices from both token models.

### 5.3. CryptoCommodity Accounts

In order to design every stage of the value chain, the issuer assigns a portion of token units to every stage stakeholders. Allocation is an allotment of tokens or equity, that may be earned, purchased, or set aside for a certain investor, team, group, organization, or other related entity. The way tokens are allocated must align with the project's long-term goals.

There is a lack of an established framework or widely accepted industry standard for designing tokenomics. There isn't a unified language or consistent definition for token allocations. What one project names "Liquidity Mining Programs" can also be labeled by others "Community Incentives," "Farming Rewards," or "Ecosystem Pool." Some combine teams, partners, and advisors into one "Core Contributors" category, while others separate these groups into distinct categories. There is also a great degree of flexibility in token allocation amounts. The figures are typically determined by what would be considered acceptable based on benchmarks for non-investor token allocation and by bilateral negotiations between the team and the investors. A great token allocation will not ensure a project’s success, a poor one will ensure its failure.

We propose below a classification of allocation concepts grouped by stage in the value chain.

<DoughnutTokenAllocationConceptsChart/>
<br/>

Token allocations will be different to actual Supply Distribution. 

A convenient way is to prevent overconcentration of tokens in a specific account, or group of accounts, as they would have the power to determine the price of the token and this would imply a reputational cost for the issuer.


### 5.4. Total Supply Composition

The Total Supply for a CryptoCommodity is the number of tokens units existing in a certain moment.

The composition of Total Supply would depend on the stage in which the CryptoCommodity is operating:

During the <b>Value Capture Stage</b>, between the TGE and the VCE, the Total Supply is fixed. Holders are initially the VCs that invested in the Funding Rounds. During this period, if the project raise expectations, the number of tokens on hands on holders wil grow, as the demand also grows and, conversely, the number of tokens in the exchanges should shink. When physical demand matches CryptoCommodity units held in the exchanges, the VCE is fired and the CryptoCommodity has captured the value of the underlying asset.

The VCE triggers the stabilization mechanism which guarantees token units in the exchanges matching real demand, in order to maintain the captured underlying value. This is the <b>Value Delivery Stage</b>. As the demand increases, the number of CryptoCommodity units in the exchanges should also increase to keep the captured value. At this point, the CryptoCommodity delivers the 3 functions of money and there are holders that store token units to keep their funds and other to trade the underlting market. On VCE also the DeFi Services initiates.

<LineSupplyCompositionChart/>
<br/>

Once all the issuer customers trade the underlying asset by means of the CryptoCommodity, starts the <b>Value Leverage Stage</b>. During this period, the captured value is maintained by the CryptoCommodity units in the exchanges. More holders use the CryptoCommodity as unit of account and additional DeFi Services are delivered.

### 5.5. Creating Benchmarks

This exercise needs to be done upfront, before the platform is even launched and when uncertainty is at its maximum.







<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>

## 6. Pre-minted Stage
---

In this chapter will be described how to launch a CryptoCommodity and what token units will be preminted to cover the initial necessities. In the next 3 chapters, what are these necessities and how the allocated tokens are used will be covered.

### 6.1. Scope

Pre-minted Stage is the period that covers from project inception to the VCE where the token value is captured. This period includes carrying out fundraising and project aactivities as well as deploying the token into the exchanges to allow price capture.



### 6.2. Initial Token Allocation

 With the purpose of launching the project, a number of tokens are preminted and allocated to key stakeholders. Initial allocation decides how many tokens (as a percentage) will be allocated to the key stakeholders and accounts that will be involved in the project launch. 
 
 The initial token allocation is a way to motivate contributors to join a project. Hence, it has to be sufficient enough to satisfy their expectations and necessities to collaborate into the project success. But, on the other hand, has to be small enough to prevent discouraging new stakeholders joining the project. Additionally, as any token allocation, it must avoid generatuion of whales, that is, accounts with a number of token units that allows them interfering into the token price by altering the supply. In such a way, this Initial Token Allocation is optional, which means, launching a project with no preminted tokens is a valid choice.

The allocation of tokens is usually determined by the project's tokenomics or whitepaper, which outlines how the tokens will be distributed and what percentage of the total supply will be allocated to each group.
<br/>

<DoughnutInitialTokenAllocationChart/>
<br/>

A CryptoCommodity can premint and allocate tokens to the following stakeholder groups:

- Project, which is the allocation for project expenses,

- Funding, which includes all investors that will contribute to launch the project, and

- Exchanges, which refers to the seed token units required to create initial liquidity pols in the exchanges where the CryptoCommodity is going to be traded

We will discuss these concepts in more detail in the next sections.

### 6.3. Genesis Distribution


#### 6.3.1. Premined Distribution

Premining is the process of generating and distributing a certain number of tokens before the cryptocurrency is launched to the public and their allocation to specified coin addresses. This process is typically done by the developers or founders of the CryptoCommodity. The premined coins are often distributed in various ways, such as:

- funding the project in a initial coin offering (ICO)

- providing funds to the project to cover operation costs as team salaries, 

- separating funds to deploy the token on the exchanges or feed a reserves account

- marketing activities as airdrops or giveaways

The way premine works are typical; the team will mint out a certain % of the tokens in advance and often distribute it to specific accounts. This can be controversial, as the developers will have a large percentage of the coin’s total supply, giving them a significant degree of control over its price and direction. The way to prevent this happening is to lock or vest the premined tokens that does not need to be used at the short term. So there is a balance between reputation and premining tokens at launch.

#### 6.3.2. Vesting Schedules

The purpose of including vesting schedules it to mitigate sell pressure on premined tokens causing a unexpected price decrease.

This is acheived by locking tokens, either in a custom locker or a external service, duiring a period.

The release can be different way, including linear...

<LineParametrizationVestingChart/>
<br/>

Some recommendations to lockup and vesting periods follows.

The lockups for the "Core Team" should be large enough to prove that they are interested and motivated to play the long-term game. The most common vesting duration for the Core Team is 4 years with 1-year cliff.

For Investors typically see a shorter lockup period on tokens than team vesting periods because they benefit from earlier liquidity and the optionality of selling. There are also token-oriented investors whose strategy is to sell the tokens as soon as they launch/unlock.

With the purpose of preventing overflow in the exchanges of tokens purchased during the funding rounds on the TGE, a CryptoCommodity has the potential to run vesting schedules on the purchased tokens. With or without vesting, there will be a Release Schedule. Whereas more knowledge needs to be acquired about the best practices on vesting, the funcionality is provided by the CryptoCommodity Framework.

- Reserve. It's important to consider all the unforeseeable obstacles and opportunities that may arise in the future.

- Marketing incentives. Typically, there are no lockups, or they are only partly locked with a 1-12 months overall lockup period.

<table>
	<tbody>
		<tr>
			<th></th>
			<th>CLIFF</th>
			<th>INITIAL</th>
			<th>TOTAL</th>
			<th>STEPS</th>
		</tr>
		<tr>
			<td>Project Allocation</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Seed Funding Allocation</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Private Funding Allocation</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Public Funding Allocation</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Exchanges Allocation</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>
<br/>

### 6.4. Fair Launch

A fair launch refers to an equal distribution of a cryptocurrency token at launch. This means everyone will have an equal opportunity to acquire tokens from the beginning, preventing insider trading and price manipulation. The issuing team should ensure that the distribution of the new cryptocurrency is fair and equitable and avoid pre-mining or pre-allocating tokens to themselves or a select group of individuals.

A CryptoCommodity can be launched in Fair Launch but the issuing team will lose the capability to get funded. There can be another benefits. Fair Launch configuration must be included in the benchmarks to evalute best practices.




<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>





## 7. Project Activities
---


### 7.1. Project Allocation

ICO offerings limit the flexibility of the issuer to raise further rounds of financing via follow-on offerings of tokens or of traditional equity financing. Entrepreneurs need to predetermine and reserve a portion of the tokens issued for the purposes of further financing rounds [45]. 

The CryptoCommodity Framework allows allocating a portion of the supply for the Project Stakeholders in order to carry on with Project Activities.

<DoughnutProjectAllocationChart/>
<br/>

#### 7.1.1. Stakeholders Allocation

The token section assigns tokens to specific accounts that contribute to project evolution. It includes the group of people who has the most ownership and is responsible for driving business or building products forward. This is reserved to founder, core team, advisors, contributors, employees, foundations.

The typical number varies between 5% and 20% depending on the project valuation, team strength, number of active team members (most importantly founders), and progress so far [53]. Recent benchmarks show that the percentage allocation for the Founder/Team category has increased steadily from 18% in 2017 to 27% in 2023. This increase shows that more projects are aligning vested interests with long-term project success, reflecting the team's equity ownership in the company issuing the token. [51, 52]

#### 7.1.2. Processes Allocation

The token section assigns tokens to specific tasks that contribute to project evolution. This can include:

- research and development

- legal and regulatory

#### 7.1.3. Ecosystem Incentives

- marketing and promotion

There are several ongoing distribution schemes that can be applied in different stages of a CryptoCommodity:

- Airdrops. The main purpose of airdrops is to kick-start the creation of a community of token-holders before or together with the ICO, or to boost the network effects of already created networks. Airdrops are used for marketing purposes; to raise awareness of a new token; drive more participants to the issuance; but also reward existing participants/token-holders for their loyalty, their active engagement in the network or for bulk purchases. [45]

- Giveaway. A crypto giveaway is a promotional event in the cryptocurrency space where individuals or organizations distribute cryptocurrency tokens or coins for free to participants. Typically, these giveaways are used to promote a particular cryptocurrency project, exchange, or to increase brand awareness.

### 7.2. Vesting schedules

Vesting schedules serve as mechanisms to align the incentives of all involved stakeholders, thereby guaranteeing the effective delivery of projects by the team, ensuring VCs attain the milestones projected by the project team, and motivating the community to actively participate in the network. These schedules also help in mitigating the risk associated with token dumping and fostering a long-term commitment from all parties. By releasing tokens over a period of time, they ensure that all of the parties remain invested in the project's success over the long term. [51]

### 7.3. Issuance Compliance
Despite they do not have a fiat collateral, CryptoCommodities will be possibly considered as stablecoins for regulatory bodies. The FSB’s 2020 report, “Regulation, Supervision and Oversight of ‘Global Stablecoin’ Arrangements” described three characteristics that distinguish a Global Stablecoin from other crypto-assets and other stablecoins. Those characteristics include: (i) the existence of a stabilisation mechanism, (ii) the usability as a means of payment and/or store of value, and (iii) the potential reach and adoption across multiple jurisdictions. The first two characteristics (the existence of a stabilisation mechanism and usability as a means of payment and/or store of value), and the unique risks that these characteristics pose, distinguish stablecoins from other crypto-assets. The third, the potential reach and adoption across multiple jurisdictions, differentiates Global Stablecoin from other stablecoins. [43]

Recommendations for Prudential and Conduct Regulation of the Crypto Ecosystem: Stablecoins [46]

Financial Stability
Consumer and Investor Protection
Operational and Cyber-Resiliency
Financial Integrity
Embracing the Potential of Stablecoins While Managing Risks
Compliance mut be reviewed according to the juridiction where the CryptoCommodity will be deployed.

On the other hand, a CryptoCommodity is not referenced to fiat and does not increase regulatory risk.

#### 7.3.1. Collateral
The goal of collateral is allow the holder to redeem its currency by the underlying asset on demand.

Increasingly, goverments are requiring to stablecoins a full collateralization of the issued supply. For fiat stablecoins this implies, storing a number of assets equivalent to the total supply. This is mainly required to prevent expansion on fiat supply with desvirtuates regulatory policies. CryptoCommodities do not increase fiat supply so they should have a diffeernt consideration for collateral.

### 7.4. Recommendations

Project allocation is created on the Token Generation Event but only fraction is released. The most of the allocation is locked to guarantee compromise with the project by stakeholders.

Is probably up to the issuer the selection of the distribution mechanims that he wants to provide but we should acomplish a full database of use cases and recommendations.

<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>

## 8. Fundraising Activities
---

CryptoCommodity Framework provides to the issuer the infrastructure to fund his project. Any person can propose a real world project backed by fungible assets, design a token and launch a funding campaign to fund the project. The mechanism created for CryptoCommodities to fund the project is called a Initial Token Offering (ICO) as an analogy to IPO.

#### 8.1. Funding Allocation

The purpose of Funding Allocation is to provide funds to the funding rounds lopanned in the projecvt roadmap. A fair launch, without any funding allocation is welcome by the token investors. This can include:

- private rounds

- pre-sales

- public sales

<DoughnutFundingAllocationChart/>
<br/>

### 8.2. Structuring Token Sales

Structuring of ICO offerings varies across projects in regards to the number of tokens issued; the proportion maintained as compared to the one distributed to investors; the allocation mechanisms; the future supply of tokens; and the sale model used. The schedule of token issuance, if tokens are not issued in a single issuance, needs to be clarified by the issuer upfront. 
[45]

Essentially there are 3 types of funding rounds:

- private sale. Private Sale are similar to traditional sale since they are typically not run on a blockchain. In this model, a significant portion of tokens are sold to venture capital firms at a discount at an early stage. The destination of these tokens can be to prepare next token sales in the funding process.

- presale. ICO Presale is the token sale event unleashed before the official ICO or crowd sale goes live. Notably, the ICO Presale fund-raising targets are significantly lower when compared to what is set for the main initial coin offering (ICO).

- crowdsale. Tokens are sold to the general public, often following a well-advertised launch event. This model aims to distribute tokens as widely as possible.

Most ICO offerings are capped, placing a ceiling on the amount they wish to raise which is in turn translated into a cap in the number of tokens that will be issued. Uncapped ICOs
run the risk of token "inflation", with the value of existing tokens being eroded with every new token issuance. This effect is similar to the dilution to which equity-holders are subjected to. [45]

Token issuers must guarantee that no investors take a large portion of the tokens since they could become whales and manipulate the price of the token once this is traded in the exchanges.

The funding process ends with the Token Generation Event (TGE) which deploys the tokens to the exchanges ready to be traded and provides the purchased tokens to the funding round investors.

CryptoCommodity Framework provides support for above configurations. Proper know how must be completed with benchmarks.

### 8.3. Choosing Funding Platform

The current ICO model means that legitimate projects need to overcome significant financial, administrative and regulatory challenges in order to see a successful outcome, requires a deep understanding of blockchain technology, cryptocurrencies, application security, smart contract implementation, token standards, Solidity programming, etc. Additionally, the issuying team needs to assemble a multidisciplinary team, create and host a website, purchase, claim and vesting widgets, write a whitepaper, a litepaper and some pitch decks, design a roadmap, plan a tokenomics, token distribution and allocations, hire good developers to write some smart contracts and pass code audits, build and maintain a community, publish in press, perform AMAs, hire influencers and maintain an investors agenda, get expert advisers, manipulate pools, deploy to exchanges, and perform manual vesting tasks, comply with all national and local regulations, and the list goes on and on. Some service providers offer some of the requirements out of the box, as ICO scripts, marketing tasks.

In 2018, the Initial Exchange Offering (IEO) appeared. This is a new way to run an ICO, the cryptocurrency centralized exchange is directly involved in the selection of projects, organization and sale of tokens. The exchange also becomes key marketing partner of the project, and the listing of coins is carried out only a couple of days after the campaign ends. There are several advantages of the IEO over ICO: ready-made base of potential IEO participants, risk of scams for investors is lower. The project is launched at the exchange after profound verification, Listing of new tokens is faster, investor returns are higher, the investment process is simple, main advantage of this approach for organizers is the ready-made base of potential IEO participants from a huge number of exchange users, so the marketing costs for the project team are reduced. The drawbacks of IEOs – gatekeeping, opaque vetting processes and listing fees.

An IDO is another evolution of the fundraising model, where a project launches its tokens on a decentralized exchange (DEX) instead of a centralized exchange like in an IEO. IDOs offer several advantages, such as faster fundraising, lower fees, and a more decentralized process. Investors participate in IDOs by providing liquidity to the token's trading pool on the DEX, typically in the form of a token pair (e.g., the project's token and a stablecoin). The tokens can then be traded on the DEX, allowing for immediate liquidity and price discovery. 

Alternative generalistic models have been proposed as DAICO, ILO, SHO, IFO, ISPO, FTO, LBP and specific as ETO, IGO, STO, INO.

Existing IDO portals are generalistic and do not play well with real worl projects. CryptoCommodity Framework provides a foundation to build ICO tools which match launching of real world projects. A bespoken launchpad specialized in CryptoCommodity projects is build-in in dAppmin.



### 8.4. Calculating Investors Profit

The investor profit typically will be bonus between the price at the funding round and the price at VCE. If the project is successful this is a guaranteed amount. Beyond the VCE investing does not apply because the stabilization mechanism is triggered and, therefore, not the price can be quite stable. Please visit 8.6.9.

### 8.5. Estimating Investors Exit

Investors in Funding Rounds will get the max profit for his investment on the Value Capture Event. The Value Capture Event is defined when the price of the CryptoCommodity matches the value of the underlying asset. This can be verified when the number of CryptoCommodity units in the exchanges matches the demand.

To track this variable, CryptoCommodity keeps a record of the address of all exchanges where it is deployed and traded. It is required to provide tools that allow estimating this exit according to the CryptoCommodity configuration.

Estimating Investor Exit requires considerations about Supply, Vesting Schedules and demand sources. Please refer to section 8.6. to learn more.

### 8.6. Considerations for Funding

Democratization of funding with local or global investors. A instrumentalization of FFF funding.

On launching a CryptoCommodity, the monetary policy will follow an Utility Token pattern so not a collateral will be initially required by law. This makes launching a currency friendly for any citizen which has a real world project.

Special attention must be paid to compliance.



<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>




## 9. Value Capture Stage
---

Before a CryptoCommodity can be transfer the value of underlying asset to the society, this value must be captured. In order to capture the value, a CryptoCommodity behaves as a Utility Token and has features of a Utility Token.

### 9.1. Scope of Value Capture Stage

<LineStageValueCaptureChart/>
<br/>

### 9.2. Deploying to Exchanges

#### 9.2.1. P2P Exchanges


#### 9.2.2. Centralized Order Book (CEX)

Centralized exchanges (CEXs) are cryptocurrency exchanges that monitor and facilitate crypto asset trading between users with the help of a centralized intermediary. Like traditional electronic stock exchanges, CEXs use an order book system to display and match buy and sell orders from users.

When you place a buy order on a CEX to buy a crypto token, the CEX order matching engine searches for a sell order that’s placed at the same price as your buying price. Once there’s a match, the CEX executes your trade and funds your account with the token you wanted.

#### 9.2.3. Automated Market Maker (DEX)

Decentralized exchanges (DEXs) are crypto exchanges where users can swap one crypto token for another in a decentralized and non-custodial manner without centralized intermediaries. DEXs are also permissionless, meaning anyone can use a DEX without revealing their private information.

Instead of relying on a central company to operate, decentralized exchanges use self-executing, autonomous smart contracts to process token swap requests. 

Initially, DEXs used on-chain order books, but this required every node of a blockchain to record a trade order before the order could get completed. As one might guess, this made the process unbearably slow. The solution: automated market maker (AMM) decentralized exchanges. They use pre-funded pools of crypto assets called liquidity pools that usually hold token pairs in a 50/50 ratio. 

#### 9.2.4. Liquidity Pools

A crypto trading pair is a combination of two cryptocurrencies that can be traded against each other on a cryptocurrency exchange. Crypto trading pairs enable people to swap one crypto for another and pay a single transaction fee. The base currency is always the first cryptocurrency in a crypto trading pair. The base currency is the base to which the other currency is compared. The second part is the quote currency. It is the price of the base currency quoted using the quote currency. The pairs work together to tell you how much of the quote currency is needed to equal 1 whole unit of the base currency.

<div style={{textAlign: 'center'}}>
	<img src="/img/price_determination2.svg" width="70%"></img>
</div>
<br/>


#### 9.2.5. Trading Pair Operation

A exchange Pair is an smart contract which holds some amount of 2 tokens and basically allows 3 operations: addLiquidity, removeLiquidity and swap.

The **addLiquidity** operation is run by the Exchange Pair owner and requires that the owner transfers to the Exchange Pair contract both, an amount X of TokenA and an amount Y of TokenB in an atomic transaction. The Exchange Pair becomes a holder of TokenA and TokenB. On the Exchange Pair contract side, it will allocate shares to the owner proportionally to the relationship between X and Y. 

The **removeLiquidty** operation is run by the Exchange Pair owner and reverses the addLiquidity operaton. In this operation the Exchange Pair contract transfers back to the owner tokens in proportion to the created shares.

Finally, in the **swap** operation, a wallet sends an amount X of TokenA tokens to the Exchange Pair contract and the Exchange Pair contract replies trasferring an amount Y of TokenB to the wallet according to a pricing model.

General rules of AMM-based DEX: The price of assets in an AMM pool stays constant for pure liquidity provision and withdrawal activities. The invariant of an AMM pool stays constant for pure swapping activities

#### 9.2.6. Negotiation Allocation

Negotiation Allocation if focused mainly in assigning funds to the pools of the exchanges where the token will be traded. In this portion will be inlcuded:

- initial and future exchange pools

- reserve tokens for the stabilization mechanism

<DoughnutNegotiationAllocationChart/>
<br/>

The criteria for selecting the pairs should be friendliness to the user base.

The currency pairs created are a combination of 3 variables:

- the number of networks in which the CryptoCommodity will be deployed

- the number of exchanges that will be covered

- the number of trading pairs that will be created

### 9.3. Exchange Rates

#### 9.3.1. Spot Price

A spot exchange rate is the current price at which a person can exchange one currency for another at a specific time. Put simply, a spot exchange rate refers to the cost of the currency exchanged instantly and without delay. 

The spot exchange rate is best thought of as how much you need to pay in one currency to buy another at any moment in time. The Spot Price (SP) in an AMM is calculated by dividing the amount of token 1 in the pool by the amount of token 2.

<div style={{textAlign: 'center'}}>
	<!-- SpotPrice^{(1)} = \frac{X}{Y} -->
	<img src="/img/equations/SpotPrice.svg"></img>
</div>
<br/>

However, the spot price only holds for infinitesimal trades.

#### 9.3.2. Spot Price Evolution

In private equity, the J-curve refers to a portfolio’s cash flows, while in economics it is commonly used to describe the effects of currency devaluation on the national deficit. In crypto, a new J-curve is born.

The basic idea of a crypto J-curve stems from how the market values a cryptoasset over time.

<div style={{textAlign: 'center'}}>
	<img src="https://www.bee.com/wp-content/uploads/2024/06/frc-9b0f9c742ebf83451ff1d593ffcf0494.jpg" width="50%"></img>
</div>
<br/>

The main players are snipers with technical advantages, insiders/pre-sellers with unfair advantages, and speculators who focus on quantity over fundamentals. This is where the average trader loses out in most cases, and when speculators move on to the new shiny thing, it can go down just as fast as it went up.

Enthusiasm fades, speculators exit, volume shrinks, average uPNL for holders is below profit, Indians raid TG with marketing suggestions, Kols scammers slowly fade out of TL. This is the most important stage because it brings the greatest opportunities.

The product has achieved initial success. For practicality, the actual use of the technology has generated real income, and for meme, the admirers are huge, KOLs promote it widely, etc. This is where you sell because the risk is high, profits should be secured and the focus should be on the second stage of the J curve.

#### 9.3.3. Effective Price

As we discussed, the spot price is only suitable for infinitesimal trades and only applies for specific amount of the traded goods. For a more generic relationship on trading goods covering a broader range of amount we have to introduce a more dynamic concept of price. 

##### 9.3.3.1. Utility Functions

In consumer theory, Utility represents the satisfaction or pleasure that consumers receive for consuming a good or service. A utility function is a representation to define individual preferences for goods or services beyond the explicit monetary value of those goods or services. A utility function assigns numerical values ("utilities") to outcomes, in such a way that outcomes with higher utilities are absolutely always preferred to outcomes with lower utilities.

Some example of utility Functions are shown below:

<div style={{overflowX : 'auto'}}>
	<table>
		<tbody>
			<tr>
				<th style={{textAlign: 'center'}}>Symbol</th>
				<th style={{textAlign: 'center'}}>Trading Function</th>
			</tr>
			<tr>
				<td>Cobb-Douglas</td>
				<td>U = x^a * y^b</td>
			</tr>
			<tr>
				<td>Perfect complements</td>
				<td>U = min ( ax, by )</td>
			</tr>
			<tr>
				<td>Perfect substitutes</td>
				<td>U = ax + by</td>
			</tr>
			<tr>
				<td>Quasi-linear</td>
				<td>U = ax + f(y)</td>
			</tr>
		</tbody>
	</table>
</div>


##### 9.3.3.2. Indifference Curves

An **indifference curve** is a level curve of a utility function. An Indifference curve connects points on a graph representing different quantities of two goods, points between which a consumer is indifferent. **One can also refer to each point on the indifference curve as rendering the same level of utility (satisfaction) for the consumer**.

<div style={{textAlign: 'center'}}>
	<img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Simple-indifference-curves.svg" width="30%"></img>
</div>
<br/>

There are infinitely many indifference curves or invariants: one passes through each combination. A collection of (selected) indifference curves, illustrated graphically, is referred to as an indifference map.

##### 9.3.3.3. Trade Function

If we apply the idea of Utility Functions and Indifference Curves to Automatic Market Makers, we can have different AMMs depending on the **Trade Function**. A trade function or invariant equation is a set of rules which determine how liquidity takers (LTs) and liquidity providers (LPs) interact, and how markets are cleared.

<div style={{textAlign: 'center'}}>
	<img src="https://cdn.prod.website-files.com/64b702e0e92a993f08b979ce/67044973ce60f38d6c56821b_66705d0856320aff65c862f8_AMM%2520pricing%2520chart.png" width="50%"></img>
</div>
<br/>

##### 9.3.3.4. Effective Price

The marginal rate of substitution (MRS) is the quantity of one good that a consumer can forego for additional units of another good at the same utility level. The marginal rate of substitution is represented as a slope on the indifference curve, and each point along the curve shows the number of units of each good that would be substitutable for another.

In the context of AMMs, this MRS is the Effective Price (EP) of a trade is the amount of token received over the amount given away.

<div style={{textAlign: 'center'}}>
	<!-- Effective Price^{(2)} = - \frac{dX}{dY} -->
	<img src="/img/equations/EffectivePrice.svg"></img>
</div>
<br/>

#### 9.3.4. Constant Function Market Makers (CFMMs)

CFMMs are the first class of AMMs designed by the crypto community to construct decentralized exchanges for digital assets. Traders who want to exchange tokens of type A for tokens of another type B, add A tokens to the inventory and in return obtain an amount of B tokens from the inventory so that the invariant is maintained. The trading function is deterministic and known to all market participants.

A list of 2-asset Trade Functions used to build AMMs is provided below. All invariant equations for Trade Functions can be generalized to n assets for multiasset liquidity pools.

<!-- https://latexeditor.lagrida.com/ -->
<!-- https://viereck.ch/latex-to-svg/ -->
<div style={{overflowX : 'auto'}}>
	<table>
		<tbody>
			<tr>
				<th style={{textAlign: 'center'}}>Symbol</th>
				<th style={{textAlign: 'center'}}>Trading Function</th>
				<th style={{textAlign: 'center'}}>Invariant</th>
				<th style={{textAlign: 'center'}}>Spot Price<sup>(1)</sup></th>
				<th style={{textAlign: 'center'}}>Effective Price<sup>(2)</sup></th>
			</tr>
			<tr>
				<td>CSMM</td>
				<td>Constant Sum</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- x+y=k -->
						<img src="/img/equations/CSMM_supply.svg"></img>
					</div>
				</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- \frac{x}{k-x} -->
						<img src="/img/equations/CSMM_spot.svg"></img>
					</div>
				</td>
				<td></td>
			</tr>
			<tr>
				<td>CPMM</td>
				<td>Constant Product</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- \Delta y = \frac{\Delta x*y}{x+\Delta x} -->
						<img src="/img/equations/CPMM_supply.svg"></img>
					</div>
				</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- \frac{x^{2}}{k} -->
						<img src="/img/equations/CPMM_spot.svg"></img>
					</div>
				</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- \frac{x}{y-\Delta y} -->
						<img src="/img/equations/CPMM_effective.svg"></img>
					</div>
				</td>
			</tr>
			<tr>
				<td>CMMM</td>
				<td>Constant Mean</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- (x*y)^{1/2}=k -->
						<img src="/img/equations/CMMM_supply.svg"></img>
					</div>
				</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- \frac{x^{2}}{k^{2}} -->
						<img src="/img/equations/CMMM_spot.svg"></img>
					</div>
				</td>
				<td></td>
			</tr>
			<tr>
				<td>CPSMM</td>
				<td>Constant Power Sum</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- x^{1-\alpha}+y^{1-\alpha}=k -->
						<img src="/img/equations/CPSMM_supply.svg"></img>
					</div>
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>CPRMM</td>
				<td>Constant Power Root</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- v -->
						<img src="/img/equations/CPRMM_supply.svg"></img>
					</div>
				</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- x^{\alpha-1}y^{1-\alpha} -->
						<img src="/img/equations/CPRMM_spot.svg"></img>
					</div>
				</td>
				<!-- https://arxiv.org/pdf/2205.07452 -->
				<td></td>
			</tr>
			<tr>
				<td>G3M</td>
				<td>Constant Power Mean</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- (\frac{x^{2}+y^{2}}{2})^{\frac{1}{2}}=k -->
						<img src="/img/equations/G3M_supply.svg"></img>
					</div>
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>CEMM</td>
				<td>Constant Ellipse</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- (x-a)^{2}+(y-a)^{2}+bxy=k -->
						<img src="/img/equations/CEMM_supply.svg"></img>
					</div>
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>HCFAMM</td>
				<td>Hybrid Constant Function</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- \alpha(x+y)+\beta(x*y)=k -->
						<img src="/img/equations/HCFAMM_supply.svg"></img>
					</div>
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>CWP</td>
				<td>Constant Weighted Product</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- x^{\alpha}*y=k -->
						<img src="/img/equations/CWP_supply.svg"></img>
					</div>
				</td>
				<td>
				</td>
				<td></td>
			</tr>
			<tr>
				<td>CLMM</td>
				<td>Concentrated Liquidity</td>
				<td>
					<div style={{textAlign: 'center'}}>
						<!-- (x+\frac{\sqrt{k}}{\sqrt{\alpha}})*(y+\sqrt{k}\sqrt{\beta})=k -->
						<img src="/img/equations/CLMM_supply.svg"></img>
					</div>
				</td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>
<br/>
<br/>

CSMM is hardly ever used because allows arbitrageurs to drain one of the reserves if the off-chain reference price between the tokens is not 1:1. Such a situation would destroy one side of the liquidity pool, leaving all of the liquidity residing in just one of the assets and therefore leaving no more liquidity for traders.


The chart below represents the trading function for different CFMMs.

<LineTradeFunctionInvariants/>
<br/>

The chart below represents the bonding curves showing the spot price trajectory for different CFMMs. We will be able to select the expected price trajectory by selecting the suitable CFMM. We will use this trajectory later on estimations.

<LineTradeFunctionSpotPrice/>
<br/>


#### 9.3.5. Limitations of CFMMs

**Slippage** as a function expresses the difference between the spot price of an asset in the pool and the effective price obtained after the completion of the trade.

<!---
https://www.advancedblockchain.com/blogs/blended-automated-market-makers-bamm
-->
**Impermanent loss**, on the other hand, occurs when liquidity providers pull out assets from the pool during a large price swing. In this case they will suffer a loss of total asset value, compared to simply holding the assets.

#### 9.3.6. Second Generation AMMs

The Second Generation of AMMs is a series of novel projects with innovative blueprints that aim to address the limitations of the first generation of AMM. Non-deterministic AMMs.

<div style={{overflowX : 'auto'}}>
	<table>
		<tbody>
			<tr>
				<th style={{textAlign: 'center'}}>Trade Function</th>
				<th style={{textAlign: 'center'}}>Description</th>
			</tr>
			<tr>
				<th style={{textAlign: 'center'}} colSpan="2">Second Generation</th>
			</tr>
			<tr>
				<td>TWAMM - Time-Weighted Automated Market Maker</td>
				<td>The primary goal of the TWAMM is to execute its long-term orders smoothly over time so that they are executed for close to the prevailing time-weighted average price</td>
			</tr>
			<tr>
				<td>DAMM - Dynamic Automated Market Maker</td>
				<td>DAMMs adjust their pricing and liquidity provision strategies dynamically based on market conditions, aiming to offer better capital efficiency and reduced price impact.</td>
			</tr>
			<tr>
				<td>PMM - Proactive Market Maker</td>
				<td>PMMs work by adjusting their prices in response to real-world market trends and expert predictions. The goal of PMMs is to ensure that the prices on these platforms reflect what’s happening in the wider financial market.</td>
			</tr>
			<tr>
				<td>vAMM - Virtual Automated Market Makers</td>
				<td>vAMMs do not hold actual assets but use mathematical formulas to simulate trading and liquidity provision. They are primarily used in derivative platforms to enable trading without the need for traditional counterparts.</td>
			</tr>
			<tr>
				<td>TSMM - Token Swap Market Maker</td>
				<td>The token swap (TS) model denotes a trading pair of two liquidity pools. Swapping between the two tokens is facilitated through an intermediary token.</td>
			</tr>
		</tbody>
	</table>
</div>
<br/>

#### 9.3.7. Arbitrage


#### 9.3.8. Selecting Decentralized Exchanges

To honour decentralization principles, we will consider only deterministic market makers. A further in-deep analysis of the compliant AMMs should be done in a case by case basis. The table below represents the relevant equations for the different trade functions on deterministic AMMs.

<div style={{overflowX : 'auto'}}>
	<table>
		<tbody>
			<tr>
				<th style={{textAlign: 'center'}}>Symbol</th>
				<th style={{textAlign: 'center'}}>Trading Function</th>
				<th style={{textAlign: 'center'}}>Exchanges</th>
			</tr>
			<tr>
				<th style={{textAlign: 'center'}} colSpan="3">CFMM</th>
			</tr>
			<tr>
				<td>CSMM</td>
				<td>Constant Sum Market Maker</td>
				<td>
					MStable
				</td>
			</tr>
			<tr>
				<td>CPMM</td>
				<td>Constant Product Market Maker</td>
				<td>
					Uniswap-v1,
					Uniswap-v2,
					<a href="https://www.uswap.biz/protocol.php" target="_blank">USwap</a>, 
					<a href="https://sunswap.com/" target="_blank">SunSwap</a>,
					<a href="https://hydradx.io/" target="_blank">Hydration</a>
				</td>
			</tr>
			<tr>
				<td>CMMM</td>
				<td>Constant Mean Market Maker</td>
				<td>
					<a href="https://docs.balancer.fi/reference/math/weighted-math.html" target="_blank">Balancer</a>
				</td>
			</tr>
			<tr>
				<td>G3M</td>
				<td>Constant Power Mean Market Maker</td>
				<td></td>
			</tr>
			<tr>
				<td>CLMM</td>
				<td>Concentrated Liquidity Market Maker</td>
				<td>
					<a href="https://www.orca.so/" target="_blank">Orca</a>,
					<a href="https://beamswap.io/" target="_blank">Beamswap</a>,
					<a href="https://raydium.io/" target="_blank">Raydium</a>
				</td>
			</tr>
			<tr>
				<td>CWP</td>
				<td>Constant Weighted Product</td>
				<td></td>
			</tr>
			<tr>
				<th style={{textAlign: 'center'}} colSpan="3">Second Generation CFMM</th>
			</tr>
			<tr>
				<td>HCFAMM</td>
				<td>Hybrid Constant Function Market Maker</td>
				<td>Curve Finance</td>
			</tr>
			<tr>
				<td>DAMM</td>
				<td>Dynamic Automated Market Maker</td>
				<td>Bancor</td>
			</tr>
			<tr>
				<td>PMM</td>
				<td>Proactive Market Maker</td>
				<td>
					DODO
				</td>
			</tr>
		</tbody>
	</table>
</div>
<br/>





### 9.4. Capturing Asset Economic Value

Negotiation is the process in which the CC is swapped by its paired coin in an exchange pair. It can involve primary activity customers or user of any secondary activity. The exchange is in charge to form the price with the existing pair.

In order to capture the CC marginal utility we must ensure that only CC activities related to the primary utility impact the price of the exchange.

#### 9.4.1. Definition of Value Capture

A Cryptocommodity is bound to the intrinsic value of the underlying asset. There is not need of quantification of this intrinsic value. Instead, a Cryptocommodity exposes the asset intrinsic value (whichever its quantity) to form its price according to the marginal utility of the underlaying market as perceived by the consumer. 

<div style={{textAlign: 'center'}}>
	<img src="/img/value-capture-2.svg" width="50%"></img>
</div>
<br/>

The price formation is, therefore, internal to the CryptoCommodity ecosystem. As a consequence, a Cryptocommodity is decoupled from any external monetary system, fiat or not fiat, creating an autonomous ecosystem. A CryptoCommodity delivers the foundation for a true value decentralization.

<div style={{textAlign: 'center'}}>
	<img src="/img/value-capture-1.svg" width="60%"></img>
</div>
<br/>


#### 9.4.2. Value Capture Scenarios

Capturing the intrinsic value of the underlying asset into the Cryptocommodity means that there is a one-to-one relationship between Cryptocommodity units and units of redimible underlying asset. The capture itself is performed in the pool of the exchanges. Initially, the value of the Cryptocommodity is the one that the issuer sets when it deploys the Cryptocommodity in the exchange's pair. On the other hand, initially, there are not physical assets being traded with the Cryptocommodity. So there is a decoupling between both magnitudes on inception.

From this inception on TGE, it is expected that the Cryptocommodity is able to trade the underlying asset by using Cryptocommodity units as Medium of Exchange. It is also expected an increase in traded assets with time. On the other hand, the number of Cryptocommodity units in the exchange will have variations. THe value is considered captured when the number of assets traded in a period and the number of Cryptocommodity units in the exchanges match.

<div style={{textAlign: 'center'}}>
	<img src="/img/value-capture.svg" width="75%"></img>
</div>
<br/>

In order for this to happen, there are 2 possible scenarios: constant Cryptocommodity amount in the exchange or floating Cryptocommodity amount in the exchange. If the number of tokens in the exchange is intended to remain constant we must manually compensate the trading operations of investors. For floating number of tokens in the exchange no compensation is required. The operation of the consumers is self-compensated by the purchases of the physical assets. Both scenarios has benefits and drawbacks as described below:

<div style={{overflowX : 'auto'}}>
	<table>
		<tbody>
			<tr>
				<td style={{textAlign: 'center'}}>Benefits Floating Amount (VCE1)</td>
				<td style={{textAlign: 'center'}}>Benefits Fixed Amount (VCE2)</td>
			</tr>
			<tr>
				<td>
					Floating amount means that value is captured before and the investor EXIT can happen earlier. This will help the Fundraising stage.<br/><br/>
					Floating amount is also more resilient to velocity of circulation and makes the capture easier.<br/><br/>
					Floating amount is easier to implement as we do not need to compensate trading activities of users of non-primary activity.
				</td>
				<td>
					Capture for fixed amount scenario happens later in time which guarantees the system is more resilient to investors EXIT.
				</td>
			</tr>
		</tbody>
	</table>
</div>
<br/>

In the next section we will describe the operations required to guarantee scenario 1 of floating amount of tokens.


### 9.5. Value Capture Operations



#### 9.5.1. Negotiation Staheholders

The negotiation through the exchange involves typically 3 parties: the issuer, the consumer and the holders. The issuer and the consumer are the same stakeholders which would carry out the operation offchain in the physical world. By performing this operation onchain they will be able to provide a CC to their community and provide a price. Is not significantly important the time that the consumers holds the CC before its purchase (the velocity of circulation) as long as the CC offers incentives to the holder.

<div style={{textAlign: 'center'}}>
	<img src="/img/stabilization_mechanism_capture.svg" width="65%"></img>
</div>
<br/>

The new stakeholder is the holder. The holder can be represented by different kind of actors, investors, card users, savers, lenders and borrowers or any other party that has expectations on benefits from holding or trading the CC. The operation of holders is expected to be bullish for the CC, meaning they should be eager to hold and use the CC, in order to enable the price capture mechanism taking place.

The next sections will describe how the operations carried out by stakeholders is implemented for the value capture stage.


#### 9.5.2. Creating Reserve Account













To enable synchronization between the CryptoCommodity units deployed nit he exchanges and real world demand is necessary the support of a wallet that allows adding units to the exchanges or removing units from the exchanges. A reserve account must be crated per network deployed.

#### 9.5.3. User buys CC at Exchange

In this scenario, the user (either consumer or holder) holds a token (e.g. USDT) and wants to acquire CC. The user will visit an exchange offering a CC/USDT pair and carry out an standard swap as a buy operation. In this swap the holder sends USDT and receives CC in corresponding amount from the CC smart contract paired in the exchange. If the swap is for the primary utility, i.e. from specific channels, no fees should be applied on the transaction because they are already included in the purchase itself. Conversely, if the user is looking for a secondary utility, fee can be charged by the CC issuer.

<div style={{textAlign: 'center'}}>
	<img src="/img/sequence/swapUSDTByCC.svg" width="40%"></img>
</div>
<br/>

#### 9.5.4. Holder sells CC at Exchange

For this second scenario, the holder holds CC and want to swap them back by the paired token. The user will visit an exchange offering a CC/USDT pair and carry out a, standard swap as a sell operation from his wallet. In this swap the holder now sends CC and receives USDT in corresponding amount from the exchange. No interference in the exchange pair is required for this operation either.

<div style={{textAlign: 'center'}}>
	<img src="/img/sequence/swapCCbyUSDT.svg" width="40%"></img>
</div>
<br/>

The situation again changes if the user is not the issuer. In this case, a fee can be optionally charged by the CC issuer.

#### 9.5.5. Consumer pays product with CC

This operation does not represent a direct interaction with the exchange. However, the issuer must the compensate the purchase by swapping the received CC tokens by  USDT from the exchange pair to profit from the purchase operation of the physical asset. This transaction can be easily integrated in to the reserve.

<div style={{textAlign: 'center'}}>
	<img src="/img/sequence/purchase_sequence.svg" width="70%"></img>
</div>
<br/>




### 9.6. Value Capture Events

<LineVestingSchedulesChart/>

#### 9.6.1. Token Generation Event

A Token Generation Event (TGE) is a business and technical act of limited duration that involves the technical generation of the token in a blockchain-based network, and its launch to the market and and made available to the public. Typically it follows a fundraising process but not necessarily.

In the TGE the preminted tokens are allocated to project designated accounts, investors that purchased during the funding rounds and reserve to support trading negotiation in ythe exchanges. Additionaly, during TGE the first liquidity pool is created in the exchanges making the CryptoCommodity ready to traded. In the TGE the price discovery process of the CryptoCommodity begins.

#### 9.6.2. Vesting Schedules

#### 9.6.3. Value Capture Event

Is possible to define the Value Capture Event as the time when the CryptoCommodity represents the underlying asset. This will happen when 1 unit of demand matches 1 unit of CryptoCommodity in the exchanges. When this happens value has been captured and this triggers the stabilization mechanims to maintain this captured intrinsic value.



### 9.7. Value Capture Estimations

In this section we will try to determine the important outcomes from the CryptoCommodity lifecycle. Take in mind that all these behaviou can be parametrized and must benchmarked to determine best practices.

#### 9.7.1. Determining Total Supply

The **Total Supply** is determined by the CryptoCommodity issuer. The Total Supply is fixed for the Value Capture Stage which allows the CryptoCommodity to behave as a deflationary token.

<br/>
<LineEstimateTotalSupplyChart/>
<br/>

#### 9.7.2. Calculating Circulating Supply (Static, ex-Demand)

In the Value Capture Stage, the Circulating Supply is an aggregation of the supply pre-minted allocation items as done by the CryptoCommodity issuer. These aggregation is made up of the folowing items during the Pre-minting Stage. This includes:

- the vested **exchanges allocation** made by the issuer when the exchange pairs are first created. 

- the vested **fundraising allocation** which provided the initial funds to the issuer to launch the project

- the vested **project allocation** which enables issuer to perform different tasks in the project.

<br/>
<center><var>Circulating Supply</var> = <var>Vested Exchanges Allocation</var> + <var>Vested Fundriaising Allocation</var> + <var>Vested Project Allocation</var></center>
<br/>

The image below depicts a possible configuration of Total Supply allocation items:

<br/>
<LineEstimateCirculatingSupplyStaticExDemandChart/>
<br/>

#### 9.7.3. Estimating Circulating Supply (Dynamic, ex-Demand)

Once a vesting period has been terminated, it is expected that some of these tokens un the hands of public can be sold by merely speculative purposes. This would apply in particular to funding rounds. Project and Exchanges are in the hands of the issuer so is not expected to be sold once the vesting period is finished.

<br/>
<table>
	<tbody>
		<tr>
			<th></th>
			<th>Tokens Sold at End of Vesting</th>
		</tr>
		<tr>
			<td>Project Allocation</td>
			<td>0%</td>
		</tr>
		<tr>
			<td>Seed Funding Allocation</td>
			<td>35%</td>
		</tr>
		<tr>
			<td>Private Funding Allocation</td>
			<td>25%</td>
		</tr>
		<tr>
			<td>Public Funding Allocation</td>
			<td>15%</td>
		</tr>
		<tr>
			<td>Exchanges Allocation</td>
			<td>0%</td>
		</tr>
	</tbody>
</table>
<br/>
<br/>

When tokens are sold, it means that these tokens increase the number of tokens in the exchanges by the corresponding amount. The following cart includes these modifications.

<br/>
<LineEstimateCirculatingSupplyDynamicExDemandChart/>
<br/>

#### 9.7.4. Estimating CryptoCommodity Demand

CryptoCommodity's users demand, represents the tokens purchases in the exchanges by the CryptoCommodity Users. The CryptoCommodity's users can purchase tokens by 2 different motivations: real utility or speculative value.

The **Speculative Demand** is the expectation that the project will achieve its goals and, therefore, the price of the tokens will increase driving profits to their holders. The speculative demand is highly volatile. The speculative demand is higher at earlier stages of the project and gets reduced when the project gets closer to its goals.

<br/>
<LineEstimateTotalCryptoDemandChart/>
<br/>

The demand caused by **Real World Utility Demand** is sensitive to the project roadmap, evolution and perception of progress by the community. For a CryptoCommodity at the Value Capture Stage, there are 2 sources of real world utility demand: the demand by consumers and the demand by discount cards. The Demand by Consumers can be affected by the velocity of circulation problem (section 12.2). Having an utility provided from inception will increase interest by consumers in holding the token or converting into card users.

#### 9.7.5. Estimating Circulating Supply
The **Ciculating Supply** is based on the **Estimating Circulating Supply (Dynamic, ex-Demand)** (as defined in 8.6.3). The CryptoCommodity **Total Demand** (as defined in 8.6.4) must also be considered. This will have the effect of withdrawing Exchange tokens to holders.

<br/>
<LineEstimateCirculatingSupply/>
<br/>

#### 9.7.6. Estimating Value Capture Event

As described in 8.4.1, the Value Capture Event happens when the Physical demand of the underlying asset in the considered period matches the number of token in the exchanges. In order to estimate the VCE, we need to consider these 2 magnitudes: evolution of tokens in the exchanges (as described in 8.6.5) and physical demand of the asset.

The **physical demand** must be estimated from a sales forecasting process and is specific for every business model and roadmap.

<br/>
<LineEstimateValueCaptureEventChart/>
<br/>

#### 9.7.7. Estimating Investor Exit

The VCE will also determine the triggering of the investor EXIT event, which is the point in time where investors will get a maximum return.

#### 9.7.8. Estimating Price Evolution

By plotting the spot price against our estimated supply according to different pricing strategies (effective price), we can estimate the price profiles. These price profiles are different depending on the constant defined on pair creation.


<br/>
<LineEstimatePriceEvolutionChart/>
<br/>

#### 9.7.9. Estimating Exchanges Initialization

We found that all previous price profiles match with the supply in the exchanges. However, we want to select the profile that provides the price matching with the physical CryptoCommodity.


<br/>
<LineEstimateExchangesInitilizationChart/>
<br/>

#### 9.7.10. Estimating Investor Profit

<div style={{textAlign: 'center'}}>
	<img src="/img/price_estimations_black.svg" width="70%"></img>
</div>
<br/>

### 9.8. Considerations

Negotiation is highly impacted by <b>decentralization</b> as it may affects the price of the asset and the reputation of the issuer.

Depending on the scope of the CryptoCommodity, <b>compliance</b> may also have to be considered as some juritdiction impose restrictive rules on investment accounts, trading diclosure or governance of the contract. A record must be kept of compliance reuirement in the juridictions to deploy and CryptoCommodity must allow reconfiguration of the compliance.

<b>Security</b> is another aspect to consider since token unit will be deployed to exchange pair and thereore subject to vulnerabilities.

The system must care about the reputation of the CryptoCommodity by enabling <b>transparency</b>. full diclosure must be provided on operation

Finally, optionally <b>privacy</b> should be included on the CryptoCommodity and lt to the consideration of the issuer according to compliance rule and personal prefFerences.



<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>


## 10. Value Release Stage
---

Once underlying asset value has been captured, the CryptoCommodity is ready to deliver DeFi Services to the community. This chapter describes how the required tokens will be distributed. The next chapetrs will focus on the stabilization mechanism to maintain the captured value and the scope of services delivered.

### 10.1. Scope

Value Release Stage is the period that covers from the VCE onwards and is mainly dedcaited to maintaining the captured value and delivering DeFi Services to the community.

<LineStageValueReleaseChart/>
<br/>

### 10.2. Consolidated Supply Management

Once the project has been funded and the value of the underlying asset has been captured we already know that the currency represents the value of the underlying asset utility. At this point the Cryptocurrency is an Unit of Account because it captures the underlaying asset utility. Also the Cryptocurrency is a Store of Value because there is enough number of transaction to provide stability to the system.

From this point onwards, a CryptoCommodity has a built-in stabilization mechanism that guarantees taht the value is always captured.

### 10.3. Consolidated Token Allocation

<DoughnutConsolidatedTokenAllocationChart/>
<br/>

### 10.4. Ongoing Distribution


- Tokens must be purchasesd by consumers



### 10.5. Release Schedule

<LineReleaseScheduleChart/>
<br/>

### 10.6. Considerations for Distribution

Decentralization, wealth distribution. whales gini

An important reuirement to distribute tokens in a jurisdiction is that there should not be rules preventing currency utilities, e.g. the CryptoCommodity must be allowed as a <b>payment method</b>, if this utility is going to be provided.

Another consideration is to prevent high concentration of token units in some wallets. In particular prevent the ocurrence of <b>whales</b> as they can harm the investors experience and the reputation of the CryptoCommodity. If possible, the Gini Coefficient must be controlled. Preventing whales affects to all stages of distributionm including funding, negotiation.


<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>


## 11. Maintaining Value Stability
---

Differently to a stablecoin, which is stabilized to capture the fiat price of the static asset from a broad external market, CryptoCommodity Framework includes a stabilization mechanism that allows the token to capture the economic value of the underlying from its own market. This provides a valuable tool to boost real economy. [40]

### 11.1. Capturing Intrinsic Value

None of the existing mechanisms deals with the capture of economic value or the task of price formation itself. Instead, the mechanism that we present here for CryptoCommodities is concerned with the tasks of (1) capturing the underlying asset intrinsic value, and (2) expose the asset intrinsic value to form its price according to the marginal utility as perceived by the consumers. The combined action of both mechanisms converts a CryptoCommodity into representative money for the underlying asset.

Capturing intrinsic value is what representative money does by definition as it represents the underlying assets in the defined amount. In order to achieve this goal, we can match the supply of the CryptoCommodity units in the exchanges to the existing demand for the issuer in the real world market. Estimating the intrinsic value, deciding f it comes from land, from production process or from any other objective criteria is not needed in order to this value can be exposed. As long we guarantee a 1-to-1 relationship between demand and CryptoCommodity units in the exchanges the intrinsic value of the asset will be represented in the CryptoCommodity.

Another reason to use trading pairs is to decrease trading fees. If the trading pair did not exist, you would need to use at least two crypto trading pairs to obtain your desired cryptocurrency – and pay additional trading fees, as you would be committing to two trades as opposed to only one

picture

This intrinsic value capture only deals with the CryptoCommodity units in the exchanges and is agnostic about the Circulating Supply, the number of locked units or the Total Supply of the CryptoCommodity. This flexibility allows a leverage that, despite it could suppose a financial risk that must be accessed, does not interfere in the value capture process itself.

### 11.2. Stabilization Mechanisms

Stabilization mechanism is a artifact apply in the exchanges liquitiy pools to guarantee that the CryptoCommodity represents the underlayiing asset and is able to be priced according to its marginal utility.

On the literature review for price stabilization, 3 mechanisms have been proposed. (I) Ametrano and Morini proposed the so-called Hayek Money (Misnomer*). Hayek Money adjust the amount of money stocked in each wallet, according to the data on current price provided by the external source. This simple mechanism leads to the unstable purchasing power because the rebasement directly modifies the amount of money in each wallet. (II) Sams proposed a new mechanism for the price stabilization, named Seigniorage Share to automatically adjust supply through shares with which users can purchase stablecoins. The Basis stablecoin was an example of a seigniorage algorithmic stablecoin, although it was ultimately shut down due to regulatory concerns. (III) Burn and Mint Equilibrium Multitoken Model burns the “value-seeking” tokens in order to receive the “payment” tokens. Notable examples are Factom, Helium, CHR. [46]

The common goal for existing mechanisms is to adjust the token price to an externally formed price by adjusting the token supply.

### 11.3. CryptoCommodity Stabilization

Once the value has been captured by the CC, the stabilization mechanism needs to maintain this value to enable further currency services. 

This stabilization mechanism can be run as an separated process or can be attached to the buy/sell orders themselves. Attaching the stabilization mechanism to buy/sell orders provides a smoother price changes but increases the transactions gas. Conversely, running an standalone stabilization mechanism, would create a sawtooth pattern in the price profile but is cheaper in gas for the user. A CC should provide both options and let the issuer to configure depending on the gas fees of the network where the CC is deployed.

The scenarios will be described in the next sections.

#### 11.3.1. Standalone Stabilization Mechanism

As both, real world demand and token units in exchange change are in continuous change and they will unsync over the time, there should be a scheduled process that resyncs real world demand with token units in exchanges. This resync means to update the token units in the exchanges periodically. In order to perform this resync there can be some cases:

- real world demand is higher than number of tokens in the exchanges. This the expected case for a growing real world business, as demand is increasing, the issuer has increased his sales or CryptoCommodity users have bought many token units. The compensatory action to resync is to move token units from the reserve account to the exchange as we need to increase the number token units to match the real world demand. For the number of token units needed in excess of the token units existing in the reserve account, the CryptoCommodity must populate the reserve account with enought token units.

- real world demand is smaller that number of tokens in exchanges. This is the case if the issuer has reduced his sales or CryptoCommodity users have sold many token units from the exchanges. For this scenario, the compensatory action to resync is to move token units from the exchange to the reserve account.

<div style={{textAlign: 'center'}}>
	<img src="/img/swapsStabilizationMechanism.svg" width="80%"></img>
</div>
<br/>

This stabilization mechanism could be run as a scheduled process triggered periodically or by some event. This should be designed.

#### 11.3.2. Holder buys CC at Exchange with Stabilization

In this case, the stabilization mechanism is executed by the smart contract for each swap operation. The scenario is similar to the one described in 9.5.1 where an aditional stabilization step is added.

<div style={{textAlign: 'center'}}>
	<img src="/img/swapUSDTbyCCStabilized.svg" width="80%"></img>
</div>
<br/>

#### 11.3.3. Holder sells CC at Exchange with Stabilization

In this case, the stabilization mechanism is executed by the smart contract for each swap operation. The scenario is similar to the one described in 9.5.2 where an aditional stabilization step is added.

<div style={{textAlign: 'center'}}>
	<img src="/img/swapCCbyUSDTStabilized.svg" width="80%"></img>
</div>
<br/>

### 11.4. Price Formation

Once the intrinsic value of the assets is exposed into the exchanges, Leave price formation for this intrinsic value in basis of utility (subjective value)

Arbitrage will homogeinise price across the exchanges. Try to minimize arbitrage steps.




<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>


## 12. Providing DeFi Services
---

By using the CryptoCommodity as the heartbit of the marketplace, we can extract the economic value of the asset to provide addtional benefits to the community.



### 12.1. List of DeFi Services

Besides providing a currency, the CryptoCommodity will work a foundation for additional financial services so, other citizens can propose their own CryptoCommoditi project, create their own CryptoCommodity and increae the wealt of the system.

<table>
	<tbody>
		<tr>
			<th></th>
			<th>Utility</th>
			<th>Description</th>
		</tr>
		<tr>
			<th rowSpan="3">Monetary Functions</th>
			<td>Underlying Asset Payments</td>
			<td></td>
		</tr>
		<tr>
			<td>Reserve of Value</td>
			<td></td>
		</tr>
		<tr>
			<td>Unit of Account</td>
			<td></td>
		</tr>
		<tr>
			<th rowSpan="3">DeFi Services</th>
			<td>Other Asset Payments</td>
			<td></td>
		</tr>
		<tr>
			<td>Transfers</td>
			<td></td>
		</tr>
		<tr>
			<td>Lending</td>
			<td></td>
		</tr>
	</tbody>
</table>

### 12.2. CrytoCommodity Ecosystem


#### 12.2.1. Exchange as Cornerstone

<div style={{textAlign: 'center'}}>
	<img src="/img/ecosystem_before.svg" width="80%"></img>
</div>
<br/>

#### 12.2.2. MultiExchange Configuration

#### 12.2.3. Wallets

Crypto wallets keep private keys safe and accessible, allowing to send and receive CryptoCommodity units. Unlike a normal wallet, which can hold actual cash, crypto wallets technically don’t store crypto. The holdings live on the blockchain, but can only be accessed using a private key. The private keys prove ownership of the digital money and allow to make transactions. If you lose your private keys, you lose access to your money.

Crypto wallets range from simple-to-use apps to more complex security solutions. The main types of wallets you can choose from include:

<table>
	<tbody>
		<tr>
			<th></th>
			<th>Keys Storage</th>
			<th>Connected</th>
			<th>Portable</th>
			<th>Private</th>
		</tr>
		<tr>
			<th>Paper Wallets</th>
			<td>a physical medium like paper</td>
			<td>No</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<th>HW Wallets</th>
			<td>a thumb-drive device</td>
			<td>No</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<th>HW Card Wallets</th>
			<td>a thumb-drive device</td>
			<td>No</td>
			<td>Yes</td>
			<td>Yes</td>
		</tr>
		<tr>
			<th>SW Desktop App Wallets</th>
			<td>a computer's hard drive</td>
			<td>Yes</td>
			<td>No</td>
			<td>No</td>
		</tr>
		<tr>
			<th>SW Browser Plugins Wallets</th>
			<td>a computer's hard drive</td>
			<td>Yes</td>
			<td>No</td>
			<td>No</td>
		</tr>
		<tr>
			<th>SW Messenger Bot Wallets</th>
			<td>a computer's hard drive</td>
			<td>Yes</td>
			<td>No</td>
			<td>No</td>
		</tr>
		<tr>
			<th>SW Mobile Apps Wallets</th>
			<td>a mobile's hard drive</td>
			<td>Yes</td>
			<td>Yes</td>
			<td>No</td>
		</tr>
		<tr>
			<th>SW Exchange Wallets</th>
			<td>in the exhange</td>
			<td>Yes</td>
			<td>Yes</td>
			<td>No</td>
		</tr>
	</tbody>
</table>
<br/>

Existing HW wallets are cold wallets. A cold wallet is a crypto wallet that is not connected to the internet and stores your private keys offline. In order to be used they need to be connected to a computer. SW Desktop Wallets run in a computer. Needing a computer to perform wallet operations is not well suitable for a retail real economy. Mobile wallets, differently to computer-dependant wallets, are portable. However, their privacy is compromised by mobile operating system. Finally, custodian wallets running in a exchange are owned by the the exchange itself. So, we find, that after 15 years of crypto, there is not a wallet suitable for retail real economy.

#### 12.2.4. Interfacing with Exchanges

Users needs CryptoCommodity units to do operations. In order to enable the price formation mechanism, users must fund their wallets from the exchanges where the token is trading. But accessing to the exchanges is not a trivial task for unexperienced users so is possible to enable other kind of access points to buy or sell CryptoCommodity units. There are a few mechanisms to make access to exchanges transparent for consumers.

- Specialized <b>smartphone aplications</b> can embed its own wallet or use and extneral wallet allowing the consumer to interface with the exchange in a seamless manner.

- Wallet enabled <b>vending machines</b> can interect with cards or wallets to charge CryptoCommodity

- Cards with embedded wallet logic can be topped up with CryptoCommodity from a <b>card reader</b>. And, conversely, a card reader can also charge the CryptoCommodity fee for a purchase.

### 12.3. Underlying Asset Payments

#### 12.3.1. Payments Allocation

<DoughnutUnderlyingAssetPaymentsChart/>
<br/>

#### 12.3.2. Payments Ecosystem

In the picture we can see the detailed CryptoCommodity ecosystem. The retailer at each location decides what price to charge for the underlying asset. The price formation is performed in the exchanges according to the aggregated demand in the primary market including all retail locations. This means that some retailers will charge above the 1 CryptoCommodity mark, and other retailers will charge below the 1 CryptoCommodity mark.

<div style={{textAlign: 'center'}}>
	<img src="/img/ecosystem_medium_of_payment.svg" width="80%"></img>
</div>
<br/>

The price formed in the exchanges is then reused for the supply of tokens in holder's hands and in DeFi Services markets.

#### 12.3.3. Executing a Payment

Executing a payment with CryptoCommodity requires using CryptoCommodity units as medium of exchange. The customer can require a previous conversion from his currency to CryptoCommodity in an exchange. :

* customer swaps his money by CryptoCommodity units. Acquiring CryptoCommodity units from an exchange increases the CryptoCommodity price.

* customer then transfers CryptoCommodity units to the producer. This operation does not affect CryptoCommodity price.

* once received the payment in CryptoCommodity units, the producer can held the CryptoCommodity in his wallet to maintain the CryptoCommodity price unmodified. Optionally, the producer can swap n the exchange the received CryptoCommodity units to his preferred currency. This operation will also reduce the CryptoCommodity price.

The process is depicted in the figure below:

<div style={{textAlign: 'center'}}>
	<img src="/img/sequence/purchase_sequence.svg" width="80%"></img>
</div>
<br/>

It would be possible to have the swap and transfer integrated into the corporate payment tools. At the moment we do not know this possibility is available as it would have compliance requirements. This is a future development.

### 12.4. Unit of Account

CryptoCommodity captures the averaged marginal utility of the underlying asset across all sales points. This enables CryptoCommodity to become a Unit of Account for the underlying asset.

### 12.5. Reserve of Value

As a quality Unit of Account, CryptoCommodity works as a reserve of value for the holders.

### 12.6. DeFi Services

The DeFi Services allocation will cover the utilities delivered by the CryptoCommodity after the Value Capture Event. This allocation is not included in the Initial Token Allocation and will be mined on demand by the stabilization mechiams in parallel to demand increases. It will include:

- funds for holders

- funds for payments in secondary retail markets

- funds for transfers

- funds for lending


<DoughnutOperationsAllocationChart/>
<br/>

### 12.7. Mainstream Payments

Thanks to the price formed in the exchanges as a consequence of the demand in the primary market, CryptoCommodity can become medium of exchange for other goods and services. Depending on the currency accepted for these other markets, a swap can be required.

If the CryptoCommodity is accepted ni the secondary market, the consumer can pay with the its holdings of the CryptoCommodity.

If the CryptoCommodity is not accepted for the secondary market, the consumer or the retailer should performa swap from the CryptoCommodity to the target currency.

### 12.8. Transfers

CryptoCommodities can participate in transfers as remittances, international transfers as long as is accepted.

### 12.9. Lending

Credit is the main reason that motivated the obsolescence of gold standard and introduction of fiat currencies. The problem of credit with the legal tender is that risk is collectivized. CryptoCommodities, as private money, allow lending with the benefit that the irsk is privatized, not affecting to the society as a whoe. 

A CryptoCommodity can work as collateral of lending operations in existing platforms. A CryptoCommodity coudl also work as payment method for lending on a own lending platform.



<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>




## 13. CryptoCommodity Projects
---

In this chapter we will discuss what are approaches to introduce CryptoCommodity tokens in the market.



### 13.1. Typical Project Description

CryptoCommodity is the first initiative to build non-fiat stablecoins focused on the real economy. The existing tools in the market have not been built specifically for the real economy so some level of customization as well as some new developments are required. According to the current availability, in order to determine the right pilot projects we can consider the following aspects:

The <b>scope</b> of the project can can be municipal, regional, national or global as long there is a supply large enough to create a currency delivering its services in the same scope.

Compliance with regulation, as described in section 13.2. is a must to decide to invest in a project. <b>Compliance</b> is a multifaceted aspect. Depending on the activities covered in each jurisdiction, it can be required comply with VASPs rules, crypto allowed as a payment method or ICO as authorized funding method. Some suitable countries / region can be: Argentina, El Salvador, Panama.

The stakeholders of typical CryptoCommodity Project should be a provider of an <b>underlying asset</b> consumed by many customers. The underlaying asset must comply with description on section . Candidates are energy providers, LPG providers, water providers, mining providers, agrocommodities providers. At time of writing this whitepaper, crypto is not yet integrated in corporate payment processes so B2B providers are probably not yet ready for CryptoCommodity Projects. Therefore, the ideal CryptoCommodity issuer at this point is a <b>B2C provider</b> of an conformant asset.

Finally, the current limitations on <b>wallets</b> availability must also be considered as a work in progress for future improvement. Wallets packaged as mobile apps are suitable to operate CryptoCommodity tokens. A cheaper alternative could rechargeable gift cards.


### 13.2. The challenge of <s>Velocity of Circulation</s> Saleableness

Velocity serves as a measurement of the rate at which money is exchanged within an economy. Most countries calculate their velocity of money using a ratio that divides Gross Domestic Product by the country's total money supply.

Analogous to the fiat world, in the crypto world we define token velocity. Token velocity measures the speed at which tokens circulate in a cryptocurrency ecosystem. When tokens change hands swiftly, it means they're being used for transactions, investments, or even just as a medium of exchange. On the flip side, if tokens stay locked away in wallets, collecting dust like forgotten treasures, their velocity is low. Low velocity might sound like a good thing at first, but as we'll discover, it's not always the case.

A token that has limited utility and lack of incentive to encourage holding of the token is likely to have a high velocity. In turn, this will reduce the opportunity for token price appreciation. Strategies that encourage token holding (e.g. staking) or that are deflationary (e.g. burning) may promote token price appreciation. However, this may have limited effect should velocity not already have reached its ceiling.

Causes of the high token velocity is that the prices are not expressed on the currency.

Token velocity can be an issue during the Value Capture stage. However, once marginal utility has been captured and stabilization mechanism takes places, the CryptoCommodity becomes an stablecoin and the Value Release stage is triggered. If people genuinely come to believe in the CryptoCommodity as a store of value, there will be a significant probability that they’re willing to hold onto excess tokens rather than sell them for something else.

#### 13.2.1. Token Velocity during Value Capture 

During the Value Capture stage the CryptoCommodity will behave as an utility token. This is the critical part where the holders can be reluctant to keep the tokens in their wallets. In order to reduce velocity some approaches can be considered:

- Introduce a profit-share mechanism

- Build staking functions into the protocol

- Balanced burn-and-mint mechanics

- Gamification to encourage holding

- for a local market, vending machines could be used to deliver the product or service

- express the prices in CryptoCommodity units


### 13.3. The challenge of Compliance

A CryptoCommodity Project must comply with regulation in jurisdictions were each activity is deployed. As a CryptoCommodity Project can be cross jurisdictional we need to analyze compliance for the different stages in the value chain. This table provides an overview:

<div style={{overflowX : 'auto'}}>
	<table>
		<tbody>
			<tr>
				<th>Value Chain Stage</th>
				<th>Compliance Requirements</th>
			</tr>
			<tr>
				<td>Issuance</td>
				<td>In Jurisdictions where a CryptoCommodity is issued, the Project must comply local legislation on Virtual Asset Service Providers. At the time of writing only 7 juristictions have incorporated laws to regulate stablecoins. This typically covers requirements on collateral and transparency of processes (see section 7.3.)</td>
			</tr>
			<tr>
				<td>Funding</td>
				<td>Some jurisdictions have regulated ICOs and Funding Rounds. This must be considered if the project includes this stage.</td>
			</tr>
			<tr>
				<td>Negotiation</td>
				<td>In Jurisdictions where a CryptoCommodity will be held in citizens wallets, we must consider consumer protection rules.</td>
			</tr>
			<tr>
				<td>DeFi Services</td>
				<td>In jurisdictions where DeFi Services are provided, the Project must also comply with Virtual Asset Service Providers legislation, if existing. This typically includes crypto payments are authorized in the jurisdiction.</td>
			</tr>
		</tbody>
	</table>
</div>
<br/>

### 13.4. The challenge of Wallets

15 years after the advent of Bitcoin, and many million funded by VCs in crypto projects, we still do not have a gadget hardware wallet to pay in the market with crypto. And this says a lot.

The assumption of mobile apps working as cryptocommodity wallets sounds to degrade crypto to a subproduct. Also, smartphone operating systems are not decentralized themselves. Large software corporations have priviledges incorporated in the firmware of these devices. We think a new economic model deserves its own devices. On the other hand, existing wallets are mostly connected to the computer and this is not practical as a mainstream payment system. Also the new wallet initiatives looks to be designed for high end consumers and they see the revenue in the basis of high prices. This is not affordable for most of world population.

We think a crypto wallet should be a garage control-like $20 device, that works wirelessly and, maybe without internet (e.g. via GSM). Until we do not have this kind of devices, crypto cannot be massified.

I the meatime, there is room for discussion if vending machines or gift cards could fit the bill for a workable crypto wallet for privately issued currencies.

### 13.5. Incremental adoption

The CryptoCommodity will capture its price from the underlying asset utility. The capitalization of the CryptoCommodity will be proportional to the volume of transactions that the providers experience with the CryptoCommodity. Nothing prevent that the CryptoCommodity can coexist with Current Payment Methods and allow the provider to decide what part of the business delegate to CryptoCommodity and what part keep on tradFi and when to do the transition. 

This incremental feature will ease execution of pilot projects and, in general, a gradual introduction of the model.

### 13.6. Benefits for Producers

In order to introduce the project into the community, there must be incentives for all parties to adopt the CryptoCommodities. Producers that fullfill the required conditions to adopt CryptoCommodity have great economic benefits:

<div style={{overflowX : 'auto'}}>
	<table>
		<tbody>
			<tr>
				<th>Benefit</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>Project Allocation</td>
				<td>When the token allocation is designed, a CryptoCommodity allows the issuer to allocate a portion of the token supply to fund the project beyond the initial capital raise. Refer to section for details.</td>
			</tr>
			<tr>
				<td>Initial Fundraising</td>
				<td>An initial fundraising can be launched by the producer in order to improve the services that will be offered to the community. The amount that can be raised must be estimated and is proportional to the project capitalization. Refer to section for details on this.</td>
			</tr>
			<tr>
				<td>Transaction Fees</td>
				<td>Once the CryptoCommodity is in the exchanges, the issuer has the possibility to apply a percentage of fees on transactions in the exchanges. This fees can be filtered by type of transaction so it does not include, for example, payments for the underlying asset. The aount must be balanced by the costs in reputation that transaction fess can bring to the issuer. Refer to section for more.</td>
			</tr>
			<tr>
				<td>Lending Fees</td>
				<td>As the CryptoCommodity is involved as collaterla for Lending, a fee can also be applied for the lending process.</td>
			</tr>
			<tr>
				<td>Transfer Fees</td>
				<td>As the CryptoCommodity is involved as collaterla for Transfers, a fee can also be applied for the lending transfers.</td>
			</tr>
			<tr>
				<td>DeFi Services Allocation</td>
				<td>In order to have an stablization mechanism, exchanges needs to maintain a number of tokens that match the phisical demand of the provider. This guarantees that the CryptoCommodity will capture the marginal utility of the underlaying asset. However, nothing prevents that, in the Value Release Stage, the supply can be extended beyond this initial supply. Every token that is added from the intiial capitalization represents a sale for the issuer.</td>
			</tr>
		</tbody>
	</table>
</div>
<br/>

The volume of each benefit should be estimated in relation to the project capitalization but we think they are interesting enough to invite providers to accept the challenge in an incremental manner. You can learn about benefits for consumers and the society as a whole on chapter 16.


<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>






## 14. Implementation of CryptoCommodities
---

This section provides an overview of CryptoCommodities implementation technologies as well as identified technological challenges.

### 14.1. Smart Contract

CryptoCommodity smart contract is created as a diamond standard ERC-2535 [1] contract. As a diamond contract it includes a front controller diamond whih receives all requests and is the single point of contact for the whole structure. 4 facets deployed, at different addresses that the diamont front controller, are attached to provide custom behaviours.

<div style={{textAlign: 'center'}}>
	<img src="/img/token_structure.svg" width="60%"></img>
</div>
<br/>

Existing behaviours are:

- Crowdsale Facet.

- Vesting Facet

- Common Facet

- ERC-20 Facet

By using the upgradeabity capabilities provided by the diamond front controller, these facets can be updated or deleted or replaced by new facets.

https://github.com/Catallactic/catallactic-suite

### 14.2. Upgradeable

we love the principle of inmutability but we also think technology is not yet ready for it. As theoretical framework is still being created and need to learn from experience with benchmarks, creating an inmutable token is like shooting your own feet if you want to do a serious project. We think we need to achieve trust by different means as having a great project and a mission. As a consequence, currently, the CryptoCommodity contract must be upgradeable to include new updates and definitions. In order to prevent a reputational risk, the upgrades can be protected by a voting system.

Inn current implementation, every facet contains a versioned logic of the functionality. However, they can be upgraded in a way that one, or many functions, can be replaced by other functions with the same signature or adding new functions.

The long term idea is to release to community the governance.


### 14.3. The challenge of Security

Security is crucial in crypto world. A quality money must be built on a secure system. Some security policies are being used to pervent vulnerabilities:

- Code includes <b>multisig role-based access</b> to functionalities.

- The whole CryptoCommodity code must be <b>audited</b>. 

- Code is open source to allow <b>white hats contributions</b>. Ideally should be also be in continuous validation by the community.

- We are exploring ERC-20R to create <b>DAO-protected storage backups</b> of the status to allow reverting in case of vulnerability. 

### 14.4. The challenge of Decentralization

<div style={{overflowX : 'auto'}}>
	<table>
		<thead>
			<tr>
				<th></th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Network Decentralization</td>
				<td>Networks where the token is deployed should fulill the reuired decentralization standards. The decentralization of this networks will influde in the reputation of the CryptoCommodity-</td>
			</tr>
			<tr>
				<td>Exchanges Decentralization</td>
				<td>Exchanges should also be decentralized regarding</td>
			</tr>
			<tr>
				<td>Smart Contract Decentralization</td>
				<td>-</td>
			</tr>
			<tr>
				<td>Governance  Decentralization</td>
				<td>The stabilization mechanism should ideally work standalone without the issuer needing to mint or burn manually token units.</td>
			</tr>
			<tr>
				<td>Wealth Decentralization</td>
				<td>Gini and Nakamoto Coefficients</td>
			</tr>
		</tbody>
	</table>
</div>



### 14.5. The challenge of Transparency


### 14.6. The challenge of Privacy


### 14.7. Deployment


<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>



## 15. Configuration

### 15.1. Parametrization

<LineParametrizationChart/>
<br/>

<div style={{overflowX : 'auto'}}>
	<table>
			<tbody>
			<tr>
				<th rowSpan="2">GENERAL</th>
				<td>Num Orders Period</td>
				<td bgcolor="#FFFDE6">1000000</td>
				<td></td>
			</tr>
			<tr>
				<td>Size Order (USD)</td>
				<td bgcolor="#FFFDE6">15</td>
				<td></td>
			</tr>
			<tr>
				<th rowSpan="7">ONE TIME</th>
				<td>Ratio Initial Supply %</td>
				<td bgcolor="#FFFDE6"></td>
				<td></td>
			</tr>
			<tr>
				<td>Percent Project %</td>
				<td bgcolor="#FFFDE6">10</td>
				<td></td>
			</tr>
			<tr>
				<td>Percent ICOs %</td>
				<td bgcolor="#FFFDE6">67</td>
				<td></td>
			</tr>
			<tr>
				<td>ICO Bonus</td>
				<td bgcolor="#FFFDE6">5</td>
				<td></td>
			</tr>
			<tr>
				<td>1 - Project Allocation</td>
				<td>1500000</td>
				<td>Num Orders * Size Order * Percent Project</td>
			</tr>
			<tr>
				<td>2 - Initial Fundraising</td>
				<td>9547500</td>
				<td>Num Orders * Size Order * Percent Fundraising / ICO Bonus</td>
			</tr>
			<tr>
				<th>TOTAL ONE TIME</th>
				<th>11047500</th>
				<td></td>
			</tr>
			<tr>
				<th rowSpan="3">BORROWED</th>
				<td>Leverage</td>
				<td bgcolor="#FFFDE6">5</td>
				<td>Num Orders * Size Order * Leverage</td>
			</tr>
			<tr>
				<td>3 - DeFi Services Allocation</td>
				<td>75000000</td>
				<td></td>
			</tr>
			<tr>
				<th>TOTAL BORROWED</th>
				<th>75000000</th>
				<td></td>
			</tr>
			<tr>
				<th rowSpan="8">CONTINUOUS</th>
				<td>Transaction Fees %</td>
				<td bgcolor="#FFFDE6">1</td>
				<td></td>
			</tr>
			<tr>
				<td>Ratio Transactions-Orders Period</td>
				<td bgcolor="#FFFDE6">0.3</td>
				<td></td>
			</tr>
			<tr>
				<td>Lending Fees %</td>
				<td bgcolor="#FFFDE6">1</td>
				<td></td>
			</tr>
			<tr>
				<td>Transfer Fees %</td>
				<td bgcolor="#FFFDE6">1</td>
				<td></td>
			</tr>
			<tr>
				<td>4 - Transaction Fees</td>
				<td>45000</td>
				<td>Num Transactions * Transaction Fees</td>
			</tr>
			<tr>
				<td>5 - Lending Fees</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>6 - Transfer Fees</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<th>TOTAL PER PERIOD</th>
				<th>45000</th>
				<td></td>
			</tr>
		</tbody>
	</table>
</div>
<br/>

### 15.2. Benchmarks


### 15.3. Simulation


<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>



## 16. Supporting Tools
---

### 16.6. DAppmin

https://github.com/Catallactic/catallactic-admin

### 16.6. ICO Purchases DApp


### 16.6. Vesting Tracker









<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>




## 17. Conclusion
---

We have exposed how a novel kind of token which takes the best of Stablecoins and best of Utility Tokens can be created. 

The token borrows from Stablecoins the concept of stabilization mechanim. However, differs to Stablecoins in how to form the price. This new token forms its own price by capturing the value generated in an underling market. This complies with initial blockchain promises of decentralizacion in value. The stabilization mechanism provides to the token a foundation to fulfill currency based utilities a payment, card, lending or transfer.

On the other hand, the new token also borrows from utility tokens the notion of funding rounds. This allows any issuer to fund his project, either globally or locally, and offer additional services to the society as defi services. The model is open to staking, launchapd, or other defi services.

We have also covered how this new token can be implemented as a diamond standard, managed by the issuing team and what are the main requirements (security, decentralization, compliance, privacy and transparency) and challenges (velocity of circulation and wallets) for its adoption.

Finally we have described how the adoption of this new token could empower the squish real economy.

<br/><br/><div className="divider div-transparent div-dot"></div><br/><br/><br/>


## 18. References
---


[1] ERC-2535: Diamonds, Multi-Facet Proxy, 2020-02-22, Nick Mudge - https://eips.ethereum.org/EIPS/eip-2535

[2] Factors of decentralization of web3 protocols: Tools for planning greater decentralization, Miles JenningsStephen WinkAdam Zuckerman, 5.31.23 - https://a16zcrypto.com/posts/article/decentralization-factors-web3-protocols-tables/

[3] https://www.liquifi.finance/post/token-vesting-and-allocation-benchmarks

[4] https://lstephanian.mirror.xyz/kB9Jz_5joqbY0ePO8rU1NNDKhiqvzU6OWyYsbSA-Kcc

[5] Token Vesting and Allocations Industry Benchmarks, 2022 - https://www.liquifi.finance/post/token-vesting-and-allocation-benchmarks

[6] How centralized is decentralized? Comparison of wealth distribution in coins and tokens, Bartosz Kusmierz, Roman Overko, https://arxiv.org/pdf/2207.01340.pdf

https://www.iwsfintech.com/post/ieo-imo-ido-ido-2-ico-rico-ico-2-uto-icco-sto-ato-trmi-daico-eto-ifo-iao-dso-steo

[7] DeFi lending: intermediation without information?, Sirio Aramonte, Sebastian Doerr, Wenqian Huang, Andreas Schrimpf, 14 June 2022 - https://www.bis.org/publ/bisbull57.pdf

[8] An impossibility theorem on truth-telling in fully decentralized systems by Rodney Garratt and Cyril Monnet, August 2023 - https://www.bis.org/publ/work1117.pdf 

[9] Standard Allocation: Trends and Industry in 2023 of TokenUnlocks, Pondspective - Dec 7, 2023 - https://insights.unlocks.app/tokenunlocks-standard-allocation/

[10] Token Vesting and Allocations Industry Benchmarks, Robin Ji, Liquifi, June 8, 2022 - https://www.liquifi.finance/post/token-vesting-and-allocation-benchmarks

[11] How To Structure Token Allocations For An ICO, Max Yampolsky, Dec 6, 2021 - https://medium.com/w3blabs/how-to-structure-token-allocations-for-an-ico-92f0a43a59ad

[12] The Two Cap Tables of Crypto Companies: What They Are and How They Relate to Each Other, Oct 11, 2021, Tomasz Tunguz - https://tomtunguz.com/equity-cap-table-vs-token-cap-table/

[13] Crypto Companies Insider Ownership is Approaching that of Classic Startups, Oct 3, 2021, Tomasz Tunguz - https://tomtunguz.com/l1-ownership-over-time/

[14] Optimizing Your Token Distribution, Lauren Stephanian, January 4th - 2022https://lstephanian.mirror.xyz/kB9Jz_5joqbY0ePO8rU1NNDKhiqvzU6OWyYsbSA-Kcc

[15] Can a Stablecoin Be Collateralized by a Fully Decentralized, Physical Asset? Cryptoeconomic Systems, Murialdo, M., & Belof, J. L. (2022). https://cryptoeconomicsystems.pubpub.org/pub/murialdo-physical-asset-stablecoin/release/2

[16] https://medium.com/@cburniske/the-crypto-j-curve-be5fdddafa26