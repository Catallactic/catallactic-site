---
slug: Whitepaper
title: Whitepaper
authors: [catallactic, pellyadolfo]
tags: [crypto, RWA, tokenization]
image: https://i.imgur.com/mErPwqL.png
---
---

import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(annotationPlugin);
// https://github.com/chartjs/chartjs-plugin-annotation/issues/786
import { Line } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';


:::danger
`(Under development. Please, come back later. Just published to share the progress)`
:::

## 1. Introduction
---

The following whitepaper proposes a novel kind of token, CryptoCommodity.  Whereas maintaniing an stabilization mechanism to work as a currency, CryptoCommodities assume a built-in ecosystem that allows to form its own prices. Currencies forming their own prices deliver the true foundation for a decentralization in value, as a core principle in the blockchain industry. Additionally, forming its own prices is an empowering factor for the real economy. CryptoCommodities have being designed to allow its issuer raising capital in funding rounds to create his real economy project.

We describe how CryptoCommodities work, what are the stages, the utilities, the requirements, the challenges, the distribution mechanims and opportunities which bring for issuers, adopters and the whole society.

This project tries to provide direction to crypto as we think it currently is in the wrong path from the initial principles for which blockchain was created.

<!-- truncate -->

## 2. CryptoCommodites
---

### 2.1. Evolution of Money

Before money, there was <b>barter</b>. Goods were produced by those who were good at it, and their surpluses were exchanged for the products of others. Every product had its barter price in terms of all other products, and every person gained by exchanging something he needed less for a product he needed more. The voluntary market economy became a latticework of mutually beneficial exchanges. In barter, there were severe limitations on the scope of exchange and therefore on production. This crucial element in barter is what is called the double
coincidence of wants. A second problem is one of indivisibilities. [0]

Trying to overcome the limitations of barter, commodity began to be used as a medium of exchange. When a commodity is used as a medium for most or all exchanges, that commodity is defined as being a money. [0] Money made up of some valuable commodity is called commodity money, and from ancient times until several hundred years ago <b>commodity money</b> functioned as the medium of exchange in all but the most primitive societies. The problem with a payments system based exclusively on commodities is that such a form of money is very heavy and is hard to transport from one place to another.

<table>
  <tr>
    <td><img src="https://gasclick.pe/img/money_type_barter_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_commodity_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_backed_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_metal_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_fiat_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_crypto_128.png" /></td>
  </tr>
  <tr>
    <td>Barter</td>
    <td>Commodity</td>
    <td>Representative</td>
    <td>Standard</td>
    <td>Fiat</td>
    <td>Crypto</td>
  </tr>
</table>
<br/>

Once a commodity has been widely accepted for exchanges, it may take on a value as money that is independent of the value of the commodity of which it is composed. At the extreme, what can be called token money may have no commodity value whatsoever. It may also be called <b>representative money</b> in the sense that represents or be a claim on the commodity. Representative money that has no intrinsic value, but is a certificate or token that can be exchanged for the underlying commodity. 

As a monetary economy evolved, a particular commodity (e.g. gold) came to become generally accepted as a reference to express all prices in terms of units of that commodity. This was the advent of the <b>monetary standard</b>. At this stage banks began to appear which issued paper substitutes for gold, and these paper substitutes—notes and deposits—had the advantage of being easier to store and move around. These advantages led to notes and deposits gradually replacing gold as media of exchange, but they continued to be expressed in terms of units of gold and to be redeemable on demand into gold. Gold therefore continued to be the monetary standard even though it gradually lost its role as a medium of exchange. [9]

### 2.2. Representative Money

Representative money or token money is any medium of exchange that <b>represents something of value</b>, typically a commodity. 

Earlier classifications in the history of money made of the useful distinction between money of <b>“intrinsic” and “extrinsic” value</b>. Intrinsic fall-back value of token money is virtually zero as a commodity. At the other extreme, the value of representative money is inherited for the represented commodity. Value on a commodity by the esteem in which it is held as measured by outside valuations that relate demand to supply, i.e., by scarcity. [32]

The earliest form of representative money consisted of <b>small pieces of leather</b>, usually marked with an offical seal. [-1] It was understood that the certificate could be redeemed by the commodity at any time. Also, the certificate was easier and safer to carry than the actual commodity. Over time people grew to trust the paper certificates as much as the commodity.

There is no concrete evidence that the <b>clay tokens</b> used as an accounting tool to keep track of warehouse stores in ancient Mesopotamia were also used as representative money.However, the idea has been suggested. [32]

The introduction of coinage, or <b>metal based</b> representative money, marks an important innovation in the history of money and a transition in the development of civilization itself. Coinage was probably invented in Asia Minor in the seventh century BC and it rapidly spread throughout the Mediterranean area. The earliest coins were made of electrum and had punch marks and some kind of identifying device. [32]

Paper currency first developed in Tang dynasty China during the 7th century, where it was called "'flying money'", although true <b>paper money</b> did not appear until the 11th century, during the Song dynasty. The use of paper currency later spread throughout the Mongol Empire or Yuan dynasty China. European explorers like Marco Polo introduced the concept in Europe during the 13th century.

Today, <b>gold or silver certificates</b>, for example, which are claims on precise amounts of gold or silver, could be also called representative money.	

The advent of <b>blockchain technologies</b> and programmable money in 2009 provides a novel support for representative money with enhanced features, as we will discuss in this document.

### 2.3. Functions of Money

In almost all market transactions in our economy, money in the form of currency or cheques is a <b>medium of exchange</b>; it is used to pay for goods and services. The use of money as a medium of exchange promotes economic efficiency by eliminating much of the time spent in exchanging goods and services.

Money also functions as a <b>store of value</b>; it is a repository of purchasing power over time. A store of value is used to save purchasing power from the time income is received until the time it is spent. This function of money is useful because most of us do not want to spend our income immediately upon receiving it but rather prefer to wait until we have the time or the desire to shop. Commodity money has an exchange value because if not used as money it can be used as a commodity.

The gold standard as a <b>Unit of Account</b> suffered from gold's fluctuating relative value and the costly need to redeem money for gold. [12]

### 2.4. CryptoCommodity

CryptoCommodities are representative tokens in the electronic form. CryptoCommodities are a specialization of Utility Tokens, built on top of a fungible asset to create a Currency Token. CryptoCommodities capture the underlying asset economic value to deliver the 3 main functions of money in the same Currency Token. 

<div style={{textAlign: 'center'}}>
	<img src="/img/cryptocommodities_scope3.svg" width="100%"></img>
</div>
<br/>

CryptoCommodities are built on clear principle of compliance, transparency, privacy, security and decentralization with the mission to provide a tool to bost real economy, in particular, in regions with financial exclusion.

CryptoCommodities are designed to be applied in both, local or international scopes, as long as there is enough supply in the scope of application. CryptoCommodities promote an atmosphere of investment and entrepreneurship to empower citizens to solve their own problems.

Despite CryptoCommodities aim to deliver all money functions and become high quality currencies, they do not ambition to be used as monetary standard. Instead CryptoCommodities are born with the vocation to participate in private currency competition. As a consequence, they can be priced in any coexisting monetary standard, no matter if this is a legal tender or a social agreement. Their mission is to represents the value of the underlaying asset and ignore any aspect external to the underlying asset.

### 2.5. CryptoCommodity Ecosystem

CryptoCommodity is built on a fungible asset that can be extracted, manufactured and/or transformed, commercialized and/or serviced. A CryptoCommodity has a built-in stabilization mechamism, in coordination with the exchange, to capture the value of the asset from the upderlying  market. As a consequence, a CryptoCommodity includes a price formation within its ecosystem. 

<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem_before.svg" width="80%"></img>
</div>
<br/>

The price formation is dynamic, which means, is in a continual revision. The purchasing power of the currency will growth in relation to other currencies as long the issuer is providing incremental value to the society. If the provider denies to provide value, the CryptoCommodity value will fall, and its purchasing power will be reduced. As a consequence consumers will prefer other currencies. This will encourage the issuer to provide the best practies and a environment of wealth.

The value extracted from the undelying asset by the CryptoCommodity issuer will be delivered to the society in the form of DeFi Services.

We will discuss about the underlying asset in the next section.

### 2.6. CryptoCommodity vs Fiat Stablecoin

The only Token Model that has the purpose to become a currency today is the Stablecoin. Find below differences between CryptoCommodity and Stablecoin.

|                                 | Fiat Stablecoin                                             | CryptoCommodity                                                               |
| :-------------------------------| :-----------------------------------------------------------| :-----------------------------------------------------------------------------|
| Backed by                       | Physical, digital, financial asset                          | Underlying market of fungible physical or digital asset                       |
| Collateralized by               | Multiple                                                    | Underlying market of fungible physical or digital asset                       |
| Price Formation                 | Pegged to Fiat Price of asset in internacional market       | Pegged to economic value of asset in underlying market. Decoupled from fiat   |
| Scope                           | Mostly Global														                    | Local or Global                                                               |
| Value Decentralized?            | No, pegged to fiat prices				                            | Yes, forms its own price                                                      |
| Process Decentralized?          | No, manual stabilization					                          | Yes, built-in automated stabilization                                         |
| Decisions Decentralized?        | No, opaque decisions  			   		                          | Yes, releasing to the community when possible                                 |
| Disclosures  										| No                                                          | Yes, full disclosure                                                          |
| Allows project funding?         | No                                                          | Yes                                                                           |
| Collateral on inception needed? | Yes                                                         | No                                                                            |
| Provides credit? 				        | Yes, with social risk                                       | Yes, with private risk                                                        |




<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>



## 3. CryptoCommodity as Currency
---

In this section we will discuss the requirements that enable CryptoCommodity to fulfill its main functions, namely to serve as a medium of exchange, as a store of wealth, and unit of  account. That is to increase its demand.

### 3.2. Quality of Money

The quality of money is defined as the capacity of money, as perceived by actors, to fulfill its main functions, namely to serve as a medium of exchange, as a store of wealth, and unit of  account. The theory of the quality of money maintains that the <b>demand for money does depend on the quality of money</b>.

The theory of the quality of money, even though not under this label, has a long tradition. While many authors have discussed the factors influences the quality of money, no unifying consensus has ever been established. From Juan de Mariana (1609), Sir William Petty (1662), Adam Smith (1776), Jean Baptiste Say (1802), Nassau William Senior (1850), John Stuart Mill (1848), Carl Menger (1871), William Stanley Jevons’s (1875), Mises (1953), Rothbard (2004) provide different insights on the quality of money.

The price of money is its purchasing power. As any price, the price of money is determined by its supply and demand. <b>The demand for money is determined by its marginal utility. The utility of money is, in turn, determined by money’s quality, i.e., its capacity to fulfill its services.</b>

One of the most important properties for the quality of money is the <b>existence of a non-monetary demand in society for the money</b>. This demand can be in the form of consumption goods or factors of production. It is important for the quality of money that its non-monetary demand plays an essential role in society—everyone wants and needs it. The money is not only demanded as a medium of exchange but also for other purposes. Thus, for money, as a good, there exist many unsatisfied wants and the intensity of the wants are relatively high and permanent (Menger 1892, p. 5). <b>The non-monetary demand is important because it gives the money holder an “insurance.”</b>. 

<table>
  <tr>
    <td>Quality</td>
    <td>Authors</td>
    <td>Mean of Exchange</td>
    <td>Store of Value</td>
    <td>Unit of Account</td>
  </tr>
  <tr>
    <td>Uniform</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Divisible</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Scarce</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Durable</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Portable</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Acceptable</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Recognised</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
</table>

### 3.3. Quantity Theory of Money

In contrast to the hesitant qualitative monetary analysis by the economists mentioned above, there is also a current in the economic literature that does not treat qualitative issues at all. This is the simple quantity theory of money. The theory was originally formulated by Nicolaus Copernicus in 1517, whereas others mention Martín de Azpilcueta and Jean Bodin as independent originators of the theory. John Locke studied the velocity of circulation, and David Hume in 1752 used the quantity theory to develop his price–specie flow mechanism explaining balance of payments adjustments. Also Henry Thornton, John Stuart Mill and Simon Newcomb among others contributed to the development of the quantity theory. The quantity theory of money is the <b>heart of neoclassical monetary theory</b>. It has later been discussed and developed by several prominent thinkers and economists including John Locke, David Hume, Irving Fisher and Alfred Marshall. Milton Friedman made a restatement of the theory in 1956 and made it into a <b>cornerstone of monetarist</b> thinking.

The quantity theory of money is most often expressed and explained by reference to the <b>equation of exchange</b>. The equation of exchange was derived by economist John Stuart Mill. The equation states that the total amount of money that changes hands in an economy will always be equal to the total monetary value of goods and services that changes hands in an economy. In other words, the amount of nominal spending will always be equal to the amount of nominal income. The equation is as follows:

<div style={{textAlign: 'center'}}>
	<img src="https://cdn.corporatefinanceinstitute.com/assets/equation-of-exchange1.png" width="60%"></img>
</div>

The <b>velocity of money</b> is a measurement of the rate at which money is exchanged in an economy. It is the number of times that money moves from one entity to another. The velocity of money also refers to how much a unit of currency is used in a given period of time. Simply put, it's the rate at which consumers and businesses in an economy collectively spend money. The velocity of money is usually measured as a ratio of gross domestic product (GDP) to a country's M1 or M2 money supply.


### 3.4. CryptoCommodity as Currency

Quantity Theory of Money does not reconciliate well with crypto. As Hayek claimed 

> The quantity theory presupposes that there is only one kind of money in circulation within a given territory, the quantity of which can be ascertained by counting its homogeneous (or near-homogeneous) units". This is not the case for private money issued in a competence reguime. 

This means Fisher's Exchange Equation or Velocity of Money (Token Velocity) are not theories of application for Utility Tokens and, therefore, for competing CryptoCommodities.

Despite Adam Smith proposed the so-called real bills doctrine, or a quality theory of money, in the Wealth of Nations, there is not a Quality Theory of Money development in the classic bibliography. There are papers on what should be The Quality of Money but there is not a unified theory. Additionally, if there would be a Quality Theory of Money it should need to be updated to cope with electronic means, internet, blockchain and cryptocurrencies advent. Therefore, we must retake the existing work on Quality of Money and propose a unified Quality Theory of Money within CryptoCommodity design.

### 3.5. CryptoCommodity as Quality Currency

In order to create a unified Quality Theory of Money we must start by identifying the functions that will be convered as every function would have different quality requirements.

To work as a Mean of Payment:

* comply with requirement or physical money, that is, <b>Uniform</b>, <b>Divisible</b>, <b>Portable</b>, <b>Durable</b>, <b>Scarce</b>. This is not a problm or an smart contract

* the token must be <b>Aceptable</b> and <b>Recognised</b>. This is beyond the design itself and raises 2 challenges: the velocity of circulation and the usability of the wallets.

* the token must <b>Comply with the regulations</b> in the jurisdictions where is deployed. This must be enforced by the design

* the token optionally can provide <b>Privacy</b> to its users, considering the regulation. This must be enforced by the design

To work as Store of Value:

* the price of the token must be <b>Stable price</b> to enable further utilities. This must be enforced by the design

* the token must be <b>Secure</b> and not subject to any hack. This must be enforced by the design

* the token must be <b>Decentralized</b> which means no one, even the issuer, should be able to interfere its behaviour. This must be enforced by the design

* the token must be <b>Transparent</b> and disclose all the required information to issuers, holders and regulators. This must be enforced by the design

To work as Unit of Account:

* differently to a stablecoin, a UoA needs an <b>Underlying market</b> for price formation. This must be enforced by the design

* the underlying asset must be <b>Fungible</b>. This must be enforced by the design

Additionally, the above requirements must be customized to every stage of the value chain and to each juridiction, undelying asset and utilities delivered, i.e. there must be a case by case analysis, but also a minimum set of requirements should be defined. From the list above we can collect the 7 challenges for cryptocommodities adoption in mainstream.

We will discuss all the requirements that makes up a quality curency in the implementation section.

### 3.6. The ideal underlying asset

The Regression Theorem, first proposed by Ludwig von Mises in his 1912 book The Theory of Money and Credit, states that the value of money can be traced back ("regressed") to its value as a commodity. 

To be eligible as underlaying asset within the CryptoCommodities framework, the asset must be fungible. It can be of any nature, physical, natural, digital and there must some kind of service provided for the asset, as purchase or rent. 

<table>
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
</table>
<br/>

Despite a value capture mechanism can be applied to any other assets than commodities, some requirements made commodities specially suitable.

Additionally, the price is formed in the basis of a service. Some services that are suitable include:

<table>
  <tr>
    <td rowSpan={2}>Service</td>
    <td>Acquisition</td>
    <td></td>
  </tr>
  <tr>
    <td>Rent</td>
    <td></td>
  </tr>
</table>
<br/>

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>






## 4. The CryptoCommodity Value Chain
---

A CryptoCommodity takes economic value from nature and delivers to the adopting society. In this section we will review what is the lifecycle of a CryptoCommodity and how can interact with the different actors of the society. We also discuss how it can benefit each party.

### 4.1. CryptoCommodity Lifecycle

<div style={{textAlign: 'center'}}>
	<img src="/img/token_value_chain2.svg" width="100%"></img>
</div>

All the requirements described must be particularized for each stage of the CryptoCommodity Value Chain. for example, the compliance in the funding stage is not the same as the compiance in the distribution stage. In this section we will explore every funding stage and discuss requirements and opportunities.

### 4.2. Funding

Differently to a stablecoin, which must provision the collateral corresponding to initial supply on inception, CryptoCommodity Framework provides to the issuer the infrastructure to fund his project. Any person can propose a real world project backed by fungible assets, design a token and launch a funding campaign to fund the project. Will do an ICO.

#### 4.2.1. Structuring Funding Plan

Structuring of ICO offerings varies across projects in regards to the number of tokens issued; the proportion maintained as compared to the one distributed to investors; the allocation mechanisms; the future supply of tokens; and the sale model used. The schedule of token issuance, if tokens are not issued in a single issuance, needs to be clarified by the issuer upfront. 
[45]

Essentially there are 3 kind of funding rounds:

- private rounds

- presales

- crowdsales

Most ICO offerings are capped, placing a ceiling on the amount they wish to raise which is in turn translated into a cap in the number of tokens that will be issued. Uncapped ICOs
run the risk of token "inflation", with the value of existing tokens being eroded with every new token issuance. This effect is similar to the dilution to which equity-holders are subjected to. [45]



#### 4.2.2. Calculating Investors Profit

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/price_estimations_black.svg" width="70%"></img>
</div>




#### 4.2.4. Estimating Investors Exit

Investors in Funding Rounds will get the max profit for his investment on the Value Capture Event. The Vauek Capture Event is defined when the price of the CryptoCommodity matches the value of the underlying asset. This can be verified when the number of CryptoCommodity units in the exchanges matches the demand.

To track this variable, CryptoCommodity keeps a record of the address of all exchanges where it is deployed and traded. It is required to provide tools that allow estimating this exit according to the CryptoCommodity configuration.

<div className="chart-panel2">
<Line
  data={{
		labels: ['Jul 23','Jan 24','Jul 24','Jan 25','Jul 25','Jan 26','Jul 26','Jan 27','Jul 27','Jan 28','Jul 28','Jan 29','Jul 29','Jan 30'],
		datasets: [{
			fill: false,
			label: 'Monthly Orders',					      
			backgroundColor: "rgba(0,205,0,1.0)",
			borderColor: "rgba(0,205,0,1.0)",
			data: [3.3767,3.4101999999999992,3.4604499999999994,3.7348249999999994,4.1463875,4.94389375,6.119801875,7.5313824375000005,9.49346716875,12.669471635625001,17.039759874187503,21.78394261160625,28.321657647766877,33.62241638722005,40.2159551823556,47.50951739847232,56.66939440361597,61.05999837441922,65.83860932352047,70.84599921933153,76.2910692632621,79.34271203379257,]
		}, {
			fill: false,
			label: 'Supply with Vesting',
			backgroundColor: "rgba(0,0,205,1.0)",
			borderColor: "rgba(0,0,0,0.1)",
			// backgroundColor: "rgba(0,0,205,1.0)",
			//borderColor: "rgba(0,0,205,1.0)",
			//borderWidth: 0.4,
			//pointRadius: 0,
			data: [14,28.5,57.5,79,90.5,97.5,100,100,100,100,100,100,100,100,100,100,100]
		}, {
			fill: false,
			label: 'Investors Wallets',
			backgroundColor: "rgba(0,0,205,1.0)",
			borderColor: "rgba(0,0,0,0.1)",
			data: [7,14.25,28.75,39.5,45.25,48.75,50,50,50,50,50,50,50,50,50,50,50,50,]
		}, {
			fill: false,
			label: 'Consumer Wallets',
			backgroundColor: "rgba(0,0,205,1.0)",
			borderColor: "rgba(0,0,0,0.1)",
			data: [0.33767,0.34102,0.34604500000000005,0.37348250000000005,0.41463875000000006,0.494389375,0.6119801875000002,0.7531382437500002,0.9493467168750002,1.2669471635625,1.7039759874187503,2.1783942611606246,2.832165764776688,3.3622416387220055,4.021595518235561,4.750951739847232,5.666939440361597,6.105999837441924,6.5838609323520485,7.084599921933155,7.62910692632621,7.934271203379257,]
		}, {
			fill: false,
			label: 'Discount Cards',
			backgroundColor: "rgba(0,0,205,1.0)",
			borderColor: "rgba(0,0,0,0.1)",
			data: [9,9,9,9,9,9.5,10.25,11.875,14.3125,17.9625,23.235,31.354,42.933099999999996,57.06672,76.50086399999999,98.5105368,127.87594415999999,157.437374976,195.71541615360002,233.88410416896,281.97049026585603,323.5478320924416,371.9589666616858,420.3569689278543,475.8351925406398,523.4187117947039,]
		}, {
			fill: false,
			label: 'Held in Exchanges',
			backgroundColor: "rgba(205,0,0,1.0)",
			borderColor: "rgba(205,0,0,1.0)",
			data: [-2.33767,4.90898,19.403955,30.1265175,35.83536125,38.755610625,39.1380198125,37.37186175625,34.738153283125,30.770552836437503,25.06102401258125,16.467605738839374,4.234734235223314,-10.428961638722,-30.52245951823555,-53.26148853984723,-83.54288360036159,]
		}],
	}}
	options={{
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				min: 0,
				max: 120,
				stacked: false,
				title: {
					display: true,
					text: 'Total Supply',
					font: {
						family: 'Comic Sans MS',
						size: 20,
						weight: 'bold',
						lineHeight: 1.2,
					},
				},
				ticks: {
					display: false,
				},
			},
			x: {
				display: true,
				title: {
				display: true,
				text: 'Months from TGE',
					font: {
						family: 'Comic Sans MS',
						size: 20,
						weight: 'bold',
						lineHeight: 1.2,
					},
				},
				ticks: {
					display: false,
				},
			},
			y2: {
				min: 0,
				max: 120,
				display: true,
				position: 'right',
				title: {
					display: true,
					text: 'Monthly Orders',
					font: {
						family: 'Comic Sans MS',
						size: 20,
						weight: 'bold',
						lineHeight: 1.2,
					},
					color: "rgba(0,205,0,1.0)",
				},
				ticks: {
					color: "rgba(0,205,0,1.0)",
					display: false,
				},
				grid: {
					drawOnChartArea: false, // only want the grid lines for one axis to show up
				},
			},
		},
		plugins: {
			annotation: {
				annotations: [{
					type: 'line',
					xMin: 10.6,
					xMax: 10.6,
					borderColor: 'rgb(255, 99, 132)',
					borderWidth: 2,
				}, {
					type: 'label',
					xValue: 10.6,
					yValue: 40,
					content: ['Value','Capture','Event'],
					backgroundColor: 'rgba(245,245,245)',
					font: {
						size: 18
					}
				}, {
					type: 'point',
					xValue: 10.6,
					yValue: 20,
					backgroundColor: 'rgba(255, 99, 132, 0.25)'
				}]
			}
		}
	}}
	plugins={[/*ChartDataLabels*/]}
/>
</div>

#### 4.2.5. Chossing Funding Platform

Existing IDO portals are generalistic and do not play well with real worl projects. CryptoCommodity Framework provides a foundation to build ICO tools which match launching of real world projects. A custom launchpad is build-in in dAppmin.

#### 4.2.6. Considerations for Funding

On launching a CryptoCommodity, the monetary policy will follow an Utility Token pattern so not a collateral will be initially required by law. This makes launching a currency friendly for any citizen which has a real world project.

Special attention must be paid to compliance.


### 4.3. Negotiation

Differently to a stablecoin, which is stabilized to capture the fiat price of the static asset from a broad external market, CryptoCommodity Framework includes a stabilization mechanism that allows the token to capture the economic value of the underlying from its own market. This provides a valuable tool to boost real economy.

#### 4.3.1. Mechanism

Typically negotiation happened by allocating tokn unit to xchang pair. Th xchang i in charg to orm th pric with th xiting pair.

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/price_determination2.svg" width="70%"></img>
</div>

In ord to implnt th tabilization mchanim, a rrv account mut back vry xchang pair. Tokn will b puld rom th rrv account to h pair whn i ncary to provid liuidity to rduc th pric. Convrly, tokn will b olvd rom th pair to th rrv account whn i ncary to rduc liuidity to th pair in ordr to rduc th pric.

#### 4.3.1. Considerations for Negotiation

Negotiation is highly impacted by <b>decentralization</b> as it may affects the price of the asset and the reputation of the issuer.

Depending on the scope of the CryptoCommodity, <b>compliance</b> may also have to be considered as some juritdiction impose restrictive rules on investment accounts, trading diclosure or governance of the contract. A record must be kept of compliance reuirement in the juridictions to deploy and CryptoCommodity must allow reconfiguration of the compliance.

<b>Security</b> is another aspect to consider since token unit will be deployed to exchange pair and thereore subject to vulnerabilities.

The system must care about the reputation of the CryptoCommodity by enabling <b>transparency</b>. full diclosure must be provided on operation

Finally, optionally <b>privacy</b> should be included on the CryptoCommodity and lt to the consideration of the issuer according to compliance rule and personal prefFerences.

### 4.4. Distribution

Distribution is the process of handling over new CryptoCommodity units. There are 2 targets of distribution:

- genesis distribution, which refers to token units initially premined to launch the system. Includes funding round investors, team and collaborators, liquidty pools and reserves

- ongoing distribution, which refers to token units ditributed during the system operation, with operation or marketing purposes.


#### 4.4.1. Genesis Distribution



##### 4.4.1.1. Fair Launch

No premined tokens for funding or project


##### 4.4.1.2. Premined Distribution 

##### 4.4.1.3. Vesting Schedules

No premined tokens for funding or project

With the purpose of preventing overflow in the exchanges of tokens purchased during the funding rounds on the TG, a CryptoCommodity has the potential to run vesting schedules on the purchased tokens. With or without vesting, there will be a Release Schedule. Whereas more knowledge needs to be acquired about the best practices on vesting, the funcionality is provided by the CryptoCommodity Framework.

Mitigate sell pressure

export const SupplyProfileChart = () => {
	const pp = 1;
	function vesting(numSamples, numTokensTGE, cliff, numTokensTotal, period) {
		const amounts = [numTokensTGE];
		for (let i = 1; i <= numSamples; i += 1) {
			let data = 0;
			if(i <= cliff) data = numTokensTGE;
			else if(i >= cliff + period) data = numTokensTotal;
			else data = numTokensTGE + (i-cliff) * (numTokensTotal - numTokensTGE) / period;
			amounts.push(data);
		}
		console.log(amounts);
			return amounts;
	}
	return (
		<div className="chart-panel2">
			<Line
				data={{
					labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
					datasets: [{
						fill: true,
						label: 'Seed Round',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 0, 12, 10, 24),
					},{
						fill: true,
						label: 'Pre-Sale',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 4, 3, 40, 24)
					},{
						fill: true,
						label: 'Public-Sale',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 10, 3, 50, 12)
					},{
						fill: true,
						label: 'Exchanges',
						backgroundColor: "#006400",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 8, 12, 40, 48)
					},{
						fill: true,
						label: 'Project',
						backgroundColor: "rgba(0,0,205,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 0, 3, 10, 12)
					}],
				}}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						y: {
							min: 0,
							max: 160,
							display: true,
							stacked: true,
							title: {
								display: true,
								text: 'Total Supply',
								font: {
									family: 'Comic Sans MS',
									size: 20,
									weight: 'bold',
									lineHeight: 1.2,
								},
							},
							ticks: {
								display: false,
							},
						},
						x: {
							display: true,
							title: {
								display: true,
								text: 'Months from TGE',
								font: {
									family: 'Comic Sans MS',
									size: 20,
									weight: 'bold',
									lineHeight: 1.2,
								},
							},
							ticks: {
								display: false,
							},
						},
					}
				}}
				plugins={[/*ChartDataLabels*/]}
			/>
		</div>
	);
}

<SupplyProfileChart/>

#### 4.4.2. Ongoing Distribution

##### 4.4.2.1. Marketing

There are several distribution schemes that can be applied in different stages of a CryptoCommodity:


- Airdrops. The main purpose of airdrops is to kick-start the creation of a community of token-holders before or together with the ICO, or to boost the network effects of already created networks. Airdrops are used for marketing purposes; to raise awareness of a new token; drive more participants to the issuance; but also reward existing participants/token-holders for their loyalty, their active engagement in the network or for bulk purchases. [45]

- Giveaway

Is probably up to the issuer the selection of the distribution mechanims that he wants to provide but we should acomplish a full database of use cases and recommendations.

##### 4.4.2.2. Commodity Purchases

- Tokens must be purchasesd by consumers



#### 4.4.4. Wealth Distribution

whales gini


#### 4.4.5. Considerations for Distribution

An important reuirement to distribute tokens in a jurisdiction is that there should not be rules preventing currency utilities, e.g. the CryptoCommodity must be allowed as a <b>payment method</b>, if this utility is going to be provided.

Another consideration is to prevent high concentration of token units in some wallets. In particular prevent the ocurrence of <b>whales</b> as they can harm the investors experience and the reputation of the CryptoCommodity. If possible, the Gini Coefficient must be controlled. Preventing whales affects to all stages of distributionm including funding, negotiation.

### 4.5. DeFi Services

By using the CryptoCommodity a heartbit of the marketplace, we can extract the economic value of the asset and this will allows to provide addtional benefits to the community. 


#### 4.5.1. Currency Functions

First it will make a fully featured currency which will empower the community. 

- Medium of Exchange

- Reserve of Value

- Unit of Account

#### 4.5.2. Currency Services

Besides providing a currency, the CryptoCommodity will work a foundation for additional financial services so, other citizens can propose their own CryptoCommoditi project, create their own CryptoCommodity and increae the wealt of the system.

#### 4.5.2.1. Payments

Thanks to its stable nature, a CryptoCommodity can be used for payments for good and services. 

It needs to be as payment method for the underlying market in order to form the price.

It can also be used as payment method for other assets as long as commonly accepted by moth parties.

#### 4.5.2.2. Cards

Currently there are cards, both already compatible with crypto currencies. 

#### 4.5.2.3. Transfers

CryptoCommodities can participate in transfers as remittances, international transfers as long as is accepted.

#### 4.5.2.4. Lending

Credit is the main reason that motivated the obsolescence of gold standard and introduction of fiat currencies. The problem of credit with the legal tender is that risk is collectivized. CryptoCommodities, as private money, allow lending with the benefit that the irsk is privatized, not affecting to the society as a whoe. 

<div style={{textAlign: 'center'}}>
	<img src="/img/credit.png" width="70%"></img>
</div>

A CryptoCommodity can work as collateral of lending operations in existing platforms. A CryptoCommodity coudl also work as payment method for lending on a own lending platform.

### 4.6. Crowdsolving

### 4.7. Who will benefit?

Extracting value from nature and delivering into society to fullfill consumers will will benefit to everyone:

- issuers will be able to fund his local or global project

- issuers will also profit by providing DeFi Services to society

- investors will profit by investing in successful projects

- consumers will benefit with higher offer

- citizens excluded from financial system will be able to fund their projects with private risk

- society will benefit from more liquid financial markets

- citizens from developing countries can create their own economy and fix their problems

- governments will be able to delegate the difficult part into citizens



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>




## 5. Supply Allocations
---

### 5.1. Token Allocation Concepts

Allocation is an allotment of tokens or equity, that may be earned, purchased, or set aside for a certain investor, team, group, organization, or other related entity. 

Typically, the issuer will split the token into different groups and allocate a certain amount of tokens to each group. The way tokens are allocated must align with the project's long-term goals.

There isn't a unified language or consistent definition for token allocations. What one project names "Liquidity Mining Programs" can also be labeled by others "Community Incentives," "Farming Rewards," or "Ecosystem Pool." Some combine teams, partners, and advisors into one "Core Contributors" category, while others separate these groups into distinct categories. We propose below a classification of allocation concepts grouped by stage in the value chain.

There is a also great degree of flexibility in token allocation amounts. The figures are typically determined by what would be considered acceptable based on benchmarks for non-investor token allocation and by bilateral negotiations between the team and the investors. A great token allocation will not ensure a project’s success, a poor one will ensure its failure. 

export const TokenAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Project', 
							'Funding', 'Liquidity', 'Operations', 'Project'
						],
						datasets: [{
								backgroundColor: ['#00FF00', '#00FF00', '#00FF00', '#006400', '#006400', '#FF0000', '#0000FF', '#0000FF'],
								data: [2, 3, 5, 4, 5, 71, 9, 1],
								order: [2, 3, 4, 6, 7, 9, 11, 12],
								index: 0
							}, {
								backgroundColor: ['#00FF00', '#006400', '#FF0000', '#0000FF'],
								data: [10, 9, 71, 10],
								order: [1, 5, 8, 10],
								index: 1
						}]
					}}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						reverse: true,
						plugins: {
							tooltip: {
								callbacks: {
									label: function(context) {
										const labelIndex = (context.datasetIndex * 7) + context.dataIndex;
										return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue + '%';
									}
								}
							},
							legend: {
							position: 'right',
								labels: {
									font: {
										family: 'Comic Sans MS',
										size: 20,
										weight: 'bold',
										lineHeight: 1.2,
									},
									padding: 20,
									generateLabels: function(chart) {
										let datasetColors = chart.data.datasets.map(function(e) {
												return e.backgroundColor;
										}).flat();						        	  
										let orders = chart.data.datasets.map(function(e) {
											return e.order;
										}).flat();
												
										// Get the default label list
										const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
										const labelsOriginal = original.call(this, chart);
										return labelsOriginal.sort((label2, label1) => {
											return orders[label2.index] - orders[label1.index];
										}).filter((label, index, array) => {
											return (datasetColors[label.index] != '#FF0000' && [0, 1, 2, 3, 7].includes(label.index));
										}).map((label) => {
										label.datasetIndex = label.index;
										label.fillStyle = datasetColors[label.index];
												return label;
										});	
									}
								},
								onClick: function(mouseEvent, legendItem, legend) {
									// toggle the visibility of the dataset from what it currently is
									legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
									legend.chart.update();
								}
							}
						}
					}}
				/>
			</div>
		</div>
	);
}

<TokenAllocation/>
<br/>

Token allocations state the issuer intends to grant different amount of tokens to each group. However, this allocation will be different to actual Supply Distribution. 

A convenient way is to prevent overconcentration of tokens in a specific account, or group of accounts, as they would have the power to determine the price of the token and this would imply a reputational cost for the issuer. 

#### 5.2.1. Funding Allocation

A fair launch, without any funding allocation is welcome by the token investors.

export const FundingAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Project', 
							'Funding', 'Liquidity', 'Operations', 'Project'
						],
						datasets: [{
								backgroundColor: ['#00FF00', '#00FF00', '#00FF00', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
								data: [2, 3, 5, 4, 5, 71, 9, 1],
								order: [2, 3, 4, 6, 7, 9, 11, 12],
								index: 0
							}, {
								backgroundColor: ['#00FF00', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
								data: [10, 9, 71, 10],
								order: [1, 5, 8, 10],
								index: 1
						}]
					}}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						reverse: true,
						plugins: {
							tooltip: {
								callbacks: {
									label: function(context) {
										const labelIndex = (context.datasetIndex * 7) + context.dataIndex;
										return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue + '%';
									}
								}
							},
							legend: {
							position: 'right',
								labels: {
									font: {
										family: 'Comic Sans MS',
										size: 20,
										weight: 'bold',
										lineHeight: 1.2,
									},
									padding: 20,
									generateLabels: function(chart) {
										let datasetColors = chart.data.datasets.map(function(e) {
												return e.backgroundColor;
										}).flat();						        	  
										let orders = chart.data.datasets.map(function(e) {
											return e.order;
										}).flat();
												
										// Get the default label list
										const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
										const labelsOriginal = original.call(this, chart);
										return labelsOriginal.sort((label2, label1) => {
											return orders[label2.index] - orders[label1.index];
										}).filter((label, index, array) => {
											return (datasetColors[label.index] != '#FF0000' && [0, 1, 2, 3, 7].includes(label.index));
										}).map((label) => {
										label.datasetIndex = label.index;
										label.fillStyle = datasetColors[label.index];
												return label;
										});	
									}
								},
								onClick: function(mouseEvent, legendItem, legend) {
									// toggle the visibility of the dataset from what it currently is
									legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
									legend.chart.update();
								}
							}
						}
					}}
				/>
			</div>
		</div>
	);
}

<FundingAllocation/>

#### 5.2.2. Negotiation Allocation

export const NegotiationAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Project', 
							'Funding', 'Liquidity', 'Operations', 'Project'
						],
						datasets: [{
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#006400', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
								data: [2, 3, 5, 4, 5, 71, 9, 1],
								order: [2, 3, 4, 6, 7, 9, 11, 12],
								index: 0
							}, {
								backgroundColor: ['#D3D3D3', '#006400', '#D3D3D3', '#D3D3D3'],
								data: [10, 9, 71, 10],
								order: [1, 5, 8, 10],
								index: 1
						}]
					}}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						reverse: true,
						plugins: {
							tooltip: {
								callbacks: {
									label: function(context) {
										const labelIndex = (context.datasetIndex * 7) + context.dataIndex;
										return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue + '%';
									}
								}
							},
							legend: {
							position: 'right',
								labels: {
									font: {
										family: 'Comic Sans MS',
										size: 20,
										weight: 'bold',
										lineHeight: 1.2,
									},
									padding: 20,
									generateLabels: function(chart) {
										let datasetColors = chart.data.datasets.map(function(e) {
												return e.backgroundColor;
										}).flat();						        	  
										let orders = chart.data.datasets.map(function(e) {
											return e.order;
										}).flat();
												
										// Get the default label list
										const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
										const labelsOriginal = original.call(this, chart);
										return labelsOriginal.sort((label2, label1) => {
											return orders[label2.index] - orders[label1.index];
										}).filter((label, index, array) => {
											return (datasetColors[label.index] != '#FF0000' && [0, 1, 2, 3, 7].includes(label.index));
										}).map((label) => {
										label.datasetIndex = label.index;
										label.fillStyle = datasetColors[label.index];
												return label;
										});	
									}
								},
								onClick: function(mouseEvent, legendItem, legend) {
									// toggle the visibility of the dataset from what it currently is
									legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
									legend.chart.update();
								}
							}
						}
					}}
				/>
			</div>
		</div>
	);
}

<NegotiationAllocation/>

#### 5.2.3. Operations Allocation

export const OperationsAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Project', 
							'Funding', 'Liquidity', 'Operations', 'Project'
						],
						datasets: [{
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#FF0000', '#D3D3D3'],
								data: [2, 3, 5, 4, 5, 71, 9, 1],
								order: [2, 3, 4, 6, 7, 9, 11, 12],
								index: 0
							}, {
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#FF0000', '#D3D3D3'],
								data: [10, 9, 71, 10],
								order: [1, 5, 8, 10],
								index: 1
						}]
					}}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						reverse: true,
						plugins: {
							tooltip: {
								callbacks: {
									label: function(context) {
										const labelIndex = (context.datasetIndex * 7) + context.dataIndex;
										return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue + '%';
									}
								}
							},
							legend: {
							position: 'right',
								labels: {
									font: {
										family: 'Comic Sans MS',
										size: 20,
										weight: 'bold',
										lineHeight: 1.2,
									},
									padding: 20,
									generateLabels: function(chart) {
										let datasetColors = chart.data.datasets.map(function(e) {
												return e.backgroundColor;
										}).flat();						        	  
										let orders = chart.data.datasets.map(function(e) {
											return e.order;
										}).flat();
												
										// Get the default label list
										const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
										const labelsOriginal = original.call(this, chart);
										return labelsOriginal.sort((label2, label1) => {
											return orders[label2.index] - orders[label1.index];
										}).filter((label, index, array) => {
											return (datasetColors[label.index] != '#FF0000' && [0, 1, 2, 3, 7].includes(label.index));
										}).map((label) => {
										label.datasetIndex = label.index;
										label.fillStyle = datasetColors[label.index];
												return label;
										});	
									}
								},
								onClick: function(mouseEvent, legendItem, legend) {
									// toggle the visibility of the dataset from what it currently is
									legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
									legend.chart.update();
								}
							}
						}
					}}
				/>
			</div>
		</div>
	);
}

<OperationsAllocation/>

#### 5.2.4. Project Allocation

ICO offerings limit the flexibility of the issuer to raise further rounds of financing via follow-on offerings of tokens or of traditional equity financing. Entrepreneurs need to predetermine and reserve a portion of the tokens issued for the purposes of further financing rounds (Section 3.1). 

export const ProjectAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Project', 
							'Funding', 'Liquidity', 'Operations', 'Project'
						],
						datasets: [{
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#0000FF'],
								data: [2, 3, 5, 4, 5, 71, 9, 1],
								order: [2, 3, 4, 6, 7, 9, 11, 12],
								index: 0
							}, {
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#0000FF'],
								data: [10, 9, 71, 10],
								order: [1, 5, 8, 10],
								index: 1
						}]
					}}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						reverse: true,
						plugins: {
							tooltip: {
								callbacks: {
									label: function(context) {
										const labelIndex = (context.datasetIndex * 7) + context.dataIndex;
										return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue + '%';
									}
								}
							},
							legend: {
							position: 'right',
								labels: {
									font: {
										family: 'Comic Sans MS',
										size: 20,
										weight: 'bold',
										lineHeight: 1.2,
									},
									padding: 20,
									generateLabels: function(chart) {
										let datasetColors = chart.data.datasets.map(function(e) {
												return e.backgroundColor;
										}).flat();						        	  
										let orders = chart.data.datasets.map(function(e) {
											return e.order;
										}).flat();
												
										// Get the default label list
										const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
										const labelsOriginal = original.call(this, chart);
										return labelsOriginal.sort((label2, label1) => {
											return orders[label2.index] - orders[label1.index];
										}).filter((label, index, array) => {
											return (datasetColors[label.index] != '#FF0000' && [0, 1, 2, 3, 7].includes(label.index));
										}).map((label) => {
										label.datasetIndex = label.index;
										label.fillStyle = datasetColors[label.index];
												return label;
										});	
									}
								},
								onClick: function(mouseEvent, legendItem, legend) {
									// toggle the visibility of the dataset from what it currently is
									legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
									legend.chart.update();
								}
							}
						}
					}}
				/>
			</div>
		</div>
	);
}

<ProjectAllocation/>

### 5.2. Determining Supply Milestones


#### 5.2.1. Max Supply


#### 5.2.2. Funding Capability


#### 5.2.3. Initial Supply



### 5.3. Initial Token Allocation

Alocation must be designed at 2 points in time: the Initial Allocation configured when the token is first generated (TGE) and the expected allocation once Max Supply has been achieved.


<div style={{textAlign: 'center'}}>
	<img src="https://d33wubrfki0l68.cloudfront.net/7391c50d25cdb2f16ca64842dd6257fd19697ef0/8522f/assets/messari_initial_token.jpg" width="70%"></img>
</div>

export const InitialTokenAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Project', 
							'Funding', 'Liquidity', 'Operations', 'Project'
						],
						datasets: [{
								backgroundColor: ['#00FF00', '#00FF00', '#00FF00', '#006400', '#006400', '#FF0000', '#006400', '#0000FF'],
								data: [2, 3, 5, 4, 0, 0, 0, 1],
								order: [2, 3, 4, 6, 7, 9, 11, 12],
								index: 0
							}, {
								backgroundColor: ['#00FF00', '#006400', '#FF0000', '#0000FF'],
								data: [10, 4, 0, 1],
								order: [1, 5, 8, 10],
								index: 1
						}],
					}}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						reverse: true,
						plugins: {
							tooltip: {
								callbacks: {
									label: function(context) {
										const labelIndex = (context.datasetIndex * 7) + context.dataIndex;
										return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue + '%';
									}
								}
							},
							legend: {
							position: 'right',
								labels: {
									font: {
										family: 'Comic Sans MS',
										size: 20,
										weight: 'bold',
										lineHeight: 1.2,
									},
									padding: 20,
									generateLabels: function(chart) {
										let datasetColors = chart.data.datasets.map(function(e) {
												return e.backgroundColor;
										}).flat();						        	  
										let orders = chart.data.datasets.map(function(e) {
											return e.order;
										}).flat();
												
										// Get the default label list
										const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
										const labelsOriginal = original.call(this, chart);
										return labelsOriginal.sort((label2, label1) => {
											return orders[label2.index] - orders[label1.index];
										}).filter((label, index, array) => {
											return (datasetColors[label.index] != '#FF0000' && [0, 1, 2, 3, 7].includes(label.index));
										}).map((label) => {
										label.datasetIndex = label.index;
										label.fillStyle = datasetColors[label.index];
												return label;
										});	
									}
								},
								onClick: function(mouseEvent, legendItem, legend) {
									// toggle the visibility of the dataset from what it currently is
									legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
									legend.chart.update();
								}
							}
						}
					}}
				/>
			</div>
		</div>
	);
}

<InitialTokenAllocation/>

### 5.4. Token Allocation Evolution

export const TokenAllocationEvolution = () => {
	const pp = 1;
	function vesting(numSamples, numTokensTGE, cliff, numTokensTotal, period) {
		const amounts = [numTokensTGE];
		for (let i = 1; i <= numSamples; i += 1) {
			let data = 0;
			if(i <= cliff) data = numTokensTGE;
			else if(i >= cliff + period) data = numTokensTotal;
			else data = numTokensTGE + (i-cliff) * (numTokensTotal - numTokensTGE) / period;
			amounts.push(data);
		}
		console.log(amounts);
			return amounts;
	}
	return (
		<div className="chart-panel2">
			<Line
				data={{
					labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
					datasets: [{
						fill: true,
						label: 'Seed Round',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 0, 12, 10, 24),
					},{
						fill: true,
						label: 'Pre-Sale',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 4, 3, 40, 24)
					},{
						fill: true,
						label: 'Public-Sale',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 10, 3, 50, 12)
					},{
						fill: true,
						label: 'Exchanges',
						backgroundColor: "#006400",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 8, 12, 40, 48)
					},{
						fill: true,
						label: 'Project',
						backgroundColor: "rgba(0,0,205,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 0, 3, 10, 12)
					}],
				}}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						y: {
							min: 0,
							max: 160,
							display: true,
							stacked: true,
							title: {
								display: true,
								text: 'Total Supply',
								font: {
									family: 'Comic Sans MS',
									size: 20,
									weight: 'bold',
									lineHeight: 1.2,
								},
							},
							ticks: {
								display: false,
							},
						},
						x: {
							display: true,
							title: {
								display: true,
								text: 'Months from TGE',
								font: {
									family: 'Comic Sans MS',
									size: 20,
									weight: 'bold',
									lineHeight: 1.2,
								},
							},
							ticks: {
								display: false,
							},
						},
					}
				}}
				plugins={[/*ChartDataLabels*/]}
			/>
		</div>
	);
}

<TokenAllocationEvolution/>




### 5.5. Creating Benchmarks

This exercise needs to be done upfront, before the platform is even launched and when uncertainty is at its maximum.

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>








## 6. Supply Management
---

### 6.1. Supply Profile

Supply Management is a critical aspect in the CryptoCommodity lifecycle as it is part of the setting reuired to deliver its features. There are several stages involved in the lifecycle of a CryptoCommodity.

- <b>Funding Rounds</b>. The process starts with an optional funding period. This period is dedicated to create one or multiple funding rounds by the issuing team and raise funds from investors to fund the project. This is an optional step.

- <b>Token Generation Event</b>. Once fuding rounds are finished, the Token Generation Event (TGE) happens. In this one time ocurring event, the initial supply is first added to the CryptoCommodity with the initial allocations as described later. The TGE timing is defined by the CryptoCurrency issuer in the schedule and roadmap.

- <b>Value Capture</b>>. After the TGE, the project activities will push up the price of the token whereas it captures the value of the underlying asset. During this stage, the more benefitial profile for the token is this of a gold standard because it will allow a quick growth of the value for investors,

- <b>Value Capture Event</b>When the demand of the asset utility on the underlying market matches the supply, it is considered that the value has been captured. This is called Value Capture Event (VCE). The VCE is a equilibrium point, and therefore, its timing can be estimated, can also be advanced or delayed by tuning the demand but cannot be precised beforehand.

- <b>Value Delivery</b>. After the Value Capture Event. the stabilization mechanism guarantees that the value of the underlying asset is maintained. This is the permanent regime where the token is focused in value delivery. During this period the DeFi Services take place.

<div className="chart-panel2">
<Line
  data={{
		labels: [0,'',100,'',200,'',300,'',400,'',500,'',600,'',700,'',800,'',900,'',1000,'',1100,'',1200],
		datasets: [{
			fill: true,
			label: 'Gold Standard',
			backgroundColor: "rgba(161,174,212,1.0)",
			borderColor: "rgba(0,0,0,0.1)",
			data: [null,null,null,400,400,400,400,400,null,null,null]
		},{
			fill: true,
			label: 'Unit of Account',
			backgroundColor: "rgba(6,11,39,1.0)",
			borderColor: "rgba(0,0,0,0.1)",
			data: [null,null,null,null,null,null,null,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200]
		}],
	}}
	options={{
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				min: 0,
				max: 1200,
				display: true,
				title: {
					display: true,
					text: 'Tokens Created',
					font: {
						family: 'Comic Sans MS',
						size: 20,
						weight: 'bold',
						lineHeight: 1.2,
					},
					padding: {top: 30, left: 0, right: 0, bottom: 0},
				},
				ticks: {
					display: false,
				}
			},
			x: {
				display: true,
				title: {
					display: true,
					text: 'Orders Delivered (30 days rolling average)',
					font: {
						family: 'Comic Sans MS',
						size: 20,
						weight: 'bold',
						lineHeight: 1.2,
					},
					padding: {top: 20, left: 0, right: 0, bottom: 0},
				},
				ticks: {
					display: false,
					font: {
						family: 'Comic Sans MS',
						size: 20,
						// weight: 'bold',
						lineHeight: 1,
					},
				}	
			},
		},
		plugins: {
			legend: {
				labels: {
					usePointStyle: true,
					font: {
						family: 'Comic Sans MS',
						size: 20,
						weight: 'bold',
						lineHeight: 1.2,
					},
					padding: 20,
				},
			},
      annotation: {
        annotations: [{
					type: 'label',
					xValue: 1.5,
					yValue: 200,
					content: ['Funding','Rounds'],
					backgroundColor: 'rgba(245,245,245)',
					font: {
						size: 18
					}
				}, {
					type: 'label',
					xValue: 5,
					yValue: 200,
					content: ['Value','Capture'],
					backgroundColor: 'rgba(245,245,245)',
					font: {
						size: 18
					}
				}, {
					type: 'label',
					xValue: 15,
					yValue: 200,
					content: ['Value','Release'],
					backgroundColor: 'rgba(245,245,245)',
					font: {
						size: 18
					}
				}, {
					type: 'line',
					xMin: 7,
					xMax: 7,
					borderColor: 'rgb(255, 99, 132)',
					borderWidth: 2,
					borderDash: [5, 5],
				}, {
					type: 'label',
					xValue: 7,
					yValue: 800,
					content: ['Value','Capture','Event'],
					backgroundColor: 'rgba(245,245,245)',
					font: {
						size: 18
					}
				}, {
					type: 'point',
					xValue: 7,
					yValue: 400,
					backgroundColor: 'rgba(255, 99, 132, 0.25)'
				}, {
					type: 'line',
					xMin: 3,
					xMax: 3,
					borderColor: 'rgb(255, 99, 132)',
					borderWidth: 2,
					borderDash: [5, 5],
				}, {
					type: 'label',
					xValue: 3,
					yValue: 800,
					content: ['Token','Generation','Event'],
					backgroundColor: 'rgba(245,245,245)',
					font: {
						size: 18
					}
				}, {
					type: 'point',
					xValue: 3,
					yValue: 400,
					backgroundColor: 'rgba(255, 99, 132, 0.25)'
				}]
      }
		}
	}}
	plugins={[/*ChartDataLabels*/]}
/>
</div>

#### 6.2. Total Supply Composition

The Total Supply for a CryptoCommodity is the number of tokens units existing in a certain moment.

The composition of Total Supply would depend on the stage in which the CryptoCommodity is working:

- during the <b>value capture period</b>, between the TGE and the VCE, the Total Supply is fixed. In this period, if the project raise expectations, the number of tokens on hands on holders grows as the demand also grows and, conversely, the number of tokens in the exchanges should shink. When demand matches token unit in the exchanges, the VCE is fired.

- the VCE triggers the stabilization mechanism which guarantees token units in the exchanges matching real demand, in order to maintain the captured underlying value. This is the <b>value delivery period</b> As the demand increases, the number of token units in the exchanges should also increase. At this point, the CryptoCommodity delivers the 3 functions of money and there are holders that store token units to keep their funds and other to trade the underlting market. On VCE also the DeFi Services initiates.

<div style={{textAlign: 'center'}}>
	<img src="/img/supply_evolution.svg" width="100%"></img>
</div>

### 6.3. Consolidated Supply Management

Once the project has been funded and the value of the underlying asset has been captured we already know that the currency represents the value of the underlying asset utility. At this point the Cryptocurrency is an Unit of Account because it captures the underlaying asset utility. Also the Cryptocurrency is a Store of Value because there is enough number of transaction to provide stability to the system.

From this point onwards, a CryptoCommodity has a built-in stabilization mechanism that guarantees taht the value is always captured.

#### 6.3.1. Stabilization Mechanism

Economic history and literature are rich with schemes to peg the value of the currency to a price index or price index derivative, in order to provide price stability: monometallic (gold) standards, bimetallism, and later the symmetallism proposed by Marshall (1886, 1887a, 1887b) and Edgeworth (1895); the “fixed value of bullion” standard proposed by Williams (1892); Fisher's compensated dollar (1911, 1913a, 1913b, 1913c, 1913d, 1914, and 1920); the Commodity Reserve Currency scheme suggested by Goudriaan (1932), B. Graham (1937, 1944), F. D. Graham (1942), and revisited by Friedman (1951); Hall's (1982) ANCAP basket; the proposal by Miles (1984) and Sumner (1989, 1991, 1995) to use futures contracts, Kevin Dowd’s (1994) quasi-futures contract, and later Dowd’s (1999) price index option. For a review of this literature the reader is referred to Dowd25 (1996, Chapter 14). [38]

This is done by adjusting the supply in the exchanges.

Th main goal of th Unit of Account i th built-in pric ormatio mchanim. or this goal w nd to crat a ngativ dbakc loop. Thi i achivd by matching th numbr o tokn on th xchang to th xitting dmand and allowing xchang to orm th pric. Th built-in mchanim guarant that th numbr o itm conumd match th numbr th upply o th tokn in th xchang. Thror, th pric i ormd ntrily by conumr and i indpndnt o ny othr currncy.


#### 6.3.2. Collateral

The goal of collateral is allow the holder to redeem its currency by the underlying asset on demand.

Increasingly, goverments are requiring to stablecoins a full collateralization of the issued supply. For fiat stablecoins this implies, storing a number of assets equivalent to the total supply. This is mainly required to prevent expansion on fiat supply with desvirtuates regulatory policies. CryptoCommodities do not increase fiat supply so they should have a diffeernt consideration for collateral.

A CryptoCommodity system is naturally collateralized. At any moment, the issuer can redeem the holder as a regular consumer of the underlying asset utility. According to IMF: 

> a viable commodity standard does not require the redemption of money for the specific commodities defining the ultimate unit of account. This greatly simplifies and reduces the cost of operating such a system.".







<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>









## 7. Implementation of CryptoCommodites
---

### 7.1. Smart Contract

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

### 7.2. Upgradeable

As theoretical framework is still being created, the CryptoCommodity contract must be upgradeable to include new updates and definitions. In order to prevent a reputational risk, the upgrades can be protected by a voting system.

Inn current implementation, every facet contains a versioned logic of the functionality. However, they can be upgraded in a way that one, or many functions, can be replaced by other functions with the same signature or adding new functions.

### 7.3. The challenge of Velocity of Circulation (Saleableness)

Velocity serves as a measurement of the rate at which money is exchanged within an economy. Most countries calculate their velocity of money using a ratio that divides Gross Domestic Product by the country's total money supply.

Analogous to the fiat world, in the crypto world we define token velocity. Token velocity measures the speed at which tokens circulate in a cryptocurrency ecosystem. When tokens change hands swiftly, it means they're being used for transactions, investments, or even just as a medium of exchange. On the flip side, if tokens stay locked away in wallets, collecting dust like forgotten treasures, their velocity is low. Low velocity might sound like a good thing at first, but as we'll discover, it's not always the case.

A token that has limited utility and lack of incentive to encourage holding of the token is likely to have a high velocity. In turn, this will reduce the opportunity for token price appreciation. Strategies that encourage token holding (e.g. staking) or that are deflationary (e.g. burning) may promote token price appreciation. However, this may have limited effect should velocity not already have reached its ceiling.

Causes of the high token velocity is that the prices are not expressed on the currency.

To understand token velocity we must distinguish the value capture stage from the value delivery stage. In the value delivery stage, the CryptoCommodity will make use t=of the stabilization mechanism to become and stablecoin. This shoud, provide guarantees to holders to keep the currency on their wallets.

#### 7.3.1. Token Velocity during Value Capture 

During the Vauke Capture stage the CryptoCommodity will behave as an utility token. This is the critical part where the holders can be reluctant to keep the tokens in their wallets. In order to reduce velocity some approaches can be considered:

- Introduce a profit-share mechanism

- Build staking functions into the protocol

- Balanced burn-and-mint mechanics

- Gamification to encourage holding

- for a local market, vending machines could be used to deliver the product or service

- express the prices in CryptoCommodity units


#### 7.3.2. Token Velocity during Value Delivery

During the Valkue Delivery Stage the token will start its stability mechanism to become stablecoin so holders will be willing to hold onto excess tokens rather than sell them for something else.

- Become a store of value. If people genuinely come to believe in a token as a store of value, there will be a significant probability that they’re willing to hold onto excess tokens rather than sell them for something else.

### 7.4. The challenge of Wallets

15 years after the advent of Bitcoin, and many million funded by VCs in crypto projects, we still do not have a gadget hardware wallet to pay in the market with crypto. And this says a lot.

The assumption of mobile apps working as cryptocommodity wallets sounds to degrade crypto to a subproduct. Also, smartphone operating systems are not decentralized themselves. Large software corporations have priviledges incorporated in the firmware of these devices. We think a new economic model deserves its own devices. On the other hand, existing wallets are mostly connected to the computer and this is not practical as a mainstream payment system. Also the new wallet initiatives looks to be designed for high end consumers and they see the revenue in the basis of high prices. This is not affordable for most of world population.

We think a crypto wallet should be a garage control-like $20 device, that works wirelessly and, maybe without internet (e.g. via GSM). Until we do not have this kind of devices, crypto cannot be massified.

I the meatime, there is room for discussion if vending machines or gift cards could fit the bill for a workable crypto wallet for privately issued currencies.

### 7.5. The challenge of Security

Security is crucial in crypto world. A quality money must be built on a secure system. Some security policies are being used to pervent vulnerabilities:

- Code includes <b>multisig role-based access</b> to functionalities.

- The whole CryptoCommodity code must be <b>audited</b>. 

- Code is open source to allow <b>white hats contributions</b>. Ideally should be also be in continuous validation by the community.

- We are exploring ERC-20R to create <b>DAO-protected storage backups</b> of the status to allow reverting in case of vulnerability. 

### 7.6. The challenge of Decentralization

Decentralization is a features that should analized at different levels:

- network decentralization

crosschain

- smart contract decentralization

- governance decentralization

Decentralization at this stage must pay attention to different aspects:

- networks where the token is deployed should fulill the reuired decentralization standards. The decentralization of this networks will influde in the reputation of the CryptoCommodity

- decentralization on governance, the stabilization mechanism should ideally work standalone without the issuer needing to mint or burn manually token units.

### 7.7. The challenge of Compliance

Despite they do not have a fiat collateral, CryptoCommodities will be possibly considered as stablecoins for regulatory bodies. The FSB’s 2020 report, “Regulation, Supervision and Oversight of ‘Global Stablecoin’ Arrangements” described three characteristics that distinguish a Global Stablecoin from other crypto-assets and other stablecoins. Those characteristics include: (i) the existence of a stabilisation mechanism, (ii) the usability as a means of payment and/or store of value, and (iii) the potential reach and adoption across multiple jurisdictions. The first two characteristics (the existence of a stabilisation mechanism and usability as a means of payment and/or store of value), and the unique risks that these characteristics pose, distinguish stablecoins from other crypto-assets. The third, the potential reach and adoption across multiple jurisdictions, differentiates Global Stablecoin from other stablecoins. [43]

Compliance mut be reviewed according to the juridiction where the CryptoCommodity will be deployed.

https://github.com/Catallactic/catallactic-suite

### 7.8. The challenge of Transparency


### 7.9. The challenge of Privacy


### 7.10. Deployment




<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 8. Supporting Tools
---

### 8.6. DAppmin

https://github.com/Catallactic/catallactic-admin

### 8.6. ICO Purchases DApp


### 8.6. Vesting Tracker







<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>






## 9. A CryptoCommodity-based Economy
---

In this we will analyse the topic of introducing CryptoCommodity tokens in an economy with a coexisting legal tender. 

### 9.1. Currency competition

The coexistence of competing private currencies has been documented from some authors. 





### 9.2. Stability of a CryptoCommodity Market

#### 9.2.1. Understanding a regulated system

In a regulated system, the output is somehow modified and injected to the input. This backwards injection is called a feddbackp loop.

<div style={{textAlign: 'center'}}>
	<img src="https://www.tutorialspoint.com/control_systems/images/positive_feedback.jpg" width="50%"></img>
</div>
<br/>

#### 9.2.2. Positive vs Negative Feedback Loops

When providing ffedback to a system, there are 2 possibilities:

- Negative feedback (or balancing feedback) occurs when some function of the output of a system, process, or mechanism is fed back in a manner that tends to reduce the fluctuations in the output, whether caused by changes in the input or by other disturbances. A classic example of negative feedback is a heating system thermostat — when the temperature gets high enough, the heater is turned OFF. When the temperature gets too cold, the heat is turned back ON. In each case the "feedback" generated by the thermostat "negates" the trend.

- The opposite tendency — called positive feedback — is when a trend is positively reinforced, creating amplification, such as the squealing "feedback" loop that can occur when a mic is brought too close to a speaker which is amplifying the very sounds the mic is picking up, or the runaway heating and ultimate meltdown of a nuclear reactor.

<table>
	<thead>
		<tr>
			<th scope="col">Negative Feedback Loop</th>
			<th scope="col">Positive Feedback Loop</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><img src="https://assets.ltkcontent.com/images/8616/negative-feedback-loop_27c5571306.jpg" width="100%"></img></td>
			<td><img src="https://climatechangeclearly.files.wordpress.com/2015/02/positivefeedbackloop-590.jpg" width="100%"></img></td>
		</tr>
	</tbody>
</table>
<br/>

Whereas positive feedback tends to lead to instability via exponential growth, oscillation or chaotic behavior, negative feedback generally promotes stability. Negative feedback tends to promote a settling to equilibrium, and reduces the effects of perturbations. Negative feedback loops in which just the right amount of correction is applied with optimum timing, can be very stable, accurate, and responsive.

In the next 2 sections we will see how a market of privately issued CryptoCommodity is doubly regulated with negative feedbakc loops. This adds an extra layer of stability.

In the next chapter we will see how the monetary fiat system is regulated by a positive feedback loop which is the composed by the national statistical offices and the monetary policiies of the Central Banks. This configuration is, by definition, unstable.

#### 9.2.3. Regulation in a CryptoCommodity market

Market itself, if not distorted, is a well performing price formation machine. A CryptoCommodity have a built-in self-regulation since customers provide a negative feedback loop regarding the quality of the currency. If the currency does tno fullfill the expected quality, the demand for the CryptoCommodity is reduced. This is Adam's Smith Invisible Hand.

<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem_loop.svg" width="100%"></img>
</div>
<br/>



### 9.3. At the rescue of real economy

Once we have designed th principles of CryptoCommodity, in this chapter we will discuss how the Financial Economy has taken 97+% of the economic landscape and how CryptoCommodity can help providing oxygen to an exhausted Real Economy.

#### 9.3.1. Monetary Expansion of Legal Tender



#### 9.3.2. Debate on Neutrality of Money

The neutrality of money, also called neutral money, is an economic theory stating that changes in the money supply only affect nominal variables and not real variables. In other words, the amount of money printed by central banks can impact prices and wages but not the output or structure of the economy,w hich means, there is not distortion in relative prices.


<div style={{textAlign: 'center'}}>
	<img src="/img/financial assets vs real assets March 2022_0.jpg" width="80%"></img>
</div>

price distortion



#### 9.3.3 The Split Economy

The real economy concerns the production, purchase and flow of goods and services (like oil, bread and labour) within an economy. Economic activity is conceptualized as ‗real‘ because real resources are applied to produce something which people can buy and use. 

Real economy can be measured by the GDP.

The financial system is mainly concerned either with moving funds around so that those who wish to buy can do so, or helping people to exchange ownership of the productive resources. Financial system is depegged from real consumer necessities.

#### 9.3.4. The Squeezed Real Economy

The following diagram is called the Exter’s Pyramid of Liquidity. It illustrates the liquidity of assets arranged from the hardest to liquidate (complex derivatives and real estate) to the most liquid asset, physical gold.




<table>
	<tr>
	  <td><img src="/img/realvsfinancial.jpg" width="100%"></img></td>
	  <td><img src="https://d.ibtimes.co.uk/en/full/1601428/im3.png?w=736&f=8255c0efab60153fdd6e458e80c307b0" width="100%"></img></td>
	</tr>
</table>


barreras a la entrada impuestas x el fiat

WTF Happened In 1971?


Cantillon Effects

#### 9.3.5. End Financial Exclusion

### 9.4. Comparing Economic Models

<table>
	<thead>
		<tr>
			<th scope="col">Feature</th>
			<th scope="col">Fiat</th>
			<th scope="col">CrytoCommodity</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Price Formation</th>
			<td>Distorted</td>
			<td>Matching consumers will</td>
		</tr>
		<tr>
			<th scope="row">Relative Prices</th>
			<td>Distorted</td>
			<td>Matching consumers will</td>
		</tr>
		<tr>
			<th scope="row">Economic Calculation</th>
			<td>Biased</td>
			<td>Yes</td>
		</tr>
		<tr>
			<th scope="row">Allocation of Resources</th>
			<td>Priviledged</td>
			<td>Matching consumers will</td>
		</tr>
		<tr>
			<th scope="row">Critical Resources</th>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<th scope="row">Credit Availability</th>
			<td>Yes, with Cantillon Effects</td>
			<td>Yes, without Cantillon Effects</td>
		</tr>
		<tr>
			<th scope="row">Entry Barriers</th>
			<td>Yes</td>
			<td>No</td>
		</tr>
		<tr>
			<th scope="row">Projects Risk</th>
			<td>Socialized</td>
			<td>Privatized</td>
		</tr>
		<tr>
			<th scope="row">Supply / Demand matching</th>
			<td>No</td>
			<td>Yes</td>
		</tr>
		<tr>
			<th scope="row">Externalities</th>
			<td>No</td>
			<td>Yes</td>
		</tr>
		<tr>
			<th scope="row">Social Values</th>
			<td>Imposed</td>
			<td>Natural</td>
		</tr>
	</tbody>
</table>

### 9.5. Further Industry Development

Some challenges still remain open in a privately issued CryptoCommodities configuration. First, the heterogeity of currencies can be simplified creating currecny wrappers.

Additionaly, insurance companies could provide services in case a currency does not follow standards.

Private 'Lender of Last Resort?

### 9.6. Free Banking Introduction

incremental introduction

coexistence with legal ledger


In the previous bibliography there is the overal assumption that system is working under a free banking schenario. This situation woud require a social consensus and sponsorship for the government and seems unfeasible. the introduction of CryptoCommodity is somehow different. CryptoCommodity would complement existing legal tender.

First we need to disntighuish the scope of the introduced currencies. There can be global currencies and there can be local currencies.

 For this case we would have a incremental introduction and issuers and consumers would decide at what level they should move forward withe the adoption.




<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>







## 10. Conclusion
---

We have exposed how a novel kind of token which takes the best of Stablecoins and best of Utility Tokens can be created. 

The token borrows from Stablecoins the concept of stabilization mechanim. However, differs to Stablecoins in how to form the price. This new token forms its own price by capturing the value generated in an underling market. This complies with initial blockchain promises of decentralizacion in value. The stabilization mechanism provides to the token a foundation to fulfill currency based utilities a payment, card, lending or transfer.

On the other hand, the new token also borrows from utility tokens the notion of funding rounds. This allows any issuer to fund his project, either globally or locally, and offer additional services to the society as defi services. The model is open to staking, launchapd, or other defi services.

We have also covered how this new token can be implemented as a diamond standard, managed by the issuing team and what are the main requirements (security, decentralization, compliance, privacy and transparency) and challenges (velocity of circulation and wallets) for its adoption.

Finally we have described how the adoption of this new token could empower the squish real economy.

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>






## 11. References
---


[-1] Money and the Mechanism of Exchange, W. Stanley Jevons, 1896 - https://mises.org/library/money-and-mechanism-exchange

[0] The Mystery of Banking, by Murray N. Rothbard, 1993, https://mises.org/library/mystery-banking

[1] Wealth of Nations, by Adam Smith, https://www.gutenberg.org/files/3300/3300-h/3300-h.htm

[2] The Theory of Money and Credit, Ludwig von Mises, 1912 - https://mises.org/library/theory-money-and-credit

[3] The Competitive Supply of Money, Benjamin Klein, Journal of Money, Credit and Banking, 1974, vol. 6, issue 4, 423-53 https://econpapers.repec.org/article/mcbjmoncb/v_3a6_3ay_3a1974_3ai_3a4_3ap_3a423-53.htm

[4] Toward a Free Market Monetary System, The Journal of Libertarian Studies, TAGS Free MarketsMonetary Theory, Friedrich A. Hayek, Volume 3, Number 1 (1979) https://mises.org/library/toward-free-market-monetary-system-1

[5] A Laissez-Faire Approach to Monetary Stability, Robert L. Greenfield and Leland B. Yeager, 1983 - https://www.jstor.org/stable/1992481

[6] `On the economics of private money' by Robert G. King Lawrence Summers, Journal of Monetary Economics, 1983, vol. 12, issue 1, 159-162 https://econpapers.repec.org/article/eeemoneco/v_3a12_3ay_3a1983_3ai_3a1_3ap_3a159-162.htm

[7] Has government any role in money? Milton Friedman, Anna J. Schwartz https://www.sciencedirect.com/science/article/abs/pii/030439328690005X

[8] The Evolution of Central Banks By Charles Goodhart, $30.00 Paperback Hardcover 218 pp., 5 x 8 in, Paperback 9780262570732, September 16, 1988 https://mitpress.mit.edu/9780262570732/the-evolution-of-central-banks/

[9] Private Money: The Path to Monetary Stability, Kevin Dowd, Institute of Economic Affairs, 1988 - 71 pagina's https://iea.org.uk/publications/research/private-money-the-path-to-monetary-stability

[10] The Theory of Free Banking: Money Supply under Competitive Note Issue, 1988 George A. Selgin https://oll.libertyfund.org/title/white-the-theory-of-free-banking-money-supply-under-competitive-note-issue

[11] The State and the Monetary System. Phillip Allan Publishers, St Martin's Press, Dowd, K. (1989). https://durham-repository.worktribe.com/output/1124158

[12] In Search of a Monetary Anchor: A "New" Monetary Standard, International Monetary Fund, 01 Jan 1989 - https://www.elibrary.imf.org/view/journals/001/1989/082/001.1989.issue-082-en.xml

[13] Denationalisation of Money: The Argument Refined, Friedrich A. Hayek, 1990 - https://mises.org/library/denationalisation-money-argument-refined

[14] How Would the Invisible Hand Handle Money? Journal of Economic Literature 32, no. 4 (1994): 1718–1749. Selgin, George A., and Lawrence H. White.  Journal of Economic Literature, 1994, vol. 32, issue 4, 1718-1749 https://econpapers.repec.org/article/aeajeclit/v_3a32_3ay_3a1994_3ai_3a4_3ap_3a1718-1749.htm

[15] The Theory of Monetary Institutions. Malden, Mass.: Blackwell, 1999. White, Lawrence H.  https://cdn.mises.org/qjae4_2_8.pdf

[16] Competitive money supply: the international monetary system in perspective Filippo Cesarano, 1999 https://www.emerald.com/insight/content/doi/10.1108/01443589910284354/full/html

[18] How Might the Invisible Hand Handle Electronic Money? 26 Pages Posted: 5 May 2009 Last revised: 30 Jul 2014 Shann Turnbull https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1399224

[19] Competing Money Supplies By Lawrence H. White https://www.econlib.org/library/Enc/CompetingMoneySupplies.html

[20] Competitive Supply of Money in a New Monetarist Model, Waknis, Parag 11 September 2017 https://mpra.ub.uni-muenchen.de/75401/1/MPRA_paper_75401.pdf

[21] Friedrich Hayek On Monetary and Banking Systems Reforms Adrian Ravier ESEADE, 9-15-2020  https://jnf.ufm.edu/cgi/viewcontent.cgi?article=1006&context=journal

[22] The quality of money, Philipp Bagus, Dec. 2009 - https://mises.org/library/quality-money-0

[23] The Quality Theory of Money, De-Xing Guan*April 28, 2022 - http://web.ntpu.edu.tw/~guan/papers/QTM.pdf



[24] The Velocity of Circulation, Henry Hazlitt, 06/20/2019 - https://mises.org/library/velocity-circulation

[25] Money creation in the modern economy, Bank of England, 14 March 2014 - https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy

[26] An Essay on Economic Theory, Richard Cantillon, 1755 - https://mises.org/library/essay-economic-theory-0

[27] Essays in Positive Economics, Milton Friedman, 1966 - https://press.uchicago.edu/ucp/books/book/chicago/E/bo25773835.html

[28] https://wtfhappenedin1971.com/

[29] Interaction between Financial Economy and Real Economy. Ly Dai Hung, 2022 - https://hal.science/hal-03863210/





[30] ERC-2535: Diamonds, Multi-Facet Proxy, 2020-02-22, Nick Mudge - https://eips.ethereum.org/EIPS/eip-2535

[31] Factors of decentralization of web3 protocols: Tools for planning greater decentralization, Miles JenningsStephen WinkAdam Zuckerman, 5.31.23 - https://a16zcrypto.com/posts/article/decentralization-factors-web3-protocols-tables/


[32] The birth of coinage, Mundell, Robert A. 2002 - https://academiccommons.columbia.edu/doi/10.7916/D8Q531TK

[33] Tokens: their Significance for the Origin of Counting and Writing, Denise Schmandt-Besserat - https://sites.utexas.edu/dsb/tokens/tokens/

[34] A Treatise on Money, John Maynard Keynes, 1930 - https://ia601502.us.archive.org/4/items/in.ernet.dli.2015.28575/2015.28575.A-Treatise-On-Money.pdf

[35] A treatise on money and essays on monetary problems, Joseph Shield Nicholson, 1895 - https://www.survivorlibrary.com/library/a_treatise_on_money_1895.pdf


[36] https://www.liquifi.finance/post/token-vesting-and-allocation-benchmarks

[37] https://lstephanian.mirror.xyz/kB9Jz_5joqbY0ePO8rU1NNDKhiqvzU6OWyYsbSA-Kcc




[38] Hayek Money: The Cryptocurrency Price Stability Solution, Ferdinando M. Ametrano, 2016 - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2425270

[39] A Note on Cryptocurrency Stabilisation: Seigniorage Shares, Robert Sams, 2015 - https://blog.bitmex.com/wp-content/uploads/2018/06/A-Note-on-Cryptocurrency-Stabilisation-Seigniorage-Shares.pdf

[40] What is Stablecoin?: A Survey on Its Mechanism and Potential as Decentralized Payment Systems. Makiko Mita, Kensuke Ito, Shohei Ohsawa, Hideyuki Tanaka - https://arxiv.org/pdf/1906.06037.pdf

[41] The Holy Grail of Crypto Currencies: Ready to Replace Fiat Money?, Richard Senner, Didier Sornette, 2018 - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3192924

[42] The Market for Cryptocurrencies, Lawrence H. White - https://www.cato.org/sites/cato.org/files/serials/files/cato-journal/2015/5/cj-v35n2-13.pdf



[43] Regulation, Supervision and Oversight of “Global Stablecoin” Arrangements, FSB - https://www.fsb.org/2020/10/regulation-supervision-and-oversight-of-global-stablecoin-arrangements/

[43] https://mises.org/wire/money-supply-continues-its-biggest-collapse-great-depression

[44] Token Vesting and Allocations Industry Benchmarks, 2022 - https://www.liquifi.finance/post/token-vesting-and-allocation-benchmarks

[45] OECD (2019), Initial Coin Offerings (ICOs) for SME Financing, - https://www.oecd.org/finance/initial-coin-offerings-for-sme-financing.htm