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


:::note
`(Under development. Please, come back later. Just published to share the progress)`
:::

## 1. Introduction
---

The following whitepaper proposes a novel kind of token, CryptoCommodity.  Whereas maintaniing an stabilization mechanism to work as a currency, CryptoCommodities assume a built-in ecosystem that allows to form its own prices. Currencies forming their own prices deliver the true foundation for a decentralization in value, as a core principle in the blockchain industry. Additionally, forming its own prices is an empowering factor for the real economy. CryptoCommodities have being designed to allow its issuer raising capital in funding rounds to create his real economy project.

We describe how CryptoCommodities work, what are the stages, the utilities, the requirements, the challenges, the distribution mechanims and opportunities which bring for issuers, adopters and the whole society.

This project tries to provide direction to crypto as we think it currently is in the wrong path from the initial principles for which blockchain was created. We do not get too deep in implementation as we think is easy to do the things right, but is very uncommon to do the right things. This whitepaper looks for to do the right things.

<!-- truncate -->


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>




## 2. A Review on Value
---


From its origins in medieval times, the historical evolution of the value debate became locked into a centuries old dialectical conflict between the objective and subjective approaches. This study has traced the waves of value theories which oscillated back and forth towards each approach, until Walras and Marshall accommodated both rivaling approaches of value within their separate General and Partial Equilibrium frameworks.

### 2.1. Intrinsic Value

Intrinsic value theories started as early as 1600s; natural value by W. Petty (1623-1687); value based on land and labor, R. Cantillon (1680-1734); value and market price, N. Barbon (1640-1698); objective value, intrinsic value, A. Smith (1723-1790); value driven by labor, K. Marx (1818-1883) and D. Ricardo (1772-1823).

An intrinsic theory of value (also called theory of objective value) is any theory of value which holds that the value of an object or a good or service is intrinsic, meaning that it has in itself and can be estimated using objective measures. The theories of the classical school of economics look to the <b>process of producing an item, and the costs involved in that process, as a measure of the item's intrinsic value</b>.


### 2.2. Marginal Revolution

Marginalism as a formal theory can be attributed to the work of three economists, W. Jevons (1835-1882) in England, C. Menger (1840-1921) in Austria, and Walras in Switzerland.  William Stanley Jevons first proposed the theory in articles in 1863 and 1871. Carl Menger presented the theory in 1871. Menger explained why individuals use marginal utility to decide amongst trade-offs. Léon Walras introduced the theory in Éléments d'économie politique pure published in 1874. Walras was able to articulate the utility maximization of the consumer far better than Jevons and Menger by assuming that utility was linked to the consumption of each good. <b>Marginal utility focused on the value that the consumer received from the good when determining its value</b>.

### 2.3. Supply and Demand

Although the Marginal Revolution flowed from the work of Jevons, Menger and Walras, their work might have failed to enter the mainstream were it not for a second generation of economists. In England, the second generation were exemplified by Philip Wicksteed, by William Smart, and by Alfred Marshall; in Austria by Eugen Böhm von Bawerk and by Friedrich von Wieser; in Switzerland by Vilfredo Pareto; and in America by Herbert Joseph Davenport and by Frank A. Fetter.

Alfred Marshall (1842-1924) (Daraban, 2016) amalgamated the best of classical analysis with the new tools of the marginalists in order to <b>explain value in terms of supply and demand</b>. He acknowledged that the study of any economic concept, like value, is hindered by the interrelativeness of the economy and varying time effects. As a result, Marshall used a partial equilibrium framework, in which most variables are kept constant, in order to develop his analysis on the theory of value.

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/Supply-and-Demand-Curve.webp" width="40%"></img>
</div>


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>




## 3. About Money
---

### 3.1. Evolution of Money

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

### 3.2. Representative Money

Representative money or token money is any medium of exchange that <b>represents something of value</b>, typically a commodity. 

Earlier classifications in the history of money made of the useful distinction between money of <b>“intrinsic” and “extrinsic” value</b>. Intrinsic fall-back value of token money is virtually zero as a commodity. At the other extreme, the value of representative money is inherited for the represented commodity. Value on a commodity by the esteem in which it is held as measured by outside valuations that relate demand to supply, i.e., by scarcity. [32]

The earliest form of representative money consisted of <b>small pieces of leather</b>, usually marked with an offical seal. [-1] It was understood that the certificate could be redeemed by the commodity at any time. Also, the certificate was easier and safer to carry than the actual commodity. Over time people grew to trust the paper certificates as much as the commodity.

There is no concrete evidence that the <b>clay tokens</b> used as an accounting tool to keep track of warehouse stores in ancient Mesopotamia were also used as representative money.However, the idea has been suggested. [32]

The introduction of coinage, or <b>metal based</b> representative money, marks an important innovation in the history of money and a transition in the development of civilization itself. Coinage was probably invented in Asia Minor in the seventh century BC and it rapidly spread throughout the Mediterranean area. The earliest coins were made of electrum and had punch marks and some kind of identifying device. [32]

Paper currency first developed in Tang dynasty China during the 7th century, where it was called "'flying money'", although true <b>paper money</b> did not appear until the 11th century, during the Song dynasty. The use of paper currency later spread throughout the Mongol Empire or Yuan dynasty China. European explorers like Marco Polo introduced the concept in Europe during the 13th century.

Today, <b>gold or silver certificates</b>, for example, which are claims on precise amounts of gold or silver, could be also called representative money.	

The advent of <b>blockchain technologies</b> and programmable money in 2009 provides a novel support for representative money with enhanced features, as we will discuss in this document.

### 3.3. Functions of Money

In almost all market transactions in our economy, money in the form of currency or cheques is a <b>medium of exchange</b>; it is used to pay for goods and services. The use of money as a medium of exchange promotes economic efficiency by eliminating much of the time spent in exchanging goods and services.

Money also functions as a <b>store of value</b>; it is a repository of purchasing power over time. A store of value is used to save purchasing power from the time income is received until the time it is spent. This function of money is useful because most of us do not want to spend our income immediately upon receiving it but rather prefer to wait until we have the time or the desire to shop. Commodity money has an exchange value because if not used as money it can be used as a commodity.

The gold standard as a <b>Unit of Account</b> suffered from gold's fluctuating relative value and the costly need to redeem money for gold. [12]





<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 4. CryptoCommodity

CryptoCommodities are representative money in electronic form. As representative money, they represents the intrinsic value of the underlying asset. CryptoCommodities do not aim to provide a measurement of this intrinsic value but, instead, they rely in a price formation mechanism to capture the marginal utility of the asset.

CryptoCommodities are a specialization of Utility Tokens built on top of a fungible asset, that add a stabilization mechamism once value is captured, to create a Currency Token.

### 4.1. The Underlying Asset

Asset Proxied by an utility



### 4.2. CryptoCommodity Peg

As a Stablecoin, a CryptoCommodity value has a natural built-in stability. This stability is borrowed from the underlying asset.

Economic history and literature are rich with schemes to peg the price of the currency to a price index or price index derivative, in order to provide price stability: monometallic (gold) standards, bimetallism, and later the symmetallism proposed by Marshall (1886, 1887a, 1887b) and Edgeworth (1895); the “fixed value of bullion” standard proposed by Williams (1892); Fisher's compensated dollar (1911, 1913a, 1913b, 1913c, 1913d, 1914, and 1920); the Commodity Reserve Currency scheme suggested by Goudriaan (1932), B. Graham (1937, 1944), F. D. Graham (1942), and revisited by Friedman (1951); Hall's (1982) ANCAP basket; the proposal by Miles (1984) and Sumner (1989, 1991, 1995) to use futures contracts, Kevin Dowd’s (1994) quasi-futures contract, and later Dowd’s (1999) price index option. For a review of this literature the reader is referred to Dowd (1996, Chapter 14). [38]

Since blockchain advent, the cryptocurrency landscape is rich in fiat backed stablecoins, either pegged to a fiat currency (USDT, USDC, BUSD, FRAX, MIM, Pax Dollar, USDJ, Gemini USD, USDP,Palau, FDUSD, PYUSD, Real USD, TrueUSD, ZUSD, DAI, CUSD, USDD, USB, USDe, Raft, eUSD, TerraUSD, Fei, EUROCEUROe, GBPT, XSGD, IDRT, BIDR, BRZ, DRAM, MXNT, MXNC), pegged to a commodity (PAXG,GLD,MCAU,AABBG,NNN, AWG,PMGT,CTLX,XAUT,DGX,CACHE,RBZ GBDTRBZ ZiG, GODL, SLVT, CRUDE,PDX, PTR, FIX, GEM, BANANA, SOYA, CORA, WHEA, SOYB, CORB, XCORN XSOY, XWHEAT, XRICE) or pegged to another cryptocurrency (frxETH). They all peg their price to the price formed  in an external market. The price formation mechanism is external to the stablecoin ecosystem. This price needs to be captured from the external source and set into the cryptocurrency with an stabilization mechanism that implies to manage the supply. Either if the price manually set by the stablecoin issuer, or the smart contract has a built-in access with Oracles, the stablecoins will inherit the centralization feature of the price formation source. Unfortunately this is against blockchain decentralization principles. [49]

A CryptoCommodity is different animal to fiat backed stablecoins. A Cryptocommodity is bound to the intrinsic value of the underlying asset. There is not need of quantification of this intrinsic value. Instead, a Cryptocommodity exposes the asset intrinsic value (whichever its quantity) to form its price according to the marginal utility of the underlaying market as perceived by the consumer. The price formation is, therefore, internal to the CryptoCommodity ecosystem. As a consequence, a Cryptocommodity is decoupled from any external monetary system, fiat or not fiat, creating an autonomous ecosystem on its own. A CryptoCommodity delivers the foundation for a true asset value decentralization.


### 4.3. Collateral





### 4.4. Redeemability




### 4.5. CryptoCommodity Functions

CryptoCommodities capture the underlying asset economic value to deliver the 3 main functions of money in the same Currency Token. 

CryptoCommodities purchasing power is borrowed from the marginal utility of the underlying asset. They can be used as payment method for the underlying asset or for any other asset in a relation of the price of this other asset and the marginal utility captured from the underlyting asset.

<div style={{textAlign: 'center'}}>
	<img src="/img/cryptocommodities_scope3.svg" width="100%"></img>
</div>
<br/>

CryptoCommodities do not ambition to be used as monetary standard. Instead CryptoCommodities are born with the vocation to participate in private currency competition. As a consequence, they can be priced in any coexisting monetary standard, no matter if this is a legal tender or a social agreement. Their mission is to represents the value of the underlaying asset and ignore any aspect external to the underlying asset.

### 4.6. CryptoCommodity Ecosystem

CryptoCommodity is built on a fungible asset that can be extracted, manufactured and/or transformed, commercialized and/or serviced. A CryptoCommodity has a built-in stabilization mechamism, in coordination with the exchange, to capture the value of the asset from the upderlying  market. As a consequence, a CryptoCommodity includes a price formation within its ecosystem. 

<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem_before.svg" width="80%"></img>
</div>
<br/>

The price formation is dynamic, which means, is in a continual revision. The purchasing power of the currency will growth in relation to other currencies as long the issuer is providing incremental value to the society. If the provider denies to provide value, the CryptoCommodity value will fall, and its purchasing power will be reduced. As a consequence consumers will prefer other currencies. This will encourage the issuer to provide the best practies and a environment of wealth.

The value extracted from the undelying asset by the CryptoCommodity issuer will be delivered to the society in the form of DeFi Services.

We will discuss about the underlying asset in the next section.

### 4.7. CryptoCommodity Scope

CryptoCommodities are designed to be applied in both, local or international scopes, as long as there is enough supply in the scope of application. CryptoCommodities promote an atmosphere of investment and entrepreneurship to empower citizens to solve their own problems.

### 4.8. CryptoCommodity vs Stablecoin

The only Token Model that has the purpose to become a currency today is the Stablecoin. Find below differences between CryptoCommodity and Stablecoin.

|                                 | Stablecoin                                                  | CryptoCommodity                                                               |
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



## 5. CryptoCommodity as Currency
---

In this section we will discuss the requirements that enable CryptoCommodity to fulfill its main functions, namely to serve as a medium of exchange, as a store of wealth, and unit of  account. That is to increase its demand.

### 5.1. Quality of Money

The quality of money is defined as the capacity of money, as perceived by actors, to fulfill its main functions, namely to serve as a medium of exchange, as a store of wealth, and unit of  account. The theory of the quality of money maintains that the <b>demand for money does depend on the quality of money</b>.

The theory of the quality of money, even though not under this label, has a long tradition. While many authors have discussed the factors influences the quality of money, no unifying consensus has ever been established. From Juan de Mariana (1609), Sir William Petty (1662), Adam Smith (1776), Jean Baptiste Say (1802), Nassau William Senior (1850), John Stuart Mill (1848), Carl Menger (1871), William Stanley Jevons’s (1875), Mises (1953), Rothbard (2004) provide different insights on the quality of money.

The price of money is its purchasing power. As any price, the price of money is determined by its supply and demand. <b>The demand for money is determined by its marginal utility. The utility of money is, in turn, determined by money’s quality, i.e., its capacity to fulfill its services.</b>

One of the most important properties for the quality of money is the <b>existence of a non-monetary demand in society for the money</b>. This demand can be in the form of consumption goods or factors of production. It is important for the quality of money that its non-monetary demand plays an essential role in society—everyone wants and needs it. The money is not only demanded as a medium of exchange but also for other purposes. Thus, for money, as a good, there exist many unsatisfied wants and the intensity of the wants are relatively high and permanent (Menger 1892, p. 5). <b>The non-monetary demand is important because it gives the money holder an “insurance.”</b>. 

<div style={{overflowX : 'auto'}}>
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
</div>

### 5.2. Quantity Theory of Money

In contrast to the hesitant qualitative monetary analysis by the economists mentioned above, there is also a current in the economic literature that does not treat qualitative issues at all. This is the simple quantity theory of money. The theory was originally formulated by Nicolaus Copernicus in 1517, whereas others mention Martín de Azpilcueta and Jean Bodin as independent originators of the theory. John Locke studied the velocity of circulation, and David Hume in 1752 used the quantity theory to develop his price–specie flow mechanism explaining balance of payments adjustments. Also Henry Thornton, John Stuart Mill and Simon Newcomb among others contributed to the development of the quantity theory. The quantity theory of money is the <b>heart of neoclassical monetary theory</b>. It has later been discussed and developed by several prominent thinkers and economists including John Locke, David Hume, Irving Fisher and Alfred Marshall. Milton Friedman made a restatement of the theory in 1956 and made it into a <b>cornerstone of monetarist</b> thinking.

The quantity theory of money is most often expressed and explained by reference to the <b>equation of exchange</b>. The equation of exchange was derived by economist John Stuart Mill. The equation states that the total amount of money that changes hands in an economy will always be equal to the total monetary value of goods and services that changes hands in an economy. In other words, the amount of nominal spending will always be equal to the amount of nominal income. The equation is as follows:

<div style={{textAlign: 'center'}}>
	<img src="https://cdn.corporatefinanceinstitute.com/assets/equation-of-exchange1.png" width="60%"></img>
</div>

where M=Money Supply, V=Velocity of circulation (the number of times money changes hands), P=Average Price Level, T=Volume of transactions of goods and services

The <b>velocity of money</b> is a measurement of the rate at which money is exchanged in an economy. It is the number of times that money moves from one entity to another. The velocity of money also refers to how much a unit of currency is used in a given period of time. Simply put, it's the rate at which consumers and businesses in an economy collectively spend money. The velocity of money is usually measured as a ratio of gross domestic product (GDP) to a country's M1 or M2 money supply.


### 5.3. CryptoCommodity as Competing Currency

Quantity Theory of Money does not reconciliate well with crypto. As Hayek claimed 

> The quantity theory presupposes that there is only one kind of money in circulation within a given territory, the quantity of which can be ascertained by counting its homogeneous (or near-homogeneous) units". This is not the case for private money issued in a competence reguime. 

This means Fisher's Exchange Equation or Velocity of Money (Token Velocity) are not theories of application for Utility Tokens and, therefore, for competing CryptoCommodities.

Despite Adam Smith proposed the so-called real bills doctrine, or a quality theory of money, in the Wealth of Nations, there is not a Quality Theory of Money development in the classic bibliography. There are papers on what should be The Quality of Money but there is not a unified theory. Additionally, if there would be a Quality Theory of Money it should need to be updated to cope with electronic means, internet, blockchain and cryptocurrencies advent. Therefore, we must retake the existing work on Quality of Money and propose a unified Quality Theory of Money within CryptoCommodity design.

### 5.4. CryptoCommodity as Quality Currency

In order to create a complete Quality Theory of Money we must identify the functions of money that will be covered since every function would have different quality requirements.

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

### 4.6. CryptoCommodity Principles

CryptoCommodities are built on clear principle of compliance, transparency, privacy, security and decentralization with the mission to provide a tool to bost real economy, in particular, in regions with financial exclusion.

### 5.5. The ideal underlying asset

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


## 6. The CryptoCommodity Value Chain
---

In this section we will review what is the lifecycle of a CryptoCommodity and how can interact with the different actors of the society. We also discuss how it can benefit each party.

### 6.1. CryptoCommodity Lifecycle

A CryptoCommodity takes economic value from nature and delivers to the adopting society. A CryptoCommodity builds a well-oiled ecosystem where a network of participants fulfills their objectives and meets specific needs to ensure seamless operations. All the particicipants are coordinated within the CryptoCommodity ecosystem and it must be designed as a sustainable system.

<div style={{textAlign: 'center'}}>
	<img src="/img/token_value_chain2.svg" width="100%"></img>
</div>

All the requirements described must be particularized for each stage of the CryptoCommodity Value Chain. for example, the compliance in the funding stage is not the same as the compiance in the distribution stage. In this section we will explore every funding stage and discuss requirements and opportunities.


### 6.2. Supply Profile

Supply Management is a critical aspect in the CryptoCommodity lifecycle as it is part of the setting required to deliver its features. There are several stages involved in the lifecycle of a CryptoCommodity.

- <b>Funding Rounds</b>. The process starts with an optional funding period. This period is dedicated to create one or multiple funding rounds by the issuing team and raise funds from investors to fund the project. This is an optional step.

- <b>Token Generation Event</b>. Once fuding rounds are finished, the Token Generation Event (TGE) happens. In this one time ocurring event, the initial supply is first added to the CryptoCommodity with the initial allocations as described later. The TGE timing is defined by the CryptoCurrency issuer in the schedule and roadmap.

- <b>Value Capture</b>. After the TGE, the project activities will push up the price of the token whereas it captures the value of the underlying asset. During this stage, the more benefitial profile for the token is this of a gold standard because it will allow a quick growth of the value for investors,

- <b>Value Capture Event</b>. When the demand of the asset utility on the underlying market matches the supply, it is considered that the value has been captured. This is called Value Capture Event (VCE). The VCE is a equilibrium point, and therefore, its timing can be estimated, can also be advanced or delayed by tuning the demand but cannot be precised beforehand.

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
					content: ['VCE'],
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
					content: ['TGE'],
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
<br/>

A CryptoCommodity borrows the features of both a Utility Token, before the Value Capture, and a Stablecoin on Tokens Release. This means that tokenomics for a CryptoCommodity must merge and align best practices from both token models.

### 6.3. CryptoCommodity Accounts

In order to design every stage of the value chain, the issuer assigns a portion of token units to every stage stakeholders. Allocation is an allotment of tokens or equity, that may be earned, purchased, or set aside for a certain investor, team, group, organization, or other related entity. The way tokens are allocated must align with the project's long-term goals.

There is a lack of an established framework or widely accepted industry standard for designing tokenomics. There isn't a unified language or consistent definition for token allocations. What one project names "Liquidity Mining Programs" can also be labeled by others "Community Incentives," "Farming Rewards," or "Ecosystem Pool." Some combine teams, partners, and advisors into one "Core Contributors" category, while others separate these groups into distinct categories. There is a also great degree of flexibility in token allocation amounts. The figures are typically determined by what would be considered acceptable based on benchmarks for non-investor token allocation and by bilateral negotiations between the team and the investors. A great token allocation will not ensure a project’s success, a poor one will ensure its failure.

We propose below a classification of allocation concepts grouped by stage in the value chain.

export const TokenAllocationConcepts = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Project', 'Project',
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'DeFi Services', 
							'Project', 'Funding', 'Liquidity', 'DeFi Services'
						],
						datasets: [{
								backgroundColor: ['#0000FF', '#0000FF', '#00FF00', '#00FF00', '#00FF00', '#006400', '#006400', '#FF0000'],
								data: [9, 1, 2, 3, 5, 4, 5, 71],
								order: [11, 12, 2, 3, 4, 6, 7, 9],
								index: 0
							}, {
								backgroundColor: ['#0000FF', '#00FF00', '#006400', '#FF0000'],
								data: [10, 10, 9, 71],
								order: [1, 10, 5, 8],
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
											return ([8, 9, 5, 7].includes(label.index));
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

<TokenAllocationConcepts/>
<br/>

Token allocations will be different to actual Supply Distribution. 

A convenient way is to prevent overconcentration of tokens in a specific account, or group of accounts, as they would have the power to determine the price of the token and this would imply a reputational cost for the issuer.






### 6.4. Total Supply Composition

The Total Supply for a CryptoCommodity is the number of tokens units existing in a certain moment.

The composition of Total Supply would depend on the stage in which the CryptoCommodity is working:

- during the <b>value capture period</b>, between the TGE and the VCE, the Total Supply is fixed. In this period, if the project raise expectations, the number of tokens on hands on holders grows as the demand also grows and, conversely, the number of tokens in the exchanges should shink. When demand matches token unit in the exchanges, the VCE is fired.

- the VCE triggers the stabilization mechanism which guarantees token units in the exchanges matching real demand, in order to maintain the captured underlying value. This is the <b>value delivery period</b> As the demand increases, the number of token units in the exchanges should also increase. At this point, the CryptoCommodity delivers the 3 functions of money and there are holders that store token units to keep their funds and other to trade the underlting market. On VCE also the DeFi Services initiates.

<div style={{textAlign: 'center'}}>
	<img src="/img/supply_evolution.svg" width="100%"></img>
</div>





### 6.5. Creating Benchmarks

This exercise needs to be done upfront, before the platform is even launched and when uncertainty is at its maximum.







<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>

## 7. Value Capture Stage
---

In this chapter will be described how to launch a CryptoCommodity and what token units will be preminted to cover the initial necessities. In the next 3 chapters, what are these necessities and how the allocated tokens are used will be covered.

### 7.1. Scope

Value Capture Stage is the period that covers from project inception to the VCE where the token value is captured. This period includes carrying out fundraising and project aactivities as well as deploying the token into the exchanges to allow price capture.

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
			backgroundColor: 'rgba(245,245,245)',
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
					content: ['VCE'],
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
					content: ['TGE'],
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





### 7.2. Initial Token Allocation

 With the purpose of launching the project, a number of tokens are preminted and allocated to key stakeholders. Initial allocation decides how many tokens (as a percentage) will be allocated to the key stakeholders and accounts that will be involved in the project launch. 
 
 The initial token allocation is a way to motivate contributors to join a project. Hence, it has to be sufficient enough to satisfy their expectations and necessities to collaborate into the project success. But, on the other hand, has to be small enough to prevent discouraging new stakeholders joining the project. Additionally, as any token allocation, it must avoid generatuion of whales, that is, accounts with a number of token units that allows them interfering into the token price by altering the supply. In such a way, this Initial Token Allocation is optional, which means, launching a project with no preminted tokens is a valid choice.

The allocation of tokens is usually determined by the project's tokenomics or whitepaper, which outlines how the tokens will be distributed and what percentage of the total supply will be allocated to each group.
<br/>

export const InitialTokenAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Project', 'Project',
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Funding', 'Exchanges', 'Operations'
						],
						datasets: [{
								backgroundColor: ['#006400', '#0000FF', '#00FF00', '#00FF00', '#00FF00', '#006400', '#006400', '#FF0000'],
								data: [0, 1, 2, 3, 5, 4, 0, 0] ,
								order: [11, 12, 2, 3, 4, 6, 7, 9],
								index: 0
							}, {
								backgroundColor: ['#0000FF', '#00FF00', '#006400', '#FF0000'],
								data: [1, 10, 4, 0],
								order: [10, 1, 5, 8],
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
											return (datasetColors[label.index] != '#FF0000' && [1, 2, 3, 4, 10].includes(label.index));
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
<br/>
<br/>

A CryptoCommodity can premint and allocate tokens to the following stakeholder groups:

- Project, which is the allocation for project expenses,

- Funding, which includes all investors that will contribute to launch the project, and

- Exchanges, which refers to the seed token units required to create initial liquidity pols in the exchanges where the CryptoCommodity is going to be traded

We will discuss these concepts in more detail in the next sections.

### 7.3. Genesis Distribution


#### 7.3.1. Premined Distribution

Premining is the process of generating and distributing a certain number of tokens before the cryptocurrency is launched to the public and their allocation to specified coin addresses. This process is typically done by the developers or founders of the CryptoCommodity. The premined coins are often distributed in various ways, such as:

- funding the project in a initial coin offering (ICO)

- providing funds to the project to cover operation costs as team salaries, 

- separating funds to deploy the token on the exchanges or feed a reserves account

- marketing activities as airdrops or giveaways

The way premine works are typical; the team will mint out a certain % of the tokens in advance and often distribute it to specific accounts. This can be controversial, as the developers will have a large percentage of the coin’s total supply, giving them a significant degree of control over its price and direction. The way to prevent this happening is to lock or vest the premined tokens that does not need to be used at the short term. So there is a balance between reputation and premining tokens at launch.

#### 7.3.2. Vesting Schedules

The purpose of including vesting schedules it to mitigate sell pressure on premined tokens causing a unexpected price decrease.

This is acheived by locking tokens, either in a custom locker or a external service, duiring a period.

The release can be different way, including linear...

Some recommendations to lockup and vesting periods follows.

The lockups for the "Core Team" should be large enough to prove that they are interested and motivated to play the long-term game. The most common vesting duration for the Core Team is 4 years with 1-year cliff.

For Investors typically see a shorter lockup period on tokens than team vesting periods because they benefit from earlier liquidity and the optionality of selling. There are also token-oriented investors whose strategy is to sell the tokens as soon as they launch/unlock.

With the purpose of preventing overflow in the exchanges of tokens purchased during the funding rounds on the TGE, a CryptoCommodity has the potential to run vesting schedules on the purchased tokens. With or without vesting, there will be a Release Schedule. Whereas more knowledge needs to be acquired about the best practices on vesting, the funcionality is provided by the CryptoCommodity Framework.


- Reserve. It's important to consider all the unforeseeable obstacles and opportunities that may arise in the future.

- Marketing incentives. Typically, there are no lockups, or they are only partly locked with a 1-12 months overall lockup period.


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
						label: 'Exchanges',
						backgroundColor: "#006400",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 8, 12, 40, 48)
					}, {
						fill: true,
						label: 'Seed Round',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 0, 12, 10, 24),
					}, {
						fill: true,
						label: 'Pre-Sale',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 4, 3, 40, 24)
					}, {
						fill: true,
						label: 'Public-Sale',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 10, 3, 50, 12)
					}, {
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



### 7.4. Fair Launch

A fair launch refers to an equal distribution of a cryptocurrency token at launch. This means everyone will have an equal opportunity to acquire tokens from the beginning, preventing insider trading and price manipulation. The issuing team should ensure that the distribution of the new cryptocurrency is fair and equitable and avoid pre-mining or pre-allocating tokens to themselves or a select group of individuals.

A cryptoCommodity can be launched in Fair Launch but the issuing team will lose the capability to get funded. There can be another benefits. Fair Launch configuration must be included in the benchmarks to evalute best practices.




<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 8. Project Activities


### 8.1. Project Allocation

ICO offerings limit the flexibility of the issuer to raise further rounds of financing via follow-on offerings of tokens or of traditional equity financing. Entrepreneurs need to predetermine and reserve a portion of the tokens issued for the purposes of further financing rounds [45]. 

The token section assigns tokens to specific accounts or tasks that contribute to project evolution. This can include:

- core team

- advisors

- foundations

- marketing and promotion

- research and development

- legal and regulatory

This allocation is created on the Token Generation Event but only fraction is released. The most of the allocation is locked to guarantee compromise with the project by stakeholders.

export const ProjectAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Project', 'Project',
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Funding', 'Liquidity', 'Operations'
						],
						datasets: [{
								backgroundColor: ['#0000FF', '#0000FF', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
								data: [9, 1, 2, 3, 5, 4, 5, 71],
								order: [11, 12, 2, 3, 4, 6, 7, 9],
								index: 0
							}, {
								backgroundColor: ['#0000FF', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
								data: [10, 10, 9, 71],
								order: [1, 10, 5, 8],
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
											return ([8, 9, 5, 7].includes(label.index));
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



### 8.2. Marketing

There are several ongoing distribution schemes that can be applied in different stages of a CryptoCommodity:

- Airdrops. The main purpose of airdrops is to kick-start the creation of a community of token-holders before or together with the ICO, or to boost the network effects of already created networks. Airdrops are used for marketing purposes; to raise awareness of a new token; drive more participants to the issuance; but also reward existing participants/token-holders for their loyalty, their active engagement in the network or for bulk purchases. [45]

- Giveaway. A crypto giveaway is a promotional event in the cryptocurrency space where individuals or organizations distribute cryptocurrency tokens or coins for free to participants. Typically, these giveaways are used to promote a particular cryptocurrency project, exchange, or to increase brand awareness.

Is probably up to the issuer the selection of the distribution mechanims that he wants to provide but we should acomplish a full database of use cases and recommendations.



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 9. Fundraising Activities
---

CryptoCommodity Framework provides to the issuer the infrastructure to fund his project. Any person can propose a real world project backed by fungible assets, design a token and launch a funding campaign to fund the project. The mechanism created for CryptoCommodities to fund the project is called a Initial Token Offering (ICO) as an analogy to IPO.

#### 9.1. Funding Allocation

The purpose of Funding Allocation is to provide funds to the funding rounds lopanned in the projecvt roadmap. A fair launch, without any funding allocation is welcome by the token investors. This can include:

- private rounds

- pre-sales

- public sales

export const FundingAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Project', 'Project',
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Funding', 'Liquidity', 'Operations'
						],
						datasets: [{
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#00FF00', '#00FF00', '#00FF00', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
								data: [9, 1, 2, 3, 5, 4, 5, 71],
								order: [11, 12, 2, 3, 4, 6, 7, 9],
								index: 0
							}, {
								backgroundColor: ['#D3D3D3', '#00FF00', '#D3D3D3', '#D3D3D3'],
								data: [10, 10, 9, 71],
								order: [1, 10, 5, 8],
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
											return ([8, 9, 5, 7].includes(label.index));
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


### 9.2. Structuring Token Sales

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

### 9.3. Choosing Funding Platform

The current ICO model means that legitimate projects need to overcome significant financial, administrative and regulatory challenges in order to see a successful outcome, requires a deep understanding of blockchain technology, cryptocurrencies, application security, smart contract implementation, token standards, Solidity programming, etc. Additionally, the issuying team needs to assemble a multidisciplinary team, create and host a website, purchase, claim and vesting widgets, write a whitepaper, a litepaper and some pitch decks, design a roadmap, plan a tokenomics, token distribution and allocations, hire good developers to write some smart contracts and pass code audits, build and maintain a community, publish in press, perform AMAs, hire influencers and maintain an investors agenda, get expert advisers, manipulate pools, deploy to exchanges, and perform manual vesting tasks, comply with all national and local regulations, and the list goes on and on. Some service providers offer some of the requirements out of the box, as ICO scripts, marketing tasks.

In 2018, the Initial Exchange Offering (IEO) appeared. This is a new way to run an ICO, the cryptocurrency centralized exchange is directly involved in the selection of projects, organization and sale of tokens. The exchange also becomes key marketing partner of the project, and the listing of coins is carried out only a couple of days after the campaign ends. There are several advantages of the IEO over ICO: ready-made base of potential IEO participants, risk of scams for investors is lower. The project is launched at the exchange after profound verification, Listing of new tokens is faster, investor returns are higher, the investment process is simple, main advantage of this approach for organizers is the ready-made base of potential IEO participants from a huge number of exchange users, so the marketing costs for the project team are reduced. The drawbacks of IEOs – gatekeeping, opaque vetting processes and listing fees.

An IDO is another evolution of the fundraising model, where a project launches its tokens on a decentralized exchange (DEX) instead of a centralized exchange like in an IEO. IDOs offer several advantages, such as faster fundraising, lower fees, and a more decentralized process. Investors participate in IDOs by providing liquidity to the token's trading pool on the DEX, typically in the form of a token pair (e.g., the project's token and a stablecoin). The tokens can then be traded on the DEX, allowing for immediate liquidity and price discovery. 

Alternative generalistic models have been proposed as DAICO, ILO, SHO, IFO, ISPO, FTO, LBP and specific as ETO, IGO, STO, INO.

Existing IDO portals are generalistic and do not play well with real worl projects. CryptoCommodity Framework provides a foundation to build ICO tools which match launching of real world projects. A bespoken launchpad specialized in CryptoCommodity projects is build-in in dAppmin.

### 9.4. Calculating Investors Profit

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/price_estimations_black.svg" width="70%"></img>
</div>




### 9.5. Estimating Investors Exit

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
					yValue: 75,
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


### 9.6. Considerations for Funding

Democratization of funding with local or global investors. A instrumentalization of FFF funding.

On launching a CryptoCommodity, the monetary policy will follow an Utility Token pattern so not a collateral will be initially required by law. This makes launching a currency friendly for any citizen which has a real world project.

Special attention must be paid to compliance.



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>




## 10. Capturing Asset Value
---

Before a CryptoCommodity can be transfer the value of underlying asset to the society, this value must be captured. In order to capture the value, a CryptoCommodity behaves as a Utility Token and has features of a Utility Token.

### 10.1. Token Generation Event

A Token Generation Event (TGE) is a business and technical act of limited duration that involves the technical generation of the token in a blockchain-based network, and its launch to the market and and made available to the public. Typically it follows a fundraising process but not necessarily.

In the TGE the preminted tokens are allocated to project designated accounts, investors that purchased during the funding rounds and reserve to support trading negotiation in ythe exchanges. Additionaly, during TGE the first liquidity pool is created in the exchanges making the CryptoCommodity ready to traded. In the TGE the price discovery process of the CryptoCommodity begins.

### 10.2. Negotiation Allocation

Negotiation Allocation if focused mainly in assigning funds to the pools of the exchanges where the token will be traded. In this portion will be inlcuded:

- initial and future exchange pools

- reserve tokens for the stabilization mechanism

export const NegotiationAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Project', 'Project',
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Funding', 'Liquidity', 'Operations'
						],
						datasets: [{
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#006400', '#006400', '#D3D3D3'],
								data: [9, 1, 2, 3, 5, 4, 5, 71],
								order: [11, 12, 2, 3, 4, 6, 7, 9],
								index: 0
							}, {
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#006400', '#D3D3D3'],
								data: [10, 10, 9, 71],
								order: [1, 10, 5, 8],
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
											return ([8, 9, 5, 7].includes(label.index));
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

### 10.3. Creating Liquididty Pools


### 10.4. Negotiation Mechanism

Typically negotiation happened by allocating tokn unit to xchang pair. Th xchang i in charg to orm th pric with th xiting pair.

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/price_determination2.svg" width="70%"></img>
</div>

In ord to implnt th tabilization mchanim, a rrv account mut back vry xchang pair. Tokn will b puld rom th rrv account to h pair whn i ncary to provid liuidity to rduc th pric. Convrly, tokn will b olvd rom th pair to th rrv account whn i ncary to rduc liuidity to th pair in ordr to rduc th price.

### 10.5. Estimating Price Evolution


### 10.6. Considerations

Negotiation is highly impacted by <b>decentralization</b> as it may affects the price of the asset and the reputation of the issuer.

Depending on the scope of the CryptoCommodity, <b>compliance</b> may also have to be considered as some juritdiction impose restrictive rules on investment accounts, trading diclosure or governance of the contract. A record must be kept of compliance reuirement in the juridictions to deploy and CryptoCommodity must allow reconfiguration of the compliance.

<b>Security</b> is another aspect to consider since token unit will be deployed to exchange pair and thereore subject to vulnerabilities.

The system must care about the reputation of the CryptoCommodity by enabling <b>transparency</b>. full diclosure must be provided on operation

Finally, optionally <b>privacy</b> should be included on the CryptoCommodity and lt to the consideration of the issuer according to compliance rule and personal prefFerences.



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 11. Value Release Stage
---

Once underlying asset value has been captured, the CryptoCommodity is ready to deliver DeFi Services to the community. This chapter describes how the required tokens will be distributed. The next chapetrs will focus on the stabilization mechanism to maintain the captured value and the scope of services delivered.

### 11.1. Scope

Value Release Stage is the period that covers from the VCE onwards and is mainly dedcaited to maintaining the captured value and delivering DeFi Services to the community.

<div className="chart-panel2">
<Line
  data={{
		labels: [0,'',100,'',200,'',300,'',400,'',500,'',600,'',700,'',800,'',900,'',1000,'',1100,'',1200],
		datasets: [{
			fill: true,
			label: 'Gold Standard',
			backgroundColor: 'rgba(245,245,245)',
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
					content: ['VCE'],
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
					content: ['TGE'],
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

### 11.2. Consolidated Supply Management

Once the project has been funded and the value of the underlying asset has been captured we already know that the currency represents the value of the underlying asset utility. At this point the Cryptocurrency is an Unit of Account because it captures the underlaying asset utility. Also the Cryptocurrency is a Store of Value because there is enough number of transaction to provide stability to the system.

From this point onwards, a CryptoCommodity has a built-in stabilization mechanism that guarantees taht the value is always captured.

### 11.3. Consolidated Token Allocation


export const ConsolidatedTokenAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Project', 'Project',
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'DeFi Services', 
							'Project', 'Funding', 'Liquidity', 'DeFi Services'
						],
						datasets: [{
								backgroundColor: ['#0000FF', '#0000FF', '#00FF00', '#00FF00', '#00FF00', '#006400', '#006400', '#FF0000'],
								data: [9, 1, 2, 3, 5, 4, 5, 71],
								order: [11, 12, 2, 3, 4, 6, 7, 9],
								index: 0
							}, {
								backgroundColor: ['#0000FF', '#00FF00', '#006400', '#FF0000'],
								data: [10, 10, 9, 71],
								order: [1, 10, 5, 8],
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
											return ([8, 9, 5, 7].includes(label.index));
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

<ConsolidatedTokenAllocation/>
<br/>




### 11.4. Ongoing Distribution


- Tokens must be purchasesd by consumers



### 11.5. Release Schedule


export const ReleaseScheduleChart = () => {
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
						label: 'Exchanges',
						backgroundColor: "#006400",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 8, 12, 40, 48)
					}, {
						fill: true,
						label: 'Seed Round',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 0, 12, 10, 24),
					}, {
						fill: true,
						label: 'Pre-Sale',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 4, 3, 40, 24)
					}, {
						fill: true,
						label: 'Public-Sale',
						backgroundColor: "rgba(0,205,0,1.0)",
						borderColor: "rgba(0,0,0,0.1)",
						data: vesting(60, 10, 3, 50, 12)
					}, {
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

<ReleaseScheduleChart/>

### 11.6. Considerations for Distribution

Decentralization, wealth distribution. whales gini

An important reuirement to distribute tokens in a jurisdiction is that there should not be rules preventing currency utilities, e.g. the CryptoCommodity must be allowed as a <b>payment method</b>, if this utility is going to be provided.

Another consideration is to prevent high concentration of token units in some wallets. In particular prevent the ocurrence of <b>whales</b> as they can harm the investors experience and the reputation of the CryptoCommodity. If possible, the Gini Coefficient must be controlled. Preventing whales affects to all stages of distributionm including funding, negotiation.


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 12. Maintaining Value Stability
---

Differently to a stablecoin, which is stabilized to capture the fiat price of the static asset from a broad external market, CryptoCommodity Framework includes a stabilization mechanism that allows the token to capture the economic value of the underlying from its own market. This provides a valuable tool to boost real economy. [40]

### 12.1. Stabilization Mechanisms

Stabilization mechanism is a artifact apply in the exchanges liquitiy pools to guarantee that the CryptoCommodity represents the underlayiing asset and is able to be priced according to its marginal utility.

On the literature review for price stabilization, 3 mechanisms have been proposed. (I) Ametrano and Morini proposed the so-called Hayek Money (Misnomer*). Hayek Money adjust the supply to match the price obtained from an external source in a rebasement mechanism. This simple mechanism leads to the unstable purchasing power because the rebasement directly modifies the amount of money in each wallet. (II) Sams proposed a new mechanism for the price stabilization, named Seigniorage Share to automatically adjust supply through shares with which users can purchase stablecoins. The Basis stablecoin was an example of a seigniorage algorithmic stablecoin, although it was ultimately shut down due to regulatory concerns. (III) Burn and Mint Equilibrium Multitoken Model burns the “value-seeking” tokens in order to receive the “payment” tokens. Notable examples are Factom, Helium, CHR.

### 12.2. CryptoCommodity Stabilization Mechanism

The common goal for existing mechanisms is to adjust the token price to an externally formed price by adjusting the token supply. None of these mechanisms deals with the capture of economic value or the task of price formation itself. Instead, the mechanism that we present here for CryptoCommodities is concerned with the tasks of (1) capturing the underlying asset intrinsic value, and (2) expose the asset intrinsic value to form its price according to the marginal utility as perceived by the consumers.

#### 12.2.1. Capturing Intrinsic Value

Capturing intrinsic value is what representative money does by definition as it represents the underlying assets in the defined amount. In order to achieve this goal, we can match the supply of the CryptoCommodity units in the exchanges to the existing demand in the real world market. We do not need to estimate the intrinsic value, we do not need to decide f it comes from land, from production process or from any other objective criteria. As long we guarantee a 1-to-1 relationship between demand and CryptoCommodity units in the exchanges the intrinsic value of the asset will be represented in the CryptoCommodity.

picture

This intrinsic value capture only deals with the CryptoCommodity units in the exchanges and is agnostic about the Circulating Supply, the number of locked units or the Total Supply of the CryptoCommodity. This flexibility allows a leverage that, despite it could suppose a financial risk that must be accessed, does not interfere in the value capture process itself.

#### 12.2.2. Price Formation by Marginal Utility

Leave price formation for this intrinsic value in basis of utility (subjective value)


Multipair exposure

Multitoken exposure

### 12.3. Value Capture Event

Is possible to define the Value Capture Event as the time when the CryptoCommodity represents the underlying asset. This will happen when 1 unit of demand matches 1 unit of CryptoCommodity in the exchanges. When this happens value has been captured and this triggers the stabilization mechanims to maintain this captured intrinsic value.








<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 13. Providing DeFi Services
---

By using the CryptoCommodity a heartbit of the marketplace, we can extract the economic value of the asset and this will allows to provide addtional benefits to the community. 

Besides providing a currency, the CryptoCommodity will work a foundation for additional financial services so, other citizens can propose their own CryptoCommoditi project, create their own CryptoCommodity and increae the wealt of the system.

<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem_before.svg" width="80%"></img>
</div>
<br/>




#### 13.1. DeFi Services Allocation

The DeFi Services allocation will cover the utilities delivered by the CryptoCommodity after the Value Capture Event. This allocation is not included in the Initial Token Allocation and will be mined on demand by the stabilization mechiams in parallel to demand increases. It will include:

- funds for payments

- funds for cards

- funds for transfers

- funds for lending

export const OperationsAllocation = () => {
	return (
		<div className="chart-container">
			<div className="chart-panel">
				<Doughnut
					data={{
						labels: [
							'Project', 'Project',
							'Private Sale', 'Presale', 'Crowdsale', 
							'Exchanges', 'Exchanges',
							'Operations', 
							'Project', 'Funding', 'Liquidity', 'Operations'
						],
						datasets: [{
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#FF0000'],
								data: [9, 1, 2, 3, 5, 4, 5, 71],
								order: [11, 12, 2, 3, 4, 6, 7, 9],
								index: 0
							}, {
								backgroundColor: ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#FF0000'],
								data: [10, 10, 9, 71],
								order: [1, 10, 5, 8],
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
											return ([8, 9, 5, 7].includes(label.index));
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

### 13.2. Interfacing with exchanges

#### 13.2.1. Cards

Currently there are cards, both already compatible with crypto currencies. 

#### 13.2.2. Vending Machines


#### 13.2.3. Mobile Phones


### 13.3. Unit of Account


### 13.4. Reserve of Value



### 13.5. Payments

#### 13.5.1. Commodity Payments


#### 13.5.2. Other Payments

Mean of Exchange

commodity payments

other commodity payments

unit of account

First it will make a fully featured currency which will empower the community. 

- Medium of Exchange



Thanks to its stable nature, a CryptoCommodity can be used for payments for good and services. 

It needs to be as payment method for the underlying market in order to form the price.

It can also be used as payment method for other assets as long as commonly accepted by moth parties.





### 13.6. Transfers

CryptoCommodities can participate in transfers as remittances, international transfers as long as is accepted.

### 13.7. Lending

Credit is the main reason that motivated the obsolescence of gold standard and introduction of fiat currencies. The problem of credit with the legal tender is that risk is collectivized. CryptoCommodities, as private money, allow lending with the benefit that the irsk is privatized, not affecting to the society as a whoe. 

<div style={{textAlign: 'center'}}>
	<img src="/img/credit.png" width="70%"></img>
</div>

A CryptoCommodity can work as collateral of lending operations in existing platforms. A CryptoCommodity coudl also work as payment method for lending on a own lending platform.







<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>










## 14. Implementation of CryptoCommodities
---

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

### 14.2. Upgradeable

we love the principle of inmutability but we also think technology is not yet ready for it. As theoretical framework is still being created and need to learn from experience with benchmarks, creating an inmutable token is like shooting your own feet if you want to do a serious project. We think we need to achieve trust by different means as having a great project and a mission. As a consequence, currently, the CryptoCommodity contract must be upgradeable to include new updates and definitions. In order to prevent a reputational risk, the upgrades can be protected by a voting system.

Inn current implementation, every facet contains a versioned logic of the functionality. However, they can be upgraded in a way that one, or many functions, can be replaced by other functions with the same signature or adding new functions.

The long term idea is to release to community the governance.

### 14.3. The challenge of Velocity of Circulation (Saleableness)

Velocity serves as a measurement of the rate at which money is exchanged within an economy. Most countries calculate their velocity of money using a ratio that divides Gross Domestic Product by the country's total money supply.

Analogous to the fiat world, in the crypto world we define token velocity. Token velocity measures the speed at which tokens circulate in a cryptocurrency ecosystem. When tokens change hands swiftly, it means they're being used for transactions, investments, or even just as a medium of exchange. On the flip side, if tokens stay locked away in wallets, collecting dust like forgotten treasures, their velocity is low. Low velocity might sound like a good thing at first, but as we'll discover, it's not always the case.

A token that has limited utility and lack of incentive to encourage holding of the token is likely to have a high velocity. In turn, this will reduce the opportunity for token price appreciation. Strategies that encourage token holding (e.g. staking) or that are deflationary (e.g. burning) may promote token price appreciation. However, this may have limited effect should velocity not already have reached its ceiling.

Causes of the high token velocity is that the prices are not expressed on the currency.

To understand token velocity we must distinguish the value capture stage from the value delivery stage. In the value delivery stage, the CryptoCommodity will make use t=of the stabilization mechanism to become and stablecoin. This shoud, provide guarantees to holders to keep the currency on their wallets.

#### 14.3.1. Token Velocity during Value Capture 

During the Vauke Capture stage the CryptoCommodity will behave as an utility token. This is the critical part where the holders can be reluctant to keep the tokens in their wallets. In order to reduce velocity some approaches can be considered:

- Introduce a profit-share mechanism

- Build staking functions into the protocol

- Balanced burn-and-mint mechanics

- Gamification to encourage holding

- for a local market, vending machines could be used to deliver the product or service

- express the prices in CryptoCommodity units


#### 14.3.2. Token Velocity during Value Delivery

During the Valkue Delivery Stage the token will start its stability mechanism to become stablecoin so holders will be willing to hold onto excess tokens rather than sell them for something else.

- Become a store of value. If people genuinely come to believe in a token as a store of value, there will be a significant probability that they’re willing to hold onto excess tokens rather than sell them for something else.

### 14.4. The challenge of Wallets

15 years after the advent of Bitcoin, and many million funded by VCs in crypto projects, we still do not have a gadget hardware wallet to pay in the market with crypto. And this says a lot.

The assumption of mobile apps working as cryptocommodity wallets sounds to degrade crypto to a subproduct. Also, smartphone operating systems are not decentralized themselves. Large software corporations have priviledges incorporated in the firmware of these devices. We think a new economic model deserves its own devices. On the other hand, existing wallets are mostly connected to the computer and this is not practical as a mainstream payment system. Also the new wallet initiatives looks to be designed for high end consumers and they see the revenue in the basis of high prices. This is not affordable for most of world population.

We think a crypto wallet should be a garage control-like $20 device, that works wirelessly and, maybe without internet (e.g. via GSM). Until we do not have this kind of devices, crypto cannot be massified.

I the meatime, there is room for discussion if vending machines or gift cards could fit the bill for a workable crypto wallet for privately issued currencies.

### 14.5. The challenge of Security

Security is crucial in crypto world. A quality money must be built on a secure system. Some security policies are being used to pervent vulnerabilities:

- Code includes <b>multisig role-based access</b> to functionalities.

- The whole CryptoCommodity code must be <b>audited</b>. 

- Code is open source to allow <b>white hats contributions</b>. Ideally should be also be in continuous validation by the community.

- We are exploring ERC-20R to create <b>DAO-protected storage backups</b> of the status to allow reverting in case of vulnerability. 

### 14.6. The challenge of Decentralization

#### 14.6.1. Network Decentralization

- network decentralization

- networks where the token is deployed should fulill the reuired decentralization standards. The decentralization of this networks will influde in the reputation of the CryptoCommodity


crosschain

#### 14.6.2. Exchanges Decentralization


#### 14.6.3. Smart Contract Decentralization

Decentralization is a features that should analized at different levels:


#### 14.6.4. Governance Decentralization

- decentralization on governance, the stabilization mechanism should ideally work standalone without the issuer needing to mint or burn manually token units.


#### 14.6.5. Wealth Decentralization

Gini and Nakamoto Coefficients

### 14.7. The challenge of Compliance

Despite they do not have a fiat collateral, CryptoCommodities will be possibly considered as stablecoins for regulatory bodies. The FSB’s 2020 report, “Regulation, Supervision and Oversight of ‘Global Stablecoin’ Arrangements” described three characteristics that distinguish a Global Stablecoin from other crypto-assets and other stablecoins. Those characteristics include: (i) the existence of a stabilisation mechanism, (ii) the usability as a means of payment and/or store of value, and (iii) the potential reach and adoption across multiple jurisdictions. The first two characteristics (the existence of a stabilisation mechanism and usability as a means of payment and/or store of value), and the unique risks that these characteristics pose, distinguish stablecoins from other crypto-assets. The third, the potential reach and adoption across multiple jurisdictions, differentiates Global Stablecoin from other stablecoins. [43]

Recommendations for Prudential and Conduct Regulation of the Crypto Ecosystem: Stablecoins [46]
- Financial Stability 
- Consumer and Investor Protection 
- Operational and Cyber-Resiliency 
- Financial Integrity 
- Embracing the Potential of Stablecoins While Managing Risks

Compliance mut be reviewed according to the juridiction where the CryptoCommodity will be deployed.

https://github.com/Catallactic/catallactic-suite

#### 14.7.1. Collateral

The goal of collateral is allow the holder to redeem its currency by the underlying asset on demand.

Increasingly, goverments are requiring to stablecoins a full collateralization of the issued supply. For fiat stablecoins this implies, storing a number of assets equivalent to the total supply. This is mainly required to prevent expansion on fiat supply with desvirtuates regulatory policies. CryptoCommodities do not increase fiat supply so they should have a diffeernt consideration for collateral.

A CryptoCommodity system is naturally collateralized by the asset service in the underlying market. At any moment, the issuer can redeem the holder as a regular consumer of the underlying asset utility. According to IMF: 

> a viable commodity standard does not require the redemption of money for the specific commodities defining the ultimate unit of account. This greatly simplifies and reduces the cost of operating such a system.".

In order to assess compliance requirements, the redeemability features must be considered. According to IMF:

> Stablecoins denominated in a monetary unit of account and offering redemption into cash on demand—that will likely be used for payments—should be fully backed in perfectly safe and liquid
assets. [46]

This is not the case for CryptoCommodities as they are redeemable by the seets service, not by cash.

>  Stablecoins offering redeemability within an elapsed time may be backed with safe but less liquid assets [46]

On the other hand, a CryptoCommodity is not referenced to fiat and does not increase regulatory risk.

Depends on the kind of asset service, collateral could be just a provision guarantee with a service provider.

### 14.8. The challenge of Transparency


### 14.9. The challenge of Privacy


### 14.10. Deployment




<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 15. Supporting Tools
---

### 15.6. DAppmin

https://github.com/Catallactic/catallactic-admin

### 15.6. ICO Purchases DApp


### 15.6. Vesting Tracker







<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>






## 16. A CryptoCommodity-based Economy
---

In this we will analyse the topic of introducing CryptoCommodity tokens in an economy with a coexisting legal tender. 

### 16.1. Currency competition

The coexistence of competing private currencies has been documented from some authors. 





### 16.2. Stability of a CryptoCommodity Market

#### 16.2.1. Understanding a regulated system

In a regulated system, the output is somehow modified and injected to the input. This backwards injection is called a feddbackp loop.

<div style={{textAlign: 'center'}}>
	<img src="https://www.tutorialspoint.com/control_systems/images/positive_feedback.jpg" width="50%"></img>
</div>
<br/>

#### 16.2.2. Positive vs Negative Feedback Loops

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

#### 16.2.3. Regulation in a CryptoCommodity market

Market itself, if not distorted, is a well performing price formation machine. A CryptoCommodity have a built-in self-regulation since customers provide a negative feedback loop regarding the quality of the currency. If the currency does tno fullfill the expected quality, the demand for the CryptoCommodity is reduced. This is Adam's Smith Invisible Hand.

<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem_loop.svg" width="100%"></img>
</div>
<br/>



### 16.3. At the rescue of real economy

Once we have designed th principles of CryptoCommodity, in this chapter we will discuss how the Financial Economy has taken 97+% of the economic landscape and how CryptoCommodity can help providing oxygen to an exhausted Real Economy.

#### 16.3.1. Monetary Expansion of Legal Tender



#### 16.3.2. Debate on Neutrality of Money

The neutrality of money, also called neutral money, is an economic theory stating that changes in the money supply only affect nominal variables and not real variables. In other words, the amount of money printed by central banks can impact prices and wages but not the output or structure of the economy,w hich means, there is not distortion in relative prices.


<div style={{textAlign: 'center'}}>
	<img src="/img/financial assets vs real assets March 2022_0.jpg" width="80%"></img>
</div>

price distortion



#### 16.3.3 The Split Economy

The real economy concerns the production, purchase and flow of goods and services (like oil, bread and labour) within an economy. Economic activity is conceptualized as ‗real‘ because real resources are applied to produce something which people can buy and use. 

Real economy can be measured by the GDP.

The financial system is mainly concerned either with moving funds around so that those who wish to buy can do so, or helping people to exchange ownership of the productive resources. Financial system is depegged from real consumer necessities.

#### 16.3.4. The Squeezed Real Economy

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

#### 16.3.5. End Financial Exclusion

### 16.4. Comparing Economic Models

<div style={{overflowX : 'auto'}}>
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
</div>

### 16.5. Further Industry Development

Some challenges still remain open in a privately issued CryptoCommodities configuration. First, the heterogeity of currencies can be simplified creating currecny wrappers.

Additionaly, insurance companies could provide services in case a currency does not follow standards.

Private 'Lender of Last Resort?

### 16.6. Free Banking Introduction

incremental introduction

coexistence with legal ledger


In the previous bibliography there is the overal assumption that system is working under a free banking schenario. This situation woud require a social consensus and sponsorship for the government and seems unfeasible. the introduction of CryptoCommodity is somehow different. CryptoCommodity would complement existing legal tender.

First we need to disntighuish the scope of the introduced currencies. There can be global currencies and there can be local currencies.

 For this case we would have a incremental introduction and issuers and consumers would decide at what level they should move forward withe the adoption.

### 16.7. Crowdsolving

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







## 17. Conclusion
---

We have exposed how a novel kind of token which takes the best of Stablecoins and best of Utility Tokens can be created. 

The token borrows from Stablecoins the concept of stabilization mechanim. However, differs to Stablecoins in how to form the price. This new token forms its own price by capturing the value generated in an underling market. This complies with initial blockchain promises of decentralizacion in value. The stabilization mechanism provides to the token a foundation to fulfill currency based utilities a payment, card, lending or transfer.

On the other hand, the new token also borrows from utility tokens the notion of funding rounds. This allows any issuer to fund his project, either globally or locally, and offer additional services to the society as defi services. The model is open to staking, launchapd, or other defi services.

We have also covered how this new token can be implemented as a diamond standard, managed by the issuing team and what are the main requirements (security, decentralization, compliance, privacy and transparency) and challenges (velocity of circulation and wallets) for its adoption.

Finally we have described how the adoption of this new token could empower the squish real economy.

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>






## 18. References
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



[46] Regulating the Crypto Ecosystem: The Case of Stablecoins and Arrangements, 2022,  https://www.imf.org/en/Publications/fintech-notes/Issues/2022/09/26/Regulating-the-Crypto-Ecosystem-The-Case-of-Stablecoins-and-Arrangements-523724

[47] How centralized is decentralized? Comparison of wealth distribution in coins and tokens, Bartosz Kusmierz, Roman Overko, https://arxiv.org/pdf/2207.01340.pdf

https://www.iwsfintech.com/post/ieo-imo-ido-ido-2-ico-rico-ico-2-uto-icco-sto-ato-trmi-daico-eto-ifo-iao-dso-steo


[48] DeFi lending: intermediation without information?, Sirio Aramonte, Sebastian Doerr, Wenqian Huang, Andreas Schrimpf, 14 June 2022 - https://www.bis.org/publ/bisbull57.pdf


[49] An impossibility theorem on truth-telling in fully decentralized systems by Rodney Garratt and Cyril Monnet, August 2023 - https://www.bis.org/publ/work1117.pdf 