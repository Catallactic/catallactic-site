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

### 2.1. Blockchain Layered Architecture

We can see blockchain as a layered architecture. 

<div style={{textAlign: 'center'}}>
	<img src="https://www.nigeriabitcoincommunity.com/wp-content/uploads/2022/05/smart-contracts.c-1.png" width="60%"></img>
</div>
<br/>

### 2.2. Blockchain Protocols

A blockchain protocol is a set of underlying rules that define how a blockchain will work. Based on the underlying rules of the protocol it’s possible to build a business ecosystem. Usually, protocol’s rules comprise everything from how tokens can be issued, how value is created, and how interactions happen on top of the protocol.

<div style={{textAlign: 'center'}}>
	<img src="/img/cryptocommodities_scope.svg" width="100%"></img>
</div>
<br/>

Every layer is simply a set of protocols that describe how the blockchain operates.

### 2.3. Tokenization Protocols

The topmost layer is the layer on which different applications on the network run, including smart contracts, oracles. 

Tokenization Protocols produce tokens which are specialized smart contracts.

- Infra
- DeFi
- CeFi
- ReFi
- SocialFi
- eBuiness
- Currencies

### 2.4. Smart Contracts





<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>







## 3. Tokens

### 3.1. What is a Token

A crypto token is an special kind of smart contract. A token typically resides in one blockchain and, therefore, its content is replicated in all the nodes of the blockchain. A token can also resides in several blockchain by making use of some interoperability mechanim. As any other smart contract, a token is implemented in one of the smart contract languages supported by the blockchain in which is deployed, as Solidity, Cairo, Vyepr, Rust, Clarity or Yul.

<div style={{textAlign: 'center'}}>
	<img src="/img/token.svg" width="100%"></img>
</div>

A wallet can own a token entirely or a fraction of the token. A token binds a feature of an asset to the property of the token. By having a token in your wallet you own some feature of the asset. Depending on the kind of token, this feature can be the at itl or a fraction o the asset, the value of the asset, the price of the asset, a yield produced by the asset and other to come. 

A token can be transferred between wallet accounts and the represented property will be also transferred. A token is typically exchanged between parties as the barebone of an ecosystem, delivering a set of attached utilities to the ecosystem participants. These utilities can be designed to materialize business patterns, e.g. loans, transfers, bets, coupons, rights, rents, certificates or money, to name a few.

The process of designing a token including its underlying asset, its feature, its utilities... is called tokenization and the outcome is a tokenization protocol, aka token. By tokenizing an asset you can make it liquid.

### 3.2. Designing a Token

When we design a token we bind 2 worlds. On one hand, we have the real world represented by the demand. Demand is the number of goods or services, physical or digital, that the consumer acquires from the provider in exchange of units of the token. On the other hand, we have the monetary world represented by the supply which is number of tokens in existence.

<div style={{textAlign: 'center'}}>
	<img src="/img/supply_vs_demand.svg" width="60%"></img>
</div>

Whereas our efforts will focus in having a higher demand as possible, the demand is not a variable that we can control or decide. Instead, in order to design a token, we will adjust the supply accordingly to obtain the intended token profile. As there are a few possible ways to adjust the supply, we have a tool to design tokens with different profiles. We will discuss about this in the next sections.

### 3.3. Estimating the Demand

The demand for your token will be motivated because your users apreciate one or more of the utilities of the asset, or assets, that are bound to the token. The demand is related to the physical world on how good is your business offer. If your offer is good, your users will be eager to acquire, or enjoy, the utilities that you are offering and the demand of your token will increase. 

In the next sections we will expose how to undertand the demand of your token, what can the bound assets and utilities be and how can it be quantified.




#### 3.3.1. The underlying asset(s)

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

#### 3.3.2. The attached utility(ies)

<table>
  <tr>
    <td rowspan="3">Monetary Utilities</td>
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
    <td rowspan="3">Monetary Services</td>
    <td>Cards</td>
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
  <tr>
    <td rowspan="6">Financial Services</td>
    <td>Staking</td>
    <td></td>
  </tr>
  <tr>
    <td>Profit-Sharing</td>
    <td></td>
  </tr>
  <tr>
    <td>Liquidity Provision</td>
    <td></td>
  </tr>
  <tr>
    <td>Discounts</td>
    <td></td>
  </tr>
  <tr>
    <td>Mining</td>
    <td></td>
  </tr>
  <tr>
    <td>Launchpad</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Identification</td>
    <td>Access</td>
    <td></td>
  </tr>
  <tr>
    <td>Governance</td>
    <td></td>
  </tr>
</table>

#### 3.3.3. Identiying the ecosystem(s)


#### 3.3.4. Quantifying the demand


uantying the demand will help later on to estimate the supply


### 3.4. Designing the Supply

The supply is the number of existing units for the token. The supply is the variable that we can use to provide the expected price profile to the token according to the demand of the token.

The number of units of a token can be fixed or can be variable, depending on the policies defined by the token designers. Tokens with a <b>Fixed Supply</b> follow a gold standard pattern. Tokens with a Variable Supply can be managed by some Supply Management Mechanism to capture some asset feature or can freely float at the mercy of demand. If the supply grows we say the token has an <b>Inflationary Supply</b>. If the supply shrinks we say the token has a <b>Deflationary Supply</b>.

We call <b>Max Supply</b> to the max amount of units that a token can have. Not all tokens have a defined max supply, some tokens can increase the supply indefinitely. We say they are uncapped tokens. Other tokens ha a known Max Supply, either because there is a physical limitation on creation or because it is limited by token designer. These tokens are denominated capped tokens.

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/token_supply_components.svg" width="28%"></img>
</div>

The number of unit that a token has in a certain moment is called Total Supply. The unit o the token are typically aigned to dierent account and can have in dierent ituation o liuidity. locked v circulating

th circulating upply can b in holdr account or can b in xchang pair rady to b tradd.


#### 3.4.1. Supply Management Mechanisms

Th intrcation btw th dmand and th upply will din th pric o th tokn and also its proil.

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/Supply-and-Demand-Curve.webp" width="60%"></img>
</div>

There are esemptially 3 mechanims to manage the supply:

* expand and collapse the supply by minting and burning token units

* adding tax to transaction

* use a supporting account as reserve

All these Supply Management Mechanisms can be manually executed or automatd a part of some transactional logic in the smart contract. 

##### 3.4.1.1. Burn and Mint

The implicit way to manage the supply is by calling explicit functions in the smart contract to create (mint) and destroy (burn) token units.

In order to create new unit, a <b>mint</b> operation must be executed over the token. This mint operation can be triggered externally by some holder account, internally by the issuing team or be triggered from the token smart contract itself as a response to some defined threshold. A mint operation typically devaluate the price of the token so minting is a discouraged operation as it can hurt the reputation of a token issuer. It should be done only under known circuntances in a predictable way. 

Conversely, we can reduce the supply of token by triggering a <b>burn</b> operation which will have the opposite effect of increasing the price because the supply is reduced for the same demand.

Burn and mint i a coar grain upply managmnt bcau w do not dirctly control th numbr o tokn in th xchang to orm th pric.

##### 3.4.1.2. Stability Fees

Stability Fees are taxes taken by the token on transaction. They are typically automated within the transaction logic and, therefore, not manual intervention is required. This contributes to token tranparency. tability  can alo b ud in conjuction with th rrv approach.

##### 3.4.1.3. Reserve

A in grain managmnt o th tokn pric i by maintaining a rrv account paird to th xchang account. Tokn unit can b addd to th upply whn w want to rduc th upply and incra th pric. And, covrly, tokn unit can b xtractd rom th rrv account to rplnih th xchang account whn w want to xnd th pric.

### 3.5. Price Formation

<b>Price formation in crypto happens in the exchanges</b>. The price is alway formed between 2 tokens paired in a pool. The exchanges have algorithms to work out the price of every token in the pool depending on their respective demand.

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.pe/img/price_determination2.svg" width="100%"></img>
</div>

The pools where our token is trading, can be in one exchange, or can be in many exchanges, in the same network or distributed across different blockchains. When several exchanges are involved, the price is consolidated between the different pools by investors practicing <b>arbitrage</b>. This guarantees that the price is mostly uniform across all the exchanges on a determined time.

Another point to consider is that <b>only the amount of tokens deposited in exchanges account determine the price at every moment</b>, no matter how many tokens of the supply are held on investors wallets or locked. This means that, in the case that we want to have control over the price, we must be aware of the amount of tokens placed in the pool of the exchanges.

### 3.6. Defining a Monetary Policy

Tokenization Models. During the last decade a new tokenization models has been proposed. Tokenization model define how the token is bound to the underlying asset and what it grants or its holders

- no underlaying asset

- utility tokens, which capture an undetermined set of utilities

- security tokens, which provide some kind o yield over a financial token

- stablecoins

- NFT which provide ownerhip of the underlying asset. 

<div style={{textAlign: 'center'}}>
	<img src="https://gasclick.co/img/monetary_policies.svg" width="100%"></img>
</div>

### 3.7. Tokens by Utility



### 3.8. Token Standards


### 3.9. Tokenization Platforms



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>



## 4. Identification Tokens

### 4.1. Identification Tokens Requirements


### 4.1. Identification Tokens Underlying Assets

### 4.1. Identification Tokens Utilities


### 4.1. Existing Identification Tokens


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 5. Investment Tokens

### 5.1. Investment Tokens Requirements


### 5.1. Investment Tokens Underlying Assets

### 5.1. Investment Tokens Utilities


### 5.1. Existing Investment Tokens

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 6. Currency Tokens
---

### 6.1. Currency Protocols

Once we have dicussed Tokenization Protocols and introduced tokens, is time now for Currencies as a new particular case of Tokens. 

Currencies, by definition, should exhibit a very stable price profile. To achieve this goal, they hould take its price from a large underlaying market with low fluctuation. This confers currencies with a specific set of utilities that more generic tokens are not suitable to fulfill.




### 6.2. Currency Requirements

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
</table>






### 6.3. Currency Utilities

Tradicionally, it ha bn aumd that th unction o mony ar 3:

* man xchang

* unit o account

* tor o valu

A currncy can provid om or all th 3 unction. Howvr, bn tor o valu and man o xchang at th am ti i diicult bcau th Grhham Law. typically a currncy will pcializd in on o th 3 unction.

<div style={{textAlign: 'center'}}>
	<img src="/img/cryptocommodities_scope2.svg" width="100%"></img>
</div>
<br/>


### 6.4. Currency Tokenization Platforms


reserve protocol

erc-3643

catallactic

conigurabl Requirements


### 6.5. Coexisting Monetary Protocols




### 6.6. Monetary Protocols Indutry

aggrgator
reserve?

insurers

analyt

auditor








<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 7. Currencies as Mean of Payment


### 7.1. Mean of Payment Requirements


- the token must <b>comply with the regulations</b> in the jurisdictions where is deployed. This does not mean it should be deployed in all jurisdictions, as some jurisdiction apply rules incompatible with decentralization


- the token must provide <b>privacy</b> to its users



#### 7.1.1. The challenge of Velocity of Circulation


#### 7.1.2. The challenge of Wallets



### 7.2. Underlying Assets



### 7.3. Additional Utilities




### 7.4. Existing Monetary Protocols


#### 7.4.1. Stablecoins


#### 7.4.2. Syncs



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>







## 8. Currencies as Store of Value


### 8.1. Store of Value Requirements

- the price of the token must be <b>stable</b> to enable further utilities,

- the token must be <b>secure</b> and not subject to any hack

- the token must be <b>decentralized</b> which means no one, even the issuer, should be able to interfere its behaviour. As, on the other hand, we must stabililize the price, supply management techniques, such as mint/burn, reserve or stability fees, must be transparently performed by the transactional logic without manual intervention

- the token must be <b>transparent</b> and disclose all the required information to issuers, holders and authorities





#### 8.1.1. The challenge of Decentralization




### 8.2. Underlying Assets



### 8.3. Additional Utilities


### 8.4. Existing Monetary Protocols





<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>




## 9. A Unit of Account (UoA) Currency
---

By adjusting the supply to the demand, a UoA captures the economic value of the asset in the market where this UoA is used as mean of payment. The exchanges are in charge of converting this value into a price, first with the tokens directly paired, and after with the rest of tokens.


### 9.1. The UoA Ecosystem



<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem.svg" width="100%"></img>
</div>

### 9.2. UoA Requirements

Creating a UoA brings additional reuirement to the previous token type analized. They are as follows:

* a UoA needs fulfill requirements for a store o value

* differently to a stablecoin, a UoA needs an underlying market for price formation. This will come with benefits for the issuer later on.


### 9.3. Structure of a UoA

<div style={{textAlign: 'center'}}>
	<img src="/img/utilities_profile.svg" width="100%"></img>
</div>


### 9.4. Defining the core utility




### 9.5. Including additional utilities

- governance


### 9.6. The UoA Tokenization Model

A Unit of Account is an specialization of utility token where only a certain set of utilities are part of the price formacion mechanim.

<div style={{textAlign: 'center'}}>
	<img src="/img/tokenization_maturity_model_seal.svg" width="60%"></img>
</div>










<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>











## 10. CryptoCommodites as UoA
---

### 10.1. Defining Value


<div style={{textAlign: 'center'}}>
	<img src="/img/cryptocommodities_scope3.svg" width="100%"></img>
</div>
<br/>


* what holds the value? time, energy, commodities, work, costs, utility, capital, politics

### 10.2. Defining Value

Across the history, a few economic models have been proposed. Putting these economic models in practise reuire either a broad consensus betwen the citizens or the compromise of a central planner.

* what holds the value? time, energy, commodities, work, costs, utility, capital, politics

* who determines the value, citizens), plannr top down)

* what i valu? Land Theory of Value Physiocrats), Intrinsic Theory of Value Adam Smith), Labor Theory of Value )Ricardo), Use Value / Exchange Value Theory Marx), Commodity’s costs of production John Stuart Mill ), Subjective Theory of Value Menger), Marginal Utility Theory of Value Jevons), Monetary theory of value  Keynes), Power Theory of Value

### 10.3. Evolution of Money

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

### 10.4. The Regresion Principle

The Regression Theorem, first proposed by Ludwig von Mises in his 1912 book The Theory of Money and Credit, states that the value of money can be traced back ("regressed") to its value as a commodity.


### 10.5. CryptoCommodity Ecosystem




### 10.6. Examples


CYGAS



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>












## 11. Supply Management of CryptoCommodites
---


### 11.1. Determining Max Supply


### 11.2 Consolidated Supply Managment

Th main goal of th Unit of Account i th built-in pric ormatio mchanim. or this goal w nd to crat a ngativ dbakc loop. Thi i achivd by matching th numbr o tokn on th xchang to th xitting dmand and allowing xchang to orm th pric. Th built-in mchanim guarant that th numbr o itm conumd match th numbr th upply o th tokn in th xchang. Thror, th pric i ormd ntrily by conumr and i indpndnt o ny othr currncy.

<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem.svg" width="100%"></img>
</div>

vry itm i rdmabl by a ral itm.

at vry mont, th xiting collatral match th dmand. A a conunc thi kind o currncy i not ully collatralizd. Thi allow providing liuidity without impact in th pric.

stable system

### 11.3. Supply Management on launch



### 11.4. Capturing Value



### 11.5. Singular events on the lifecycle









<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 12. The CryptoCommodites Value Chain
---

All the requirements described in section 3 and 4, namely, currency requirements, cryptocurrency requirements and UoA requirements, must be particularized for each stage of the UoA Value Chain. for example, the compliance in the funding stage is not the same as the compiance in the distribution stage. In this section we will visit every funding stage and discuss requirements and opportunities.

<div style={{textAlign: 'center'}}>
	<img src="/img/token_value_chain.svg" width="100%"></img>
</div>

Creating a token is not enough to guarantee it will become a currency. In order to get a currency, some other requirement must be fulfilled:




The aforementioned requirements must be particularized to every stage of the value chain and to each juridiction, undelying asset and utilities delivered, i.e. there must be a case by case analysis, but also a minimum set of requirements should be defined.

The next sections will discuss the main obtacles for adoption.

### 12.1. Funding


- crypcommodity allow unding 

- withouth collatral

- rgulatort advantag


### 12.2. Negotiation

- capturing th valu

- cryptocommodity v tablcoin.Both captur pric, on rom it ownmarkt, th othr ro m intrnational markt



### 12.3. Distribution







### 12.4. DeFi Services


- rvic to ocity

- additional commiion


### 12.5. Crowdsolving



### 12.6. UoA vs Stablecoin

Stablecoin-based RWA tokenization

| Left | Centre | Right |
| :--- | :----: | ----: |
| 1    |   2    |     3 |

cryptocommodity v tablcoin.Both captur pric, on rom it ownmarkt, th othr ro m intrnational markt

tokenization of RWA blablabla







<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>







## 13. Implementation of CryptoCommodites
---


https://github.com/Catallactic/catallactic-suite



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>





## 13. Managmnt of CryptoCommodites
---

https://github.com/Catallactic/catallactic-admin



<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>













## 14. At the rescue of real economy
---

### 14.1. Real vs financial economy

barreras a la entrada impuestas x el fiat


### 14.2. The strangle of the real economy

<div style={{textAlign: 'center'}}>
	<img src="/img/realvsfinancial.jpg" width="40%"></img>
</div>

<div style={{textAlign: 'center'}}>
	<img src="/img/financial assets vs real assets March 2022_0.jpg" width="40%"></img>
</div>

### 14.3. Financial Exclusion




### 14.4. A decentralized commodities based economy centered in citizen

ecosystem of companies

hayek


### 14.5. Stability of a UoA Market


Th main goal of th Unit of Account i th built-in pric ormatio mchanim. or this goal w nd to crat a ngativ dbakc loop. Thi i achivd by matching th numbr o tokn on th xchang to th xitting dmand and allowing xchang to orm th pric. Th built-in mchanim guarant that th numbr o itm conumd match th numbr th upply o th tokn in th xchang. Thror, th pric i ormd ntrily by conumr and i indpndnt o ny othr currncy.

<div style={{textAlign: 'center'}}>
	<img src="/img/unit_of_account_ecosystem_loop.svg" width="100%"></img>
</div>


### 14.6. Comparing Economic Models


- decoupled from fiat

- built-in price formation

- cryptocommodity vs stablecoin. Both capture price, one from it fownmarkt, the other from international market





<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>







## 15. Conclusion
---




<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>






## 16. Annex 1. Positive vs Negative Feedback
---


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>




## 17. References
---


