---
slug: Whitepaper
title: Whitepaper
authors: [catallactic, pellyadolfo]
tags: [crypto, RWA, tokenization]
image: https://i.imgur.com/mErPwqL.png
---
---

:::danger
`(Under development. Please, come back later. Just published to share the progress)`
:::

## 1. Introduction
---
Give me a lever token long enough and a fulcrum blockchain on which to place it, and I shall move the world. Archimedes.

We are in times poor in ideas but rich in tools. The advent of programmable money brings the opoortunity to propose new economic models created by anonymous citizens without this supposing a problem or risk or the rest of society. In that way, a competency of economic models can be stablished to allow citizens choose which one suits them better. 

In this essay, first we make a review on existing currency protocols, then we are presenting Unit of Account as new kind of currency protocol. We particularize this new protocol to capture value of commodities. We also describe the value chain of cryptocommodities and propose a launchpad and token management infrastructure to relieve issuer of the management burden and to guarantee transparency, decentralization and other principles for the adopter. Finally, we also explain the challenges to implement this new model and the benefits thats brings to society.

<div style={{textAlign: 'center'}}>
	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMgL87DfiO7WGYnVrYPkx1z_e-aKwbn_iIA&usqp=CAU" width="60%"></img>
</div>

This whitepaper does not assume you master crypto. The goal is to convince those 80% that are not yet in crypto and explain why should matter to them. And, of course, get you as an investor.

<!-- truncate -->


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>

## 2. Tokenization Protocols
---


### 2.1. Blockchain Protocols

A blockchain protocol is a set of underlying rules that define how a blockchain will work. Based on the underlying rules of the protocol it’s possible to build a business ecosystem. Usually, protocol’s rules comprise everything from how tokens can be issued, how value is created, and how interactions happen on top of the protocol.

We can see blockchain as a layered architecture. Every layer is simply a set of protocols that describe how the blockchain operates.

<div style={{textAlign: 'center'}}>
	<img src="https://www.nigeriabitcoincommunity.com/wp-content/uploads/2022/05/smart-contracts.c-1.png" width="60%"></img>
</div>



### 2.2. Tokenization Protocols

The topmost layer is the layer on which different applications on the network run, including smart contracts, oracles. 

Tokenization Protocols produce tokens which are specialized smart contracts.

- Infra
- DeFi
- CeFi
- ReFi
- SocialFi
- eBuiness


### 2.3. Designing a Token

When we design a token we bind 2 worlds. On one hand, we have the real world represented by the demand. Demand is the number of goods or services, physical or digital, that the consumer acquires from the provider in exchange of units of the token. On the other hand, we have the monetary world represented by the supply which is number of tokens in existence.

<div style={{textAlign: 'center'}}>
	<img src="/img/supply_vs_demand.svg" width="60%"></img>
</div>

Whereas our efforts will focus in having a higher demand as possible, the demand is not a variable that we can control or decide. Instead we will adjust the supply to the expected or ocurred demand to provide our token the intended profile.

### 2.4. Estimating the Demand





#### 2.4.1. The underlaying asset


<table>
   <tr>
    <td rowspan="4">Product</td>
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
   <tr>
    <td>Financial Assets</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Service</td>
    <td>Acquisition</td>
    <td></td>
  </tr>
  <tr>
    <td>Rent</td>
    <td></td>
  </tr>
  <tr>
    <td>Right</td>
    <td>Certifications</td>
    <td></td>
  </tr>
</table>


#### 2.4.2. Identiying the ecosystem

#### 2.4.3. The attached utilities

<table>
  <tr>
    <td rowspan="3">Monetary Services</td>
    <td>Medium of Exchange</td>
    <td></td>
  </tr>
  <tr>
    <td>Unit of Account	</td>
    <td></td>
  </tr>
  <tr>
    <td>Reserve of Value</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="10">Financial Services</td>
    <td>Vehicle of Investment</td>
    <td></td>
  </tr>
  <tr>
    <td>Profit-Sharing</td>
    <td></td>
  </tr>
  <tr>
    <td>Mining</td>
    <td></td>
  </tr>
  <tr>
    <td>Staking</td>
    <td></td>
  </tr>
  <tr>
    <td>Transfers</td>
    <td></td>
  </tr>
  <tr>
    <td>Cards</td>
    <td></td>
  </tr>
  <tr>
    <td>Discounts</td>
    <td></td>
  </tr>
  <tr>
    <td>Lending</td>
    <td></td>
  </tr>
  <tr>
    <td>Liquidity Provision</td>
    <td></td>
  </tr>
  <tr>
    <td>Launchpad</td>
    <td></td>
  </tr>
  <tr>
    <td>Governance</td>
    <td>Governance</td>
    <td></td>
  </tr>
</table>


#### 2.4.4. Quantify the demand




### 2.5. Designing the Supply

The supply is the number of items exiting for the token. The supply is the variable that we can use to provide the expected behaviour to the token.

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/token_supply_components.svg" width="28%"></img>
</div>



### 2.6. Defining a Monetary Policy

The 

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/price_determination2.svg" width="100%"></img>
</div>

Th intrcation btw th dmand and th upply will din th pric o th tokn and also its proil.

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/Supply-and-Demand-Curve.webp" width="60%"></img>
</div>


##### 2.6.1. Tokenization Models

During the last decade a new tokenization models has been proposed. Tokenization model define how the token is bound to the underlying asset and what it grants or its holders

- no underlaying asset

- utility tokens, which capture an undetermined set of utilities

- security tokens, which provide some kind o yield over a financial token

- stablecoins

- NFT which provide ownerhip of the underlying asset. 

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.co/img/monetary_policies.svg" width="100%"></img>
</div>










<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>












## 3. Currencies as Protocols
---


### 3.1. Defining Value


* what holds the value? time, energy, commodities, work, costs, utility, capital, politics



### 3.2. Currency Principles

conigurabl proprti

- security

- decentralization

- compliance

- disclosure

- privacy

Thi principl nd to b particularizd or vry tag o th valu chain


### 3.3. Existing Monetary Protocols

- stablecoins

- syncs


### 3.4. Monetary Protocols Providers


reserve protocol

erc-3643

catallactic


### 3.5.Coexisting Monetary Protocols




### 3.6. Monetary Protocols Indutry

aggrgator
reserve?

insurers

analyt

auditor






<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>




## 4. A Unit of Account (UoA) Protocol
---

A Unit of account capture the economic value in the form of a price ormd in th underlying market.


### 4.1. The UoA Ecosystem

needs to be fungible

needs an underlying market for price formation

<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem.svg" width="100%"></img>
</div>



### 4.2. The UoA Tokenization Model

A Unit of Account is an specialization of utility token where only a certain set of utilities are part of the price formacion mechanim.

<div style={{textAlign: 'center'}}>
	<img src="/img/tokenization_maturity_model_seal.svg" width="60%"></img>
</div>

### 4.3. Structure of a UoA

<div style={{textAlign: 'center'}}>
	<img src="/img/utilities_profile.svg" width="100%"></img>
</div>


### 4.4. Defining the core utility




### 4.5. Including additional utilities

- gobernance



### 4.6. How is a UoA different to an stablecoin

tokenization of RWA blablabla







<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>
















## 5. Supply Management of UoA
---


### 5.1 Consolidated Supply Managment

Th main goal of th Unit of Account i th built-in pric ormatio mchanim. or this goal w nd to crat a ngativ dbakc loop. Thi i achivd by matching th numbr o tokn on th xchang to th xitting dmand and allowing xchang to orm th pric. Th built-in mchanim guarant that th numbr o itm conumd match th numbr th upply o th tokn in th xchang. Thror, th pric i ormd ntrily by conumr and i indpndnt o ny othr currncy.

<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem_loop.svg" width="100%"></img>
</div>

vry itm i rdmabl by a ral itm.

at vry mont, th xiting collatral match th dmand. A a conunc thi kind o currncy i not ully collatralizd. Thi allow providing liuidity without impact in th pric.

stable system

### 5.2. Supply Management on launch



### 5.3. Capturing Value



### 5.4. Singular events on the lifecycle



### 5.5. Comparing tokenization models

Stablecoin-based RWA tokenization

| Left | Centre | Right |
| :--- | :----: | ----: |
| 1    |   2    |     3 |

cryptocommodity v tablcoin.Both captur pric, on rom it ownmarkt, th othr ro m intrnational markt





<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 6. The UoA Value Chain
---

<div style={{textAlign: 'center'}}>
	<img src="/img/token_value_chain.svg" width="100%"></img>
</div>


### 6.1. Funding


- crypcommodity allow unding 

- withouth collatral

- rgulatort advantag


### 6.2. Negotiation

- capturing th valu

- cryptocommodity v tablcoin.Both captur pric, on rom it ownmarkt, th othr ro m intrnational markt



### 6.3. Distribution



### 6.3.1 The challenge of Velocity of Circulation


### 6.3.2 The challenge of decentralization


### 6.3.3 The challenge of wallet




### 6.4. DeFi Services


- rvic to ocity

- additional commiion


### 6.5. Crowdsolving








<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>










## 7. Implementation of UoA
---

### 7.1. Structure of a Unit of Account

<div style={{textAlign: 'center'}}>
	<img src="/img/utilities_profile.svg" width="100%"></img>
</div>





<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>






## 8. CryptoCommodites as UoA
---

### 8.1. Defining Value

Across the history, a few economic models have been proposed. Putting these economic models in practise reuire either a broad consensus betwen the citizens or the compromise of a central planner.

* what holds the value? time, energy, commodities, work, costs, utility, capital, politics

* who determines the value, citizens), plannr top down)

* what i valu? Land Theory of Value Physiocrats), Intrinsic Theory of Value Adam Smith), Labor Theory of Value )Ricardo), Use Value / Exchange Value Theory Marx), Commodity’s costs of production John Stuart Mill ), Subjective Theory of Value Menger), Marginal Utility Theory of Value Jevons), Monetary theory of value  Keynes), Power Theory of Value

### 8.2. Evolution of Money

<table>
  <tr>
    <td></td>
    <td><img src="https://gasclick.pe/img/money_type_barter_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_commodity_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_metal_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_backed_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_fiat_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_plastic_128.png" /></td>
    <td><img src="https://gasclick.pe/img/money_type_crypto_128.png" /></td>
  </tr>
  <tr>
    <td></td>
    <td>Barter</td>
    <td>Commodity</td>
    <td>Metal</td>
    <td>Backed</td>
    <td>Fiat</td>
    <td>Plastic</td>
    <td>Crypto</td>
  </tr>
  <tr>
    <td>Uniform</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
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
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Engine</td>
    <td colspan='4'>Price Formation Machine</td>
    <td colspan='2'>Abandoned Road</td>
    <td>Many</td>
  </tr>
</table>

Historically, commodities has been used as basic forms of money. The problem is that they lack portability. This created the representative money or commodities backed money. However, this was replaced by fiat. Despite there is long way to go, crypto delivers the foundation to bring representative money back in a portable way.

Despite a value capture mechanism can be applied to any other assets than commodities, some requirements made commodities specially suitable.

 irst thy ar ungible.

atr that they are highly divisible.


A particularization o Utility Token

### 8.3. The Regresion Principle

The Regression Theorem, first proposed by Ludwig von Mises in his 1912 book The Theory of Money and Credit, states that the value of money can be traced back ("regressed") to its value as a commodity.


### 8.4. CryptoCommodity Ecosystem




### 8.5. Examples


CYGAS



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 9. Managmnt of CryptoCommodity
---





<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>








## 10. At the rescue of real economy
---

### 10.1. Real vs financial economy

barreras a la entrada impuestas x el fiat


### 10.2. The strangle of the real economy

<div style={{textAlign: 'center'}}>
	<img src="/img/realvsfinancial.jpg" width="40%"></img>
</div>

<div style={{textAlign: 'center'}}>
	<img src="/img/financial assets vs real assets March 2022_0.jpg" width="40%"></img>
</div>


### 10.3. Financial Exclusion



### 10.4. A decentralized commodities based economy centered in citizen

ecosystem of companies

hayek


### 10.5. Comparing Economic Models


- decoupled from fiat

- built-in price formation

- cryptocommodity vs stablecoin. Both capture price, one from it fownmarkt, the other from international market








<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>









## 11. How to Apply
---



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>









## 12. Conclusion
---




<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>






## 13. Annex 1. Positive vs Negative Feedback
---


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>




## 14. References
---


