---
slug: Yellowpaper
title: Yellowpaper
authors: [catallactic, pellyadolfo]
tags: [crypto, RWA, tokenization]
image: https://i.imgur.com/mErPwqL.png
---
---

import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
// https://github.com/chartjs/chartjs-plugin-annotation/issues/786
import { Line } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';

import '@site/src/css/papers.css';

:::note
`(Please, be aware that, whereas this yellowpaper already gives an idea of why a new form of money is needed, still is a work in progress)`
:::

## Abstract
---



## Keywords
---

representative money, cryptocurrencies, cryptocommodities, stablecoins, price formation, stabilization mechanism, tokenomics, private currencies, currency competition, cantillon effects, monetary theory

<!-- truncate -->

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>

## 1. A Review on Value
---


From its origins in medieval times, the historical evolution of the value debate became locked into a centuries old dialectical conflict between the objective and subjective approaches. This study has traced the waves of value theories which oscillated back and forth towards each approach, until Walras and Marshall accommodated both rivaling approaches of value within their separate General and Partial Equilibrium frameworks.

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


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>

## 2. Definition of Money
---

### 2.1. Evolution of Money

Before money, there was <b>barter</b>. Goods were produced by those who were good at it, and their surpluses were exchanged for the products of others. Every product had its barter price in terms of all other products, and every person gained by exchanging something he needed less for a product he needed more. The voluntary market economy became a latticework of mutually beneficial exchanges. In barter, there were severe limitations on the scope of exchange and therefore on production. This crucial element in barter is what is called the double
coincidence of wants. A second problem is one of indivisibilities. [0]

Trying to overcome the limitations of barter, commodity began to be used as a medium of exchange. When a commodity is used as a medium for most or all exchanges, that commodity is defined as being a money. [0] Money made up of some valuable commodity is called commodity money, and from ancient times until several hundred years ago <b>commodity money</b> functioned as the medium of exchange in all but the most primitive societies. The problem with a payments system based exclusively on commodities is that such a form of money is very heavy and is hard to transport from one place to another.

<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<td><img src="/img/money_type_barter_128.png" /></td>
			<td><img src="/img/money_type_commodity_128.png" /></td>
			<td><img src="/img/money_type_backed_128.png" /></td>
			<td><img src="/img/money_type_metal_128.png" /></td>
			<td><img src="/img/money_type_fiat_128.png" /></td>
			<td><img src="/img/money_type_crypto_128.png" /></td>
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
</div>
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

A <b>medium of exchange</b> is the set of assets in an economy that people regularly exchange for goods or services. A medium of exchange has two key features: First, it represents a part of its owner's assets; second, it is commonly accepted in transactions. We refer to medium of exchange as the set of assets in an economy that people regularly exchange for goods and services. The use of money as a medium of exchange promotes economic efficiency by eliminating much of the time spent in exchanging goods and services. This is the function described in the previous sections.

Money also functions as a <b>store of value</b>; it is a repository of purchasing power over time. A store of value is used to save purchasing power from the time income is received until the time it is spent. This function of money is useful because most of us do not want to spend our income immediately upon receiving it but rather prefer to wait until we have the time or the desire to shop. Commodity money has an exchange value because if not used as money it can be used as a commodity.

The value of a coin used as an <b>unit of account</b> could also be different from that of the same coin in circulation, a phenomenon referred to as “ghost money” or “imaginary money” (Cipolla 1956; Einaudi 1937, 1953; Sargent and Velde 2002). Einzig (1966) reports on primitive cultures in which people apparently first converged on one or a few commodities as unit of account before converging on one or a few as medium of exchange (similarly, Moini 2001, pp. 284-86). Barter, though continuing, was facilitated by valuing traded goods in the numéraire commodity, instead of keeping track of separate exchange ratios between the two goods in each possible transaction. The numéraire also facilitated valuing unilateral transfers, induding compulsory and traditional ones. Temporal precedence of the numéraire over the medium-of-exchange function is far, however, from a universal historical facto.

Menger famously argued that one or a few generally employed media of exchange evolved in primitive societies from commodities found convenient as intermediate goods - goods that people were glad to accept in barter exchanges, even if they did not want them for their own use, because they observed that other people also would readily accept them. Gradually one (or a few) ofthese intermediate goods becarne dominant because certain properties (formerIy recited in money-and-banking textbooks) made it especially convenient and economical for the purpose. Once people almost routinely paid and received this good in exchanges and in unilateral payments, it was convenient to adopt it as the <b>monetary standard</b> of value (unit of account, numéraire) also.

In the modern fiat-money system, the two functions of money—medium of exchange and unit of account—happen to coincide. However, there is wide agreement that there existed a dichotomy between the medium of exchange (e.g., silver coin) and the unit of account (or “money of account”) in the commodity-money system; see, for example, White (1984), Glassman and Redish (1988), Rolnick, Velde and Weber (1997), Redish (2000), Sargent and Velde (2002), and Velde (2009). Indeed, historically, units of account preceded media of exchange in the sense that units of weight, such as the talent and the shekel, evolved into medium-of-exchange units when coins were minted that had specified relations to the weight (Shiller 2002). [50]

A unit of account can coexist with multiple media of exchange. The euro existed only as a unit of account for three years before its notes and coins went into circulation in 2002, the old national currencies meanwhile continuing as media of exchange.


### 2.3. Medium of Exchange

The quality of money is defined as the capacity of money, as perceived by actors, to fulfill its main functions, namely to serve as a medium of exchange, as a store of wealth, and unit of  account. The theory of the quality of money maintains that the <b>demand for money does depend on the quality of money</b>.

The theory of the quality of money, even though not under this label, has a long tradition. While many authors have discussed the factors influences the quality of money, no unifying consensus has ever been established. Different authors provided different insights on the quality of money.

<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<td>Money</td>
			<td>Qualities as Currency</td>
		</tr>
		<tr>
			<td>Juan de Mariana (1609)</td>
			<td>Deterioration of the quality of gold coins must be considered a tax</td>
		</tr>
		<tr>
			<td>Sir William Petty (1662)</td>
			<td>Deterioration of the quality of coins by the government a tax</td>
		</tr>
		<tr>
			<td>Adam Smith (1776)</td>
			<td>Durability and divisibility</td>
		</tr>
		<tr>
			<td>Jean Baptiste Say (1802)</td>
			<td>Divisible, of the same quality, resistant to friction, sufficiently rare, and malleable</td>
		</tr>
		<tr>
			<td>John Stuart Mill (1848)</td>
			<td>-</td>
		</tr>
		<tr>
			<td>Carl Menger (1871)</td>
			<td>-</td>
		</tr>
		<tr>
			<td>William Stanley Jevons’s (1875)</td>
			<td>-</td>
		</tr>
		<tr>
			<td>Mises (1953)</td>
			<td>Does not mention the quality of money</td>
		</tr>
		<tr>
			<td>Rothbard (2004)</td>
			<td>In heavy demand, highly divisible, portable, durable, and has a high value per unit weight</td>
		</tr>
		<tr>
			<td>Friedrich Hayek</td>
			<td>-</td>
		</tr>
	</table>
</div>
<br/>

The price of money is its purchasing power. As any price, the price of money is determined by its supply and demand. <b>The demand for money is determined by its marginal utility. The utility of money is, in turn, determined by money’s quality, i.e., its capacity to fulfill its services.</b>

One of the most important properties for the quality of money is the <b>existence of a non-monetary demand in society for the money</b>. This demand can be in the form of consumption goods or factors of production. It is important for the quality of money that its non-monetary demand plays an essential role in society—everyone wants and needs it. The money is not only demanded as a medium of exchange but also for other purposes. Thus, for money, as a good, there exist many unsatisfied wants and the intensity of the wants are relatively high and permanent (Menger 1892, p. 5). <b>The non-monetary demand is important because it gives the money holder an “insurance.”</b>.

#### 4.1.3. Store of Value

<!---
https://study.com/academy/lesson/money-as-a-unit-of-account-definition-function-example.html
* divisible
* fungible
* countable
-->
#### 4.1.3. Unit of Account

Price Formation

#### 4.1.4. Monetary Standard

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>



## 3. Physical Requirements for Medium of Exchange
---

<!---
https://bitcoinmagazine.com/guides/what-is-money
-->
<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<td>Quality</td>
			<td>Author</td>
			<td>Description</td>
		</tr>
		<tr>
			<td>Uniform</td>
			<td>Say</td>
			<td>all parts are equal to each other, that two equal weights of the medium share the same value</td>
		</tr>
		<tr>
			<td>Divisible</td>
			<td>Adam Smith, Say, Rothbard [0]</td>
			<td>easy to divide up in smaller parts or put them together to larger parts</td>
		</tr>
		<tr>
			<td>Durable</td>
			<td>Adam Smith, Say, Rothbard [0]</td>
			<td>we can store it and it won’t age with time</td>
		</tr>
		<tr>
			<td>Recognizable</td>
			<td></td>
			<td>easy to recognize the material, it should not demand extensive tests to prove what material it is</td>
		</tr>
		<tr>
			<td>Unforgeable</td>
			<td></td>
			<td>very hard or even impossible to counterfeit</td>
		</tr>
		<tr>
			<td>Scarce</td>
			<td>Say, </td>
			<td>total supply of the medium is limited and known</td>
		</tr>
		<tr>
			<td>Acceptable</td>
			<td>Rothbard [0]</td>
			<td>accepted as a medium of exchange in the community</td>
		</tr>
	</table>
</div>
<br/>

In order to create a complete Quality Theory of Money we must identify the functions of money that will be covered since every function would have different quality requirements.

To work as a Medium of Exchange:

* comply with requirement or physical money, that is, <b>Uniform</b>, <b>Divisible</b>, <b>Portable</b>, <b>Durable</b>, <b>Scarce</b>. This is not a problem for an smart contract

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

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 4. Economic Requirements for Medium of Exchange
---

### 4.1. Quantity Theory of Money

In contrast to the hesitant qualitative monetary analysis by the economists mentioned above, there is also a current in the economic literature that does not treat qualitative issues at all. This is the simple quantity theory of money. The theory was originally formulated by Nicolaus Copernicus in 1517, whereas others mention Martín de Azpilcueta and Jean Bodin as independent originators of the theory. John Locke studied the velocity of circulation, and David Hume in 1752 used the quantity theory to develop his price–specie flow mechanism explaining balance of payments adjustments. Also Henry Thornton, John Stuart Mill and Simon Newcomb among others contributed to the development of the quantity theory. The quantity theory of money is the <b>heart of neoclassical monetary theory</b>. It has later been discussed and developed by several prominent thinkers and economists including John Locke, David Hume, Irving Fisher and Alfred Marshall. Milton Friedman made a restatement of the theory in 1956 and made it into a <b>cornerstone of monetarist</b> thinking.

The quantity theory of money is most often expressed and explained by reference to the <b>equation of exchange</b>. The equation of exchange was derived by economist John Stuart Mill. The equation states that the total amount of money that changes hands in an economy will always be equal to the total monetary value of goods and services that changes hands in an economy. In other words, the amount of nominal spending will always be equal to the amount of nominal income. The equation is as follows:

<div style={{textAlign: 'center'}}>
	<img src="https://cdn.corporatefinanceinstitute.com/assets/equation-of-exchange1.png" width="60%"></img>
</div>

where M=Money Supply, V=Velocity of circulation (the number of times money changes hands), P=Average Price Level, T=Volume of transactions of goods and services

The <b>velocity of money</b> is a measurement of the rate at which money is exchanged in an economy. It is the number of times that money moves from one entity to another. The velocity of money also refers to how much a unit of currency is used in a given period of time. Simply put, it's the rate at which consumers and businesses in an economy collectively spend money. The velocity of money is usually measured as a ratio of gross domestic product (GDP) to a country's M1 or M2 money supply.

### 4.2. Necessity of a Price System

#### 4.2.1. Purchasing Power


### 4.3. Convenience of Credit

### 4.4. Monetary Expansion


### 4.5. Neutrality of Money

The neutrality of money, also called neutral money, is an economic theory stating that changes in the money supply only affect nominal variables and not real variables. In other words, the amount of money printed by central banks can impact prices and wages but not the output or structure of the economy,w hich means, there is not distortion in relative prices.


<div style={{textAlign: 'center'}}>
	<img src="/img/financial assets vs real assets March 2022_0.jpg" width="80%"></img>
</div>

price distortion


#### 4.5.1. Currency Debasement


#### 4.5.2. Cantillon Effects


#### 4.5.3. The Split Economy

Since the money is not bound to real world value, from 1971, the economy has split in 2:

* The real economy concerns the production, purchase and flow of goods and services (like oil, bread and labour) within an economy. Economic activity is conceptualized as ‗real‘ because real resources are applied to produce something which people can buy and use. Real economy can be measured by the GDP.

* The financial system is mainly concerned either with moving funds around so that those who wish to buy can do so, or helping people to exchange ownership of the productive resources. Financial system is depegged from real consumer necessities.

#### 4.5.4. The Squeezed Real Economy

The monetary base for real economy is squeezed by the financial economy, and shrinking everyday. This blocks any progress for real economy, put barriers to entry to entrepreneurs creating increasingly Cantillon Effects and excluding citizens from the financial system. The trigger of this trend <a href="https://wtfhappenedin1971.com/" target="_blank">happened on 1971</a>.

<div style={{overflowX : 'auto'}}>
	<table style={{textAlign: 'center'}}>
		<tr>
			<td><img src="/img/financial assets vs real assets March 2022_0.jpg" width="100%"></img></td>
			<td><img src="/img/exter.png" width="80%"></img></td>
		</tr>
	</table>
</div>
<br/>

The Exter’s Pyramid of Liquidity illustrates the liquidity of assets arranged from the hardest to liquidate (complex derivatives and real estate) to the most liquid asset, physical gold. We can see how the world GDP (real economy) was a 5% of existing liquidity, including derivatives in 2016. 



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>



## 5. Engineering Requirements for Medium of Exchange
---

### 5.1. Systems Stability

#### 5.1.1. A Regulated System

In a regulated system, the output is somehow modified and injected to the input. This backwards injection is called a feddbackp loop.

<div style={{textAlign: 'center'}}>
	<img src="https://www.tutorialspoint.com/control_systems/images/positive_feedback.jpg" width="50%"></img>
</div>
<br/>

#### 5.1.2. Positive and Negative Feedback

When providing feedback to a system, there are 2 possibilities:

- Negative feedback (or balancing feedback) occurs when some function of the output of a system, process, or mechanism is fed back in a manner that tends to reduce the fluctuations in the output, whether caused by changes in the input or by other disturbances. A classic example of negative feedback is a heating system thermostat — when the temperature gets high enough, the heater is turned OFF. When the temperature gets too cold, the heat is turned back ON. In each case the "feedback" generated by the thermostat "negates" the trend.

- The opposite tendency — called positive feedback — is when a trend is positively reinforced, creating amplification, such as the squealing "feedback" loop that can occur when a mic is brought too close to a speaker which is amplifying the very sounds the mic is picking up, or the runaway heating and ultimate meltdown of a nuclear reactor.

<div style={{overflowX : 'auto'}}>
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
</div>
<br/>

Whereas positive feedback tends to lead to instability via exponential growth, oscillation or chaotic behavior, negative feedback generally promotes stability. Negative feedback tends to promote a settling to equilibrium, and reduces the effects of perturbations. Negative feedback loops in which just the right amount of correction is applied with optimum timing, can be very stable, accurate, and responsive.

In the next 2 sections we will see how a market of privately issued CryptoCommodity is doubly regulated with negative feedbakc loops. This adds an extra layer of stability.

In the next chapter we will see how the monetary fiat system is regulated by a positive feedback loop which is the composed by the national statistical offices and the monetary policiies of the Central Banks. This configuration is, by definition, unstable.


#### 5.1.3. A centralized system

positive feedback


#### 5.1.4. A self-regulated system

negative feedback

Market itself, if not distorted, is a well performing price formation machine. A CryptoCommodity have a built-in self-regulation since customers provide a negative feedback loop regarding the quality of the currency. If the currency does tno fullfill the expected quality, the demand for the CryptoCommodity is reduced. This is Adam's Smith Invisible Hand.

<div style={{textAlign: 'center'}}>
	<img src="/img/ecosystem_loop.svg" width="70%"></img>
</div>
<br/>


### 5.2. Economic Calculation

Use of Knowledge in Society [58]


#### 5.2.1 Price Formation

price formation in a centralized system

price formation in a self-regulated system



### 5.3. Regression Theorem

The Regression Theorem, first proposed by Ludwig von Mises in his 1912 book The Theory of Money and Credit, states that the value of money can be traced back ("regressed") to its value as a commodity.




### 5.4. Currency competition

The coexistence of competing private currencies has been documented from some authors.




<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 6. Technological Requirements for Medium of Exchange

CryptoCommodities are built on clear principles. These principles must be provided in the contract. 

* **security**. CryptoCommodities must be secure. 

* **decentralization**. CryptoCommodities must be decentralized enough to guarantee holders and users the promised behaviour.

  * **upgradeability**. CryptoCommodities must be upgradeable during the learning period to allow accomodating new changes. This upgradeability must be protected by mechanisms as DAO gobernance to prevent a conflict with decentralization.

* **compliance**. CryptoCommodities must comply with the regulations in all stages of their value chain in the areas where it is deployed.

  * **privacy**. CryptoCommodities must include a privacy capability so the issuer can make use of it according to the regulation in place. This must be an optional property to prevent a conflict with compliance.

* **transparency**. CryptoCommodities should provide ability to get disclosures at any moment of their current features and configuration

However, as the principles maybe change between regions or underlying assets a degree of configuration must be also included.


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 7. Known Money Configurations


### 7.1. Physical Configurations


#### 7.1.1. Barter


#### 7.1.2. Commodity Money


#### 7.1.3. Representative Money


#### 7.1.4. Fiat Money

### 7.2. Tokenizations

#### 7.2.1. Unbacked Tokens


#### 7.2.2. Utility Tokens

##### 7.2.2.1. Bitcoin

bitcoin as monetary standard

##### 7.2.2.2. Monero

#### 7.2.3. Security Tokens



#### 7.2.4. Stablecoins


#### 7.2.5. NFTs









<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 8. On the Necessity of a Quality Theory of Money

#### 8.1. QTM

Quantity Theory of Money does not reconciliate well with competing currencies. As Hayek claimed 

> The quantity theory presupposes that there is only one kind of money in circulation within a given territory, the quantity of which can be ascertained by counting its homogeneous (or near-homogeneous) units". This is not the case for private money issued in a competence reguime. 

This means Fisher's Exchange Equation or Velocity of Money (Token Velocity) are not theories of application for Utility Tokens and, therefore, for competing CryptoCommodities.

Despite Adam Smith proposed the so-called real bills doctrine, or a quality theory of money, in the Wealth of Nations, there is not a Quality Theory of Money development in the classic bibliography. There are papers on what should be The Quality of Money but there is not a unified theory. Additionally, if there would be a Quality Theory of Money it should need to be updated to cope with electronic means, internet, blockchain and cryptocurrencies advent. Therefore, we must retake the existing work on Quality of Money and propose a unified Quality Theory of Money within CryptoCommodity design.

#### 8.1. Medium of Exchange Requirements

<div style={{overflowX : 'auto'}}>
	<table>
		<tr style={{textAlign: 'center'}}>
			<td><b>Feature</b></td>
			<td><b>Description</b></td>
		</tr>
		<tr style={{textAlign: 'center'}}>
			<td colSpan="3"><b>Physical Requirements</b></td>
		</tr>
		<tr>
			<td>Uniform</td>
			<td>all parts are equal to each other, that two equal weights of the medium share the same value</td>
		</tr>
		<tr>
			<td>Divisible</td>
			<td>easy to divide up in smaller parts or put them together to larger parts</td>
		</tr>
		<tr>
			<td>Durable</td>
			<td>we can store it and it won’t age with time</td>
		</tr>
		<tr>
			<td>Recognizable</td>
			<td>easy to recognize the material, it should not demand extensive tests to prove what material it is</td>
		</tr>
		<tr>
			<td>Unforgeable</td>
			<td>very hard or even impossible to counterfeit</td>
		</tr>
		<tr>
			<td>Scarce</td>
			<td>total supply of the medium is limited and known</td>
		</tr>
		<tr>
			<td>Acceptable</td>
			<td>accepted as a medium of exchange in the community</td>
		</tr>
		<tr style={{textAlign: 'center'}}>
			<td colSpan="3"><b>Economic Requirements</b></td>
		</tr>
		<tr>
			<td>Stable (Short Term)</td>
			<td>Must be able to form a price system</td>
		</tr>
		<tr>
			<td>Credit</td>
			<td>Must be able to provide credit</td>
		</tr>
		<tr style={{textAlign: 'center'}}>
			<td colSpan="3"><b>Engineering Requirements</b></td>
		</tr>
		<tr>
			<td>Stable (Long Term)</td>
			<td></td>
		</tr>
		<tr>
			<td>Competing</td>
			<td></td>
		</tr>
		<tr style={{textAlign: 'center'}}>
			<td colSpan="3"><b>Electronic Requirements</b></td>
		</tr>
		<tr>
			<td>Secure</td>
			<td></td>
		</tr>
		<tr>
			<td>Decentralized</td>
			<td>must be decentralized enough to guarantee holders and users the promised behaviour.</td>
		</tr>
		<tr>
			<td>Upgradeability</td>
			<td></td>
		</tr>
		<tr>
			<td>Compliant</td>
			<td>must comply with the regulations in all stages of their value chain in the areas where it is deployed.</td>
		</tr>
		<tr>
			<td>Privacy</td>
			<td></td>
		</tr>
		<tr>
			<td>Transparent</td>
			<td>should provide ability to get disclosures at any moment of their current features and configuration</td>
		</tr>
	</table>
</div>
<br/>





<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 9. On the Necessity of a New Kind of Money

### 9.1. Further Industry Development

Some challenges still remain open in a privately issued CryptoCommodities configuration. First, the heterogeity of currencies can be simplified creating currecny wrappers.

Additionaly, insurance companies could provide services in case a currency does not follow standards.

Private 'Lender of Last Resort?



### 9.2. Free Banking Introduction

incremental introduction

coexistence with legal ledger


In the previous bibliography there is the overal assumption that system is working under a free banking schenario. This situation woud require a social consensus and sponsorship for the government and seems unfeasible. the introduction of CryptoCommodity is somehow different. CryptoCommodity would complement existing legal tender.

First we need to disntighuish the scope of the introduced currencies. There can be global currencies and there can be local currencies.

 For this case we would have a incremental introduction and issuers and consumers would decide at what level they should move forward withe the adoption.

### 9.3. Ending Financial Exclusion

Representative digital money has the potential to end the financial exclusion by providing citizens several tools:

* any citizen could fundraise to grow a real economy project providing value in his community

* there would be an increase in lending offer so no one would be excluded from credit by incorrect behaviour. It is up to each credit provider to assume the risk and do the verifications.

* there would be healthy projects a broader job offer available.

In general, there would be incentives to contribute value to the society instead of withdrawing value from others.

### 9.4. Crowdsolving

Extracting value from nature and delivering into society to fullfill consumers will will benefit to everyone:

- issuers will be able to fund his local or global project

- issuers will also profit by providing DeFi Services to society

- investors will profit by investing in successful projects

- consumers will benefit with higher offer

- citizens excluded from financial system will be able to fund their projects with private risk

- society will benefit from more liquid financial markets

- citizens from developing countries can create their own economy and fix their problems

- governments will be able to delegate the difficult part into citizens

### 9.5. Comparing Economic Models

<div style={{overflowX : 'auto'}}>
	<table>
		<thead>
			<tr>
				<th scope="col">Feature</th>
				<th scope="col">Gold Standard</th>
				<th scope="col">CC Competition</th>
				<th scope="col">Fiat</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">Price Formation</th>
				<td></td>
				<td>Matching consumers will</td>
				<td>Distorted</td>
			</tr>
			<tr>
				<th scope="row">Relative Prices</th>
				<td></td>
				<td>Matching consumers will</td>
				<td>Distorted</td>
			</tr>
			<tr>
				<th scope="row">Economic Calculation</th>
				<td></td>
				<td>Yes</td>
				<td>Biased</td>
			</tr>
			<tr>
				<th scope="row">Allocation of Resources</th>
				<td></td>
				<td>Matching consumers will</td>
				<td>Priviledged</td>
			</tr>
			<tr>
				<th scope="row">Critical Resources</th>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<th scope="row">Credit Availability</th>
				<td></td>
				<td>Yes, without Cantillon Effects</td>
				<td>Yes, with Cantillon Effects</td>
			</tr>
			<tr>
				<th scope="row">Entry Barriers</th>
				<td></td>
				<td>No</td>
				<td>Yes</td>
			</tr>
			<tr>
				<th scope="row">Projects Risk</th>
				<td></td>
				<td>Privatized</td>
				<td>Socialized</td>
			</tr>
			<tr>
				<th scope="row">Supply / Demand matching</th>
				<td></td>
				<td>Yes</td>
				<td>No</td>
			</tr>
			<tr>
				<th scope="row">Externalities</th>
				<td></td>
				<td>Yes</td>
				<td>No</td>
			</tr>
			<tr>
				<th scope="row">Social Values</th>
				<td></td>
				<td>Natural</td>
				<td>Imposed</td>
			</tr>
		</tbody>
	</table>
</div>

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>




## 10. Conclusion
---





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




[32] The birth of coinage, Mundell, Robert A. 2002 - https://academiccommons.columbia.edu/doi/10.7916/D8Q531TK

[33] Tokens: their Significance for the Origin of Counting and Writing, Denise Schmandt-Besserat - https://sites.utexas.edu/dsb/tokens/tokens/

[34] A Treatise on Money, John Maynard Keynes, 1930 - https://ia601502.us.archive.org/4/items/in.ernet.dli.2015.28575/2015.28575.A-Treatise-On-Money.pdf

[35] A treatise on money and essays on monetary problems, Joseph Shield Nicholson, 1895 - https://www.survivorlibrary.com/library/a_treatise_on_money_1895.pdf







[38] Hayek Money: The Cryptocurrency Price Stability Solution, Ferdinando M. Ametrano, 2016 - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2425270

[39] A Note on Cryptocurrency Stabilisation: Seigniorage Shares, Robert Sams, 2015 - https://blog.bitmex.com/wp-content/uploads/2018/06/A-Note-on-Cryptocurrency-Stabilisation-Seigniorage-Shares.pdf

[40] What is Stablecoin?: A Survey on Its Mechanism and Potential as Decentralized Payment Systems. Makiko Mita, Kensuke Ito, Shohei Ohsawa, Hideyuki Tanaka - https://arxiv.org/pdf/1906.06037.pdf

[41] The Holy Grail of Crypto Currencies: Ready to Replace Fiat Money?, Richard Senner, Didier Sornette, 2018 - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3192924

[42] The Market for Cryptocurrencies, Lawrence H. White - https://www.cato.org/sites/cato.org/files/serials/files/cato-journal/2015/5/cj-v35n2-13.pdf



[43] Regulation, Supervision and Oversight of “Global Stablecoin” Arrangements, FSB - https://www.fsb.org/2020/10/regulation-supervision-and-oversight-of-global-stablecoin-arrangements/

[43] https://mises.org/wire/money-supply-continues-its-biggest-collapse-great-depression


[45] OECD (2019), Initial Coin Offerings (ICOs) for SME Financing, - https://www.oecd.org/finance/initial-coin-offerings-for-sme-financing.htm



[46] Regulating the Crypto Ecosystem: The Case of Stablecoins and Arrangements, 2022,  https://www.imf.org/en/Publications/fintech-notes/Issues/2022/09/26/Regulating-the-Crypto-Ecosystem-The-Case-of-Stablecoins-and-Arrangements-523724



[50] Unit of Account, Medium of Exchange, and Prices, January 2011, Young Sik Kim, Manjong Lee - https://www.researchgate.net/publication/254421998_Unit_of_Account_Medium_of_Exchange_and_Prices

[58] The Use of Knowledge in Society, Hayek, 1945 - https://www.econlib.org/library/Essays/hykKnw.html