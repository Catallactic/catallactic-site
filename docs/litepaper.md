---
slug: Litepaper
title: Litepaper
authors: [catallactic, pellyadolfo]
tags: [crypto, RWA, tokenization]
image: https://i.imgur.com/mErPwqL.png
---
---

:::note
`(Please, be aware that, whereas this litepaper already gives an idea of what a CryptoCommodity is, still is a work in progress)`
:::

## Abstract
---

During centuries representative money has been the preferred medium of exchange for different civilizations. The advent of electronic money brings, for the first time ever, the opportunity to create representative electronic money. This litepaper outlines a novel kind of token, CryptoCommodity. CryptoCommodity tokens are representative money in electronic form that represent the intrinsic value of an underlying asset. 

This litepaper is addressed to an advanced audience, which is able to understand the fundamentals of monetary theory. As such we wont discuss the advantages of representative money and what benefits it brings for societies as this is expected to be known by the reader.

## Keywords
---

Cryptocurrencies, cryptocommodities, stablecoins, price formation, stabilization mechanism, tokenomics, private currencies, currency competition, Cantillon Effects, monetary theory

<!-- truncate -->

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 1. A Review on Cryptocurrencies
---

### 1.1. DLTs and Blockchains

A blockchain is a database structure which organizes the information as chain of linked blocks. Each block contains a set of transactions and other essential details. When new transactions are being received into the blockchain, new blocks are being added to record the details of the transactions and state. The whole structure is packaged into a node. Blockchain nodes are computers that perform the network operations, storing, validating, and relaying transactions and blocks. Each node holds a copy of the entire ledger.

<div style={{textAlign: 'center'}}>
	<img src="https://www.nist.gov/sites/default/files/images/2019/09/25/blockchain.png" width="80%"></img>
</div>
<br/>

Blockchain nodes are interconnected organizing a blockchain network. The information stored in the nodes is synchronized in a way that all keep a copy of the latest transactions. Nodes are also engaged in the validation of the new transactions according to the consensus protocol defined for the network.

<div style={{textAlign: 'center'}}>
	<img src="https://www.catallactic.org/assets/images/ops_supply-bfea34b2da853e09203c7fa1998cee78.svg" width="80%"></img>
</div>
<br/>

The architecture of a blockchain network relies heavily on the collaborative effort of its nodes, which share and maintain a distributed ledger of transactions. This system of interconnected nodes ensures the decentralization of the network, significantly increasing its resilience against cyber threats and reducing reliance on any central authority for governance.Blo

### 1.2. Smart Contracts

Nick Szabo, the inventor of smart contract, defined it as such: “A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises.” A smart contract is a self-executing program that automates the actions required in an agreement or contract. Once completed, the transactions are trackable and irreversible. When a smart comtract is deployed to a blockchain network, it gets cloned to all of the network nodes to guarantee its decentralization. When the contract is invoker for a transaction by a wallet, all the nodes participate in the valiadtion of rhe transaction but only one node is resposible for execution of the transaction. The response from the transaction will be again synchronnized to to all other nodes in the network so they can have the status.

<div style={{textAlign: 'center'}}>
	<img src="https://www.catallactic.org/assets/images/ops_balances-f4a24f9af292d2e0304607b3bf4f7e54.svg" width="80%"></img>
</div>
<br/>

Smart contracts allow to build a wide variety of decentralized apps and tokens.

### 1.3. Tokenization

Tokenization is the process of digitally representing an asset, or asset feature, on a programmable platform. When tokenizing an asset, or asset feature, it gets bound to the token in a way that the token holder owns the asset feature. This asset feature is defined by the asset tokenizer. Tokens are created as smart contracts and, as programable logic, their lifecycle and features is managed by the logic in the smart contract.

#### 1.3.1. Token Lifecycle

Tokens are created in a process called minting. Tokens can be also destroyed in a process called burning.

Tokens can be expired or suspended.

#### 1.3.2. Token Features

When evaluating the asset, or asset property, we must consider the concept of <b>fungibility</b>. Fungibility is the property of a good, or a commodity, whose individual units are essentially interchangeable.

Tokens can be transferred between holders. This features applies to fungible and not-fungible tokens.

Valuable. A token tokenizing a fungible assets, or asset properties, can be provided a relative value when submitted to an exchange paired with other token. This relative value can be defined as a <b>price</b>. In that way, a token can be priced in terms of another token.

Tokens can be divisible. fractional ownership

Non-fungible tokens tokens can be configurable

#### 1.3.3. Tokenization Models

When we speak about the type of tokens, we are mostly referring to how its price is formed, and maybe maintained, by the token issuer. There are several strategies for price formation. This post aims to provide an overview.

According to the nature of the asset, or asset property, that the token is pegged to, existing cryptocurrencies come typically in 5 flavours: Unpegged Tokens, Utility Tokens, Security Tokens, Stablecoins and NFT.

<div style={{textAlign: 'center'}}>
	<img src="/img/tokenization_maturity_model_seal.svg" width="50%"></img>
</div>
<br/>
<br/>

The more basic category would be the <b>Unpegged Tokens</b>. Unpegged tokens have not any collateral asset, asset property or utility, providing value to the token units. The price of these tokens is based according to purely speculative value, eg memecoins.

A large and heterogeneus category of utility tokens comes next, as foundation for other pegged tokens. <b>Utility tokens</b> typically are valued by the utility, or service, provided to the participants in their ecosystem. Despite they can include some supply manipulation they do not follow a specific monetary policy to maintain the underlying value of this service and price  is delegated to market forces. Therefore these tokens are expected to have price fluctuations, i.e. the higher the utility provided, or the number of utilities, the higher the demand and, therefore, the price. The captured utility can be derived from an objective, or intrinsic, value as access (GameFi), action (Play to Earn, Move to Earn, Recycle to Earn), operation (DePIN) or governance (veTokens, DAOs). Alternatively, the utility can also derive from a subjective value, as a payments for a service e.g. network operation (utility coins), defi commision (e.g. exchange, payment or lending). 

A <b>Security Token</b> is the blockchain equivalent of a securitized asset traded on the stock market. Similar to traditional securities, security tokens are financial instruments that represent ownership interest in an asset. Their price, yield and any other features are borrowed from the underlying financial asset. This financial asset can be physical (e.g. real state), equity (shares, stocks), debt (short term bonds, HY bonds, US treasuries, notes) or some kind of derivative (e.g. options).

The first tokens in this list aimed to become currency are the Stablecoins. <b>Stablecoins</b> capture the price of an asset formed in an external market and set the captured price into the token. Stablecoins include a stabilization mechanism that aim to maintain the captured price, typically by supply manipulations, either manual or built-in by an Oracle. Stablecoins either can be collateralized by nothing (algorithmic stablecoins), by the asset (commodity, fiat of digital) or by a basket of products equivalent to the price of the assset (synths).

The <b>NFT tokens</b> are not in charge of any price formation by themselves. Instead, NFT tokens grant ownership of the asset to their holder and, therefore, the price of a NFT token is provided by the price of the backing asset. As non fungible tokens, they match one-to-one with the tokenized asset so NFT tokens do not have supply or price considerations. Furthermore NFT can have a different price. Some NFT tokens are created to represent some <b>identity</b> with the purpose of tracking, membership or access. The standard application of NFT tokens are collectibles. We can include souldbound tokens which are digital identity tokens that represent the traits, features, and achievements that make up a person or entity. Other typical applications for NFT tokens are Profile picture NFTs, Event tickets NFTs, Virtual Real Estate NFTs, Music NFTs.

If we look back to the physical world and the literature, <b>Hayek</b> dedicated a <a href="https://mises.org/library/denationalisation-money-argument-refined">few chapters</a> to define how private money should be created. For Hayek, privately issued currency units should be collateralized by a basket of commodities and the issuer should announce the composition of the basket to maintain the price as compromised.

> It might be expedient that the issuing institution should from the outset announce precisely the collection of commodities in terms of which it would aim to keep the value of the 'ducat' constant

Finally, the proposal of <a href="https://www.catallactic.org/"><b>Catallactic</b></a> is different to all strategies above despite it borrows ideas from some. Catallactic aims to create non-fiat commodity backed stablecoins capturing the marginal utility of the underlaying asset. For these Catallactic CryptoCommodity tokens, price would be defined by the issuer and price formation delegated to the exchanges where the CryptoCommodity token is traded. As Stablecoins, CryptoCommodities includes an stabilization mechanism in which supply in the exchanges is paired to physical demand of the commodity for the issuer in a period of time.

From the token collection above, only Stablecoins and CryptoCommodities aim to maintain an stable price and, therefore, hold the potential to become currencies.
Utility tokens are bound to an on-chain or virtual utility.



#### 1.3.4. Applications of Tokenization

The more intuitive application of tokenization is becoming <b>identifier</b> of a non-fungible token. This can deliver several benefits as ownership or traceability of the underlying asset to the token holder. Ownership, voting rights, enabling participation in decision-making processes


A basic application of a priced asset is to become a <b>currency</b>. There are some requirements to be a currency...

Another application of priced asssets is <b>investment</b>.


#### 1.3.5. Tokenizable Assets

Tangible 

Fungible

RWA tokenization



### 1.4. CryptoCurrencies

It is unclear what are is the definition of a currency as there many interpretations. To further understand what a currency is, is needed to identifiy currency functions. 

as <b>Medium of Exchange</b>. For Austrians, a currency is just a medium of exchange. According to Hayek, the currency better adopted by public would be one which is able to keep its value.

Stablecoins are not a good medium of exchange since they are fiat based. Utility tokens are not able to maintain their value so cannot be considered good currencies for a mainstream adoption.


as <b>Reserve of Value</b>


as <b>Unit of Account</b>

Coins unable to become currencies


### 1.5. Crypto Adoption

* Driven to fiat by VCs

* Many scams, lack of transparency

* No real world utilities

* No good medium of exchange

* Legal constraints


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 2. Creating Representative Money
---

### 2.1. A New Medium of Exchange

To understand a CryptoCommodity lets first examine how a regular RWA stablecoin works. A regular RWA stablecoin is backed by an asset, typically a physical asset. This asset has an unknown intrinsic value. By binding 1-to-1 the supply of the stablecoin to the RWA stock as collateral, the stablecoin is able to capture the intrinsic value of the asset. However, the stablecoin knowns nothing about the marginal utility that the RWA will produce on consumers. Therefore, the stablecoin is unable to form its own price and this must be borrowed from an external source, typically an internaciobal RWA market. There are some consequences of this fact: first, according to regulations, the stablecoin must be collateralized from inception and, therefore, only issuers with enough collateral can issue an stablecoin. Secondly, as the value is provided from inception, issuers do not have a chance to fundraise. Also, issuers, must custody and, potentially, redeem the asset incurring in high operating expenses. Since the price is borrowed from a fiat source, this configuration typically creates a fiat-bound currency, and decentralization in value is compromissed. Similar features apply to stablecoins bound to currencies, either fiat or not fiat.

A CryptoCommodity is also an stablecoin but improves this process at several levels. A CryptoCommodity also binds to an asset, but it does through an utility working as proxy. The bound utility helps by providing a marginal utility when exposed to consumers. The utility must be an off-chain utility, typically a real world utility.

But there is more. As an utility-proxied asset is one time event, meaning that when the utility is satisfied, the asset is consumed, is not possible to bind permanently to make an offer. By binding to this kind of asset, the CryuptoCommodity would have an continuously-growing supply. And this is not something that we want because the quality of the CrtypcCommodity would be far from optimal. In order to overcome this issue, the definition can be adapted to a "repeating utility-proxied asset", that is something that the issuer will be always able to provide periodically. Iin order to make the marginal utility quantifiable, the repeatability period must cover a known timespan where the utility provides value to the consumer, e.g. a gas cylinder provides value for one month at a cost of $16. This means that the marginal utility for consumers is $16 per month.

<div style={{textAlign: 'center'}}>
	<img src="/img/underlaying_asset.svg" width="60%"></img>
</div>
<br/>

### 2.2. CryptoCommodity Features


Hayek said money with stable value would be preferred by users.

Real utility to empower real economy.

Configurable by issuer. Benchmarks are required.

|                                 | Value                | Collateral    |
| :-------------------------------| :--------------------| :-------------|
| Commodity Money                 | Fixed to Itself      | Itself        | 
| Representative Money            | Fixed to Bound Asset | 100%          |
| Semi Representative Money       | Fixed to Bound Asset | Configurable  |
| Fiat Money                      | Debasement           | None          |


### 2.3. Comparing with existing crypto currencies




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

### 2.4. Deployed on Bitcoin L2

Bitcoin L2 is being created on top of bitcoin reusing bitcoin security backed by 60.000 servers and a plethora of miners.


### 2.5. Accessible with Wallets


### 2.6. Benefits of representative money:

By exposing the intrinsic value allowing price formation corresponding to subjective perception of consumers we get the benefits of represetative money:

 - price formation according to consumers
 - productive resources allocated by consumers will
 - no cantillon
 - private risk
 - coexisting gold standard


### 2.7. A New DeFi Industry


Fundraising for entrepreneurs

Investment for investors



Despite the crypto industry is not been created with the real economy in mind, most of the existing tools can be reused to enable a new industry that brings fundraising, transactions, payments, insurance, lending, investment, trading and related financial DeFi Services for real economy amd real consumers.

Scope

<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>


## 3. Tokenizable Assets
---

Precious metals, energy resources, agricultural products and real estate are examples of commodities that can be tokenized using blockchain technology.


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>



## 4. Delivering Representative Money
---

Decentraized tokenization platform must be avaiable for anyone.


<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>



## 5. Future Work
---