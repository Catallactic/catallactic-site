---
slug: Tokenization 1 - Tokens
title: Token Definition
authors: [catallactic, pellyadolfo]
tags: [money]
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


## 2. A Tokenization Map

<div style={{textAlign: 'center'}}>
	<img src="/img/tokenization2.svg" width="100%"></img>
</div>
<br/>







<br/><br/><div class="divider div-transparent div-dot"></div><br/><br/><br/>







## 3. Tokens

### 3.1. Anatomy of a Token

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

### 3.3. Smart Contracts

### 3.4. Token Standards



## 4. Tokens by Asset Capture
---

### 4.1. Tokenization Platforms


## 5. Tokens by Utility
---


- Identification tokens not described here

- Investment tokens not described here

- Currency tokens








## 6. Tokenization Protocols
---

### 6.1. Blockchain Layered Architecture

We can see blockchain as a layered architecture. 

<div style={{textAlign: 'center'}}>
	<img src="https://www.nigeriabitcoincommunity.com/wp-content/uploads/2022/05/smart-contracts.c-1.png" width="60%"></img>
</div>
<br/>

### 6.2. Blockchain Protocols

A blockchain protocol is a set of underlying rules that define how a blockchain will work. Based on the underlying rules of the protocol it’s possible to build a business ecosystem. Usually, protocol’s rules comprise everything from how tokens can be issued, how value is created, and how interactions happen on top of the protocol.

<div style={{textAlign: 'center'}}>
	<img src="/img/cryptocommodities_scope.svg" width="100%"></img>
</div>
<br/>

Every layer is simply a set of protocols that describe how the blockchain operates.

### 6.3. Tokenization Protocols

The topmost layer is the layer on which different applications on the network run, including smart contracts, oracles. 

Tokenization Protocols produce tokens which are specialized smart contracts.

- Infra
- DeFi
- CeFi
- ReFi
- SocialFi
- eBuiness
- Currencies

